
const images = document.querySelector('.images');
const button = document.querySelector('.btn');


button.addEventListener('click', show);

let blob = 1;

const list = ['asd','rasda','asdas'];

function show (event) {
    event.preventDefault();
    const image = document.querySelector('.img');
    if(blob <= list.length){
        const newImg = document.createElement('div');
        newImg.innerHTML = '<img src="cat' + blob + '.jpg">'
        newImg.classList = 'img';
        if(image){
            image.remove();
        }
        images.appendChild(newImg);
        blob++
    } else {
        if(image){
            image.remove();
        }
        const text = document.createElement('div');
        text.innerHTML = '<h1>No more cats :(</h1>';
        text.classList = 'img';
        images.appendChild(text);
    }

}

