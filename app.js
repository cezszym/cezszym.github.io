const images = document.querySelector('.images');
const button = document.querySelector('.btn');

button.addEventListener('click', show);

let blob = 1;

const list = ['asd', 'rasda', 'asdas'];

function ajax_get(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log('responseText:' + xmlhttp.responseText);
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + ' in ' + xmlhttp.responseText);
        return;
      }
      callback(data);
    }
  };

  xmlhttp.open('GET', url, true);
  xmlhttp.send();
}

function show(event) {
  event.preventDefault();
  const image = document.querySelector('.img');
  ajax_get('https://randomfox.ca/floof/', function (data) {
    console.log(data);
    const newImg = document.createElement('div');
    newImg.innerHTML = '<img src="' + data['image'] + '">';
    newImg.classList = 'img';
    if (image) {
      image.remove();
    }
    images.appendChild(newImg);
  });

  // if(blob <= list.length){
  //     const newImg = document.createElement('div');
  //     newImg.innerHTML = '<img src="cat' + blob + '.jpg">'
  //     newImg.classList = 'img';
  //     if(image){
  //         image.remove();
  //     }
  //     images.appendChild(newImg);
  //     blob++
  // } else {
  //     if(image){
  //         image.remove();
  //     }
  //     const text = document.createElement('div');
  //     text.innerHTML = '<h1>No more cats :(</h1>';
  //     text.classList = 'img';
  //     images.appendChild(text);
  // }
}
