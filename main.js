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



/*
    MÉTHODE 2
*/

// let constraintObj = {
//     audio: false,
//     video: true
// }

// navigator.mediaDevices.getUserMedia(constraintObj)
//     .then((mediaStreamObj) => {
//         let video = document.querySelector('#video');
//     })