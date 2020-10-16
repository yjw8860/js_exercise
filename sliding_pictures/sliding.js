const slideBtns = document.querySelectorAll('.slide_btn'),
leftImg = document.querySelector('#left_img'),
mainImg = document.querySelector('#main_img'),
rightImg = document.querySelector('#right_img'),
imgs = ['imgs/main_1.jpg', 'imgs/main_2.jpg', 'imgs/main_3.jpg'];

let imgsIndex = [0,1,2]

const arrayMinus = (array) => {
    let x = [];
    for(let i=0;i<array.length;i++){
        x[i] = array[i] - 1;
        if( x[i] < 0){
            x[i] = array.length - 1;
        }
    }
    return x;
}

const arrayPlus = (array) => {
    let x = [];
    for(let i=0;i<array.length;i++){
        x[i] = array[i] + 1;
        if(x[i] === array.length){
            x[i] = 0;
        }
    }
    return x;
}

const moveLeft = (elements, className) =>{
    elements.forEach(element => {
        element.classList.remove(className);    
    });
    imgsIndex = arrayPlus(imgsIndex);
    leftImg.src = imgs[imgsIndex[0]];
    mainImg.src = imgs[imgsIndex[1]];
    rightImg.src = imgs[imgsIndex[2]];
}

const moveRight = (elements, className) =>{
    elements.forEach(element => {
        element.classList.remove(className);    
    });
    imgsIndex = arrayMinus(imgsIndex);
    leftImg.src = imgs[imgsIndex[0]];
    mainImg.src = imgs[imgsIndex[1]];
    rightImg.src = imgs[imgsIndex[2]];
}

const slideLeft = () =>{
    const elements = [mainImg, rightImg];
    mainImg.classList.add('slideLeftClass');
    rightImg.classList.add('slideLeftClass');
    setTimeout(moveLeft, 300, elements, 'slideLeftClass');
}

const slideRight = () =>{
    const elements = [mainImg, leftImg];
    mainImg.classList.add('slideRightClass');
    leftImg.classList.add('slideRightClass');
    setTimeout(moveRight, 300, elements, 'slideRightClass');
}



slideBtns[0].addEventListener('click', slideLeft);
slideBtns[2].addEventListener('click', slideRight);