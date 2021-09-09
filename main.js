document.onreadystatechange = () => {

    if(document.readyState === 'interactive') {
        const
            snapButton = document.getElementById('snap-button');
            width = 640;
            height = 480;



        const startup = () => {

            navigator.mediaDevices.getUserMedia({
                audio: false,
                video: {
                    width, height
                }
            })
            .then(stream => {
                video.srcObject = stream;
                video.onloadedmetadata = () => {
                    video.play();
                }
            })
            .catch(console.error);
        };

        window.addEventListener('load', startup);



    const takeAPicture = () => {
        const canvas = document.querySelector('canvas');
        const video = document.getElementById('video');
        const photo = document.getElementById('photo');

        const context = canvas.getContext('2d');

        canvas.height = height;
        canvas.width = width;

        context.drawImage(video, 0, 0, width, height);

        const data = canvas.toDataURL('image/png');
        // const sliderImages = [];


        photo.setAttribute('src', data);
        photo.setAttribute('alt', data);
    };

    snapButton.addEventListener('click', () => {
        takeAPicture();
    });

    }
    
}