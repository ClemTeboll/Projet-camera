/* 
    MÉTHODE 1
*/

const video = document.getElementById('video');

const startup = () => {

    

    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
    })
    .then(stream => {
        video.srcObject = stream;
        video.onloadedmetadata = (ev) => {
            video.play();
        }
    })
    .catch(console.error);
}

window.addEventListener('load', startup, false);