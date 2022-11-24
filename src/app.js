let images = document.querySelectorAll('img');

let generateRandomImage = function (randomImageIndex) {
    images.forEach(element => {
        let randomImageIndex = Math.floor(Math.random() * 20);
        let imageSrc = element.src;
        element.src = imageSrc + randomImageIndex;
    });
}
for(let i=0; i < images.length; i++){
    generateRandomImage()
}

let nextBtn = document.getElementById('next');

nextBtn.addEventListener('click', function(e) {
    document.querySelectorAll('.active').forEach(element => {
        element.classList.remove('active');
        element.classList.add('previous');
    });
    document.querySelectorAll('.next').forEach(element => {
        element.classList.remove('next');
        element.classList.add('active');
    });
});