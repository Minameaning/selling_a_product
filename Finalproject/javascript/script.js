(()=>{
    const seconds = 1000;
    const minutes = seconds*60;
    const hours =minutes*60;
    const days =hours*24;
function setElementInnerText(id,text){
    const element=document.getElementById(id);
    element.innerText =text;
}
function countDown(){
    const now = new Date().getTime();
    const endPro = new Date('December,25,2023 23:59:59').getTime();
    const unixTimeLeft =endPro-now;

    // const dayElem = document.getElementById('days');
    // dayElem.innerText=Math.floor(unixTimeLeft/day);
    setElementInnerText('days',Math.floor(unixTimeLeft/days))
    setElementInnerText('hours',Math.floor(unixTimeLeft % days/hours))
    setElementInnerText('minutes',Math.floor(unixTimeLeft % hours/minutes))
    setElementInnerText('seconds',Math.floor(unixTimeLeft % minutes/seconds))
    
}
function run(){
countDown();
setInterval(countDown,seconds)
}
run();
})();

const imagePaths = {
    'white': [
        '../images/clock-white.png',
        'https://clocky.com/cdn/shop/products/Clocky-Almond1.jpg?v=1592587269',
        'https://clocky.com/cdn/shop/products/Clocky-Almond3.jpg?v=1592587271',
        'https://clocky.com/cdn/shop/products/Clocky-Almond2.jpg?v=1592587276',
        'https://clocky.com/cdn/shop/t/37/assets/13822299766886-packaging.png?v=13853403313154899611657228383'

    ],
    'black': [
        '../images/clock-black.png',
        'https://clocky.com/cdn/shop/products/Clocky_Black__4.jpg?v=1663794919',
        'https://clocky.com/cdn/shop/products/Clocky_Black__5.jpg?v=1663794919',
        'https://clocky.com/cdn/shop/products/Clocky_Black__2.jpg?v=1663794919',
        '//clocky.com/cdn/shop/t/37/assets/13822296588390-packaging.png?v=150238717710588268571657228382'
    ],
    'pink': [
        '../images/clock-pink.png',
        'https://clocky.com/cdn/shop/products/clocky_pink_side_right_edit.jpg?v=1663800201',
        'https://clocky.com/cdn/shop/products/clocky_pink_back_edit.jpg?v=1663800155',
        'https://clocky.com/cdn/shop/products/clocky_pink_side_left_edit.jpg?v=1663800215',
        '//clocky.com/cdn/shop/t/37/assets/15465180659814-packaging.png?v=112974522194940746951657228385'

    ],
    'aqua': [
        '../images/clock-aqua.png',
        'https://clocky.com/cdn/shop/products/Clocky_Aqua__1_f5a82df2-0a76-41ea-9a89-20adb1e197f7.jpg?v=1663794919',
        '../images/clock-black.png',
        'https://clocky.com/cdn/shop/products/Clocky_Aqua__7-copy.jpg?v=1663794919',
        '//clocky.com/cdn/shop/t/37/assets/15387284799590-packaging.png?v=124544899629187134681657228384'

    ],
    'navy': [
        '../images/clock-navy.png',
        '../images/clock-right.png',
        'https://clocky.com/cdn/shop/products/Navy-5-720px.jpg?v=1604686213',
        'https://clocky.com/cdn/shop/products/Navy-2-720px.jpg?v=1604686213',
        '//clocky.com/cdn/shop/t/37/assets/31998829068390-packaging.png?v=84156900463058699441657228386'

    ],
    'silver': [
        '../images/clock-silver.png',
        'https://clocky.com/cdn/shop/products/Clocky-Chrome5.jpg?v=1592587301',
        'https://clocky.com/cdn/shop/products/Clocky-Chrome4_600x600.jpg?v=1592587308',
        'https://clocky.com/cdn/shop/products/Clocky-Chrome6.jpg?v=1592587311',
        '//clocky.com/cdn/shop/t/37/assets/13822301896806-packaging.png?v=124941015230677160861657228383'


    ],
    'gold': [
        '../images/clock-gold.png',
        'https://clocky.com/cdn/shop/products/ClockyGold1.jpg?v=1592587317',
        'https://clocky.com/cdn/shop/products/ClockyGold2.jpg?v=1592587319',
        '//clocky.com/cdn/shop/t/37/assets/13822309924966-packaging.png?v=131250630585387989611657228384'
    ]

};

let currentSlide = 0;
let currentColor = 'white'; // Set default color

function changeColor(color, colorName) {
    currentColor = color;
    currentSlide = 0;
    displayImages(imagePaths[color]);
    updateColorName(colorName);
}

function updateColorName(name) {
    const colorNameElement = document.querySelector('.colorName');
    colorNameElement.textContent = `Color : ${name}`;
}

function displayImages(images) {
    const carouselImages = document.getElementById('carouselImages');
    carouselImages.innerHTML = '';
    const imageWidth = '520px';
    const imageHeight = '380px';

    images.forEach((imagePath, index) => {
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = `${currentColor}-${index + 1}`;
        img.style.display = index === currentSlide ? 'block' : 'none';
        img.style.width = imageWidth;
        img.style.height = imageHeight;
        carouselImages.appendChild(img);
    });
}

function changeSlide(n) {
    const images = imagePaths[currentColor];
    currentSlide += n;

    if (currentSlide >= images.length) {
        currentSlide = 0;
    }

    if (currentSlide < 0) {
        currentSlide = images.length - 1;
    }

    displayImages(images);
}

// Initial display of images on page load
displayImages(imagePaths[currentColor]);
