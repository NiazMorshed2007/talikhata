var video = document.getElementById("camera");

// var canvas = document.getElementById("canvas");

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
    })
    .then((strem) => {
      video.srcObject = strem;
      video.play();
    });
}
//
// var Context = canvas.getContext("2d");

// document.getElementById("snap").addEventListener("click", () => {
//   Context.drawImage(video, 0, 0, 640, 480);
// });
