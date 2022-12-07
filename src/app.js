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

function removeClassByPrefix(node, prefix) {
	var regx = new RegExp('\\b' + prefix + '[^ ]*[ ]?\\b', 'g');
	node.className = node.className.replace(regx, '');
	return node;
}

let slideCount = 0
document.querySelectorAll('.slide').forEach(element => {    
    slideCount++;
    element.classList.add('slide-' + slideCount);
});

let nextBtn = document.getElementById('next');
let pageCount = document.getElementById('pageCount');
let i = 1;
pageCount.innerHTML = '/0' + i;

nextBtn.addEventListener('click', function(e) {
    document.querySelectorAll('.main-col-right').forEach(element => {
       element.classList.add('move-left');
       setTimeout(function () {element.classList.remove('move-left')}, 1000);
    });
    document.querySelectorAll('.slide').forEach(element => {    
        if (element.classList.contains('slide-1')) {

            setTimeout(function () {removeClassByPrefix(element, 'slide-')}, 1000);
            setTimeout(function () {element.classList.add('slide-' + slideCount)}, 1000);
        } else {
            for (let i = 1; i <= slideCount; i++) {
                if(element.classList.contains('slide-' + i)) {
                    setTimeout(function () {removeClassByPrefix(element, 'slide-')}, 1000);
                    setTimeout(function () {element.classList.add('slide-' + (i - 1))}, 1000);
                }
            }
        }
    });
 
    document.body.classList.add('transitioning');
    setTimeout(function () {document.body.classList.remove('transitioning')}, 1000);
    setTimeout(function () { 
    if (i == 3) {
        i = 1
    } else {
        i++;
    }
    pageCount.innerHTML = '/0' + i;
    }, 375);
 
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 39) {
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
        document.body.classList.add('transitioning');
        setTimeout(function () {document.body.classList.remove('transitioning')}, 1000);
        setTimeout(function () { 
        if (i == 3) {
            i = 1
        } else {
            i++;
        }
        pageCount.innerHTML = '/0' + i;
        }, 375);
    }
 
});