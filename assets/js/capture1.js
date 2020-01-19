(function() {

  var width = 500;    // We will scale the photo width to this
  var height = 500;     // This will be computed based on the input stream

  // |streaming| indicates whether or not we're currently streaming
  // video from the camera. Obviously, we start at false.

  var streaming = false;

  // The various HTML elements we need to configure or control. These
  // will be set by the startup() function.

  var video1 = null;
  var canvas1 = null;
  var photo1 = null;
  var startbutton1 = null;

  function startup() {
    video1 = document.getElementById('video1');
    canvas1 = document.getElementById('canvas1');
    photo1 = document.getElementById('photo1');
    startbutton1 = document.getElementById('startbutton1');

    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(function(stream) {
      video1.srcObject = stream;
      video1.play();
    })
    .catch(function(err) {
      console.log("An error occurred: " + err);
    });

    video1.addEventListener('canplay', function(ev){
      if (!streaming) {
        height = video1.videoHeight / (video1.videoWidth/width);

        // Firefox currently has a bug where the height can't be read from
        // the video, so we will make assumptions if this happens.

        if (isNaN(height)) {
          height = width;
        }

        video1.setAttribute('width', width);
        video1.setAttribute('height', height);
        canvas1.setAttribute('width', width);
        canvas1.setAttribute('height', height);
        streaming = true;
      }
    }, false);

    startbutton1.addEventListener('click', function(ev){
      takepicture();
      ev.preventDefault();
    }, false);

    clearphoto();
  }

  // Fill the photo with an indication that none has been
  // captured.

  function clearphoto() {
    var context = canvas1.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas1.width, canvas1.height);

    var data = canvas1.toDataURL('image/png');
    photo1.setAttribute('src', data);
  }

  // Capture a photo by fetching the current contents of the video
  // and drawing it into a canvas, then converting that to a PNG
  // format data URL. By drawing it on an offscreen canvas and then
  // drawing that to the screen, we can change its size and/or apply
  // other changes before drawing it.

  function takepicture() {
    var context = canvas1.getContext('2d');
    if (width && height) {
      canvas1.width = width;
      canvas1.height = height;
      context.drawImage(video1, 0, 0, width, height);

      var data = canvas1.toDataURL('image/png');
      photo1.setAttribute('src', data);

      var link = document.createElement('a');
      link.download = "my-image.png";
      link.href = data;
      link.click();
    } else {
      clearphoto();
    }
  }

  // Set up our event listener to run the startup process
  // once loading is complete.
  window.addEventListener('load', startup, false);
})();
