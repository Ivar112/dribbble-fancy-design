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
let counter = document.getElementById('counter');
let i = 1;
let j = 1;
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
    if (i == slideCount) {
        i = 1
    } else {
        i++;
    }
    pageCount.innerHTML = '/0' + i;
    }, 375);
    
    counter.classList.add('animating');
    setTimeout(function () {removeClassByPrefix(counter, 'count-')}, 1000);
    if (j == slideCount) {
        j = 1
    } else {
        j++;
    }
    setTimeout(function () {counter.classList.add('count-' + j)}, 1000);
    setTimeout(function () {counter.classList.remove('animating')}, 1000);
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 39) {
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
        if (i == slideCount) {
            i = 1
        } else {
            i++;
        }
        pageCount.innerHTML = '/0' + i;
        }, 375);
        
        counter.classList.add('animating');
        setTimeout(function () {removeClassByPrefix(counter, 'count-')}, 1000);
        if (j == slideCount) {
            j = 1
        } else {
            j++;
        }
        setTimeout(function () {counter.classList.add('count-' + j)}, 1000);
        setTimeout(function () {counter.classList.remove('animating')}, 1000);
    }
 
});

for (let i = 1; i <= 3; i++) {
    document.getElementById('fullPage' + i).addEventListener('click', function(e) {
        document.querySelectorAll('.full-page-' + i)[0].classList.add("show");
        document.getElementById('fullPage' + i).firstElementChild.classList.add("zoom");
        setTimeout(function () {document.getElementById('fullPage' + i).firstElementChild.classList.remove("zoom")}, 310);
        document.body.classList.add('page-open');
    });
}

document.querySelectorAll('.btn-close').forEach(element => {
    element.addEventListener('click', function (e) {
        setTimeout(function () {element.parentElement.classList.remove('show')}, 1500);
        setTimeout(function () {element.parentElement.lastElementChild.classList.remove('show')}, 1500);
        setTimeout(function () {element.parentElement.lastElementChild.previousElementSibling.classList.remove('show')}, 1500);
        document.body.classList.add('page-closing');
        setTimeout(function () {document.body.classList.remove('page-closing');}, 1500);
        document.body.classList.remove('page-open');
    });
});

document.querySelectorAll('.content').forEach(element => {
    element.addEventListener('wheel', function (e) {
        if (element.nextElementSibling) {
            element.nextElementSibling.classList.add('show');
        }
    });
});