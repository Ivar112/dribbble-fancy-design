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
    document.querySelectorAll('.main-col-right').forEach(element => {
        if (element.classList.contains('active')) {
            element.classList.remove('active');
            element.classList.add('previous');
        } else if (element.classList.contains('next')){
            element.classList.remove('next');
            element.classList.add('active');
        } else if (element.classList.contains('previous')){
            element.classList.remove('previous');
            element.classList.add('next');
        }
    });
});