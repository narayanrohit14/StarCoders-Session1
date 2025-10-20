let photos = document.getElementsByClassName('dailyPhoto');

function changePhoto(index) {
    let oldPhoto = document.getElementsByClassName('active')[0];
    let newPhoto = photos[index];

    if (newPhoto) {
        if (oldPhoto) {
            oldPhoto.classList.remove('active');
        }

        newPhoto.classList.add('active');

    }

}