console.log(`
    1. Вёрстка соответствует макету. Ширина экрана 390px +48
    блок <header> +6
`);
console.log(
    "секция preview +9\n",
    "секция steps +9\n",
    "секция destinations +9\n",
    "секция stories +9\n",
    "блок <footer> +6\n",
    "2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки.Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n",
    "нет полосы прокрутки при ширине страницы от 1440рх до 390px +7\n",
    "нет полосы прокрутки при ширине страницы от 390px до 320рх +8\n",
    "3. На ширине экрана 390рх и меньше реализовано адаптивное меню +22\n",
    "при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +0\n",
    "при нажатии на бургер-иконку плавно появляется адаптивное меню +4\n",
    "адаптивное меню соответствует макету +4\n",
    "при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4\n",
    "ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню)\n",
    "при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4\n",
    "score: 73\n",
)
//
const burger = document.getElementById("menuBurger");
const burgerOverlay = document.getElementById("shadow");
//
const slider = document.getElementById('destinations');
const sliderItems = [
    document.getElementById("a"),
    document.getElementById("b"),
    document.getElementById("c"),
];
const sliderButtons = [
    document.getElementById("First"),
    document.getElementById("Secand"),
    document.getElementById("Tird"),
];
const sliderButtonsMobile = [
    document.getElementById('clickLeft'),
    document.getElementById('clickRight'),
];
//

// let position = 2

// let retorn = 1

// function clickLeft1() {
//     --position
//     clickPosition()
// }

// function clickRight2() {
//     ++position
//     clickPosition()
// }

// function clickPosition() {
//     if (position < 1) {
//         position = 1
//     } else if (position > 3) {
//         position = 3
//     }
//     document.getElementById('clickLeft').style.opacity = ('1')
//     document.getElementById('clickRight').style.opacity = ('1')
//     if (retorn === 1 && position === 1) {
//         document.getElementById('clickLeft').style.opacity = ('0.5')
//         clikFirst()
//     } else if (retorn === 0 && position === 1) {
//         document.getElementById('clickLeft').style.opacity = ('0.5')
//     } 

//     if (retorn === 1 && position === 2) {
//         clikSecand()
//     }

//     if (retorn === 1 && position === 3) {
//         document.getElementById('clickRight').style.opacity = ('0.5')
//         clikTird()

//     } else if (retorn === 0 && position === 3) {
//         document.getElementById('clickRight').style.opacity = ('0.5')
//     }
// }

const onSliderButtonClick = (e) => {
    const target = e.target;
    const isButton = ['First', 'Secand', 'Tird'].includes(target.id);
    const isImage = ['a', 'b', 'c'].includes(target.parentElement.id);
    let currentButton;
    let currentImage;
    let currentButtonIndex;
    let currentImageIndex;
    
    if (isButton) {
        currentButton = target;
        currentButtonIndex = sliderButtons.indexOf(currentButton);
        currentImage = sliderItems[currentButtonIndex];
        currentImageIndex = currentButtonIndex;
    } else if (isImage) {
        currentImage = target.parentElement;
        currentImageIndex = sliderItems.indexOf(currentImage);
        currentButton = sliderButtons[currentImageIndex];
        currentButtonIndex = currentImageIndex;
    }

    const currentOrder = currentImage.style.order
        ? +currentImage.style.order
        : currentImageIndex + 1;
    
    if (currentOrder === 2) {
        return;
    }

    const nextOrders = [];
    sliderItems.forEach((img, i) => {
        const currentImgOrder = img.style.order ? +img.style.order : i + 1;
        let nextOrder;
        if (currentOrder === 1) {
            nextOrder = currentImgOrder + 1 > 3 ? 1 : currentImgOrder + 1;
        } else {
            nextOrder = currentImgOrder - 1 < 1 ? 3 : currentImgOrder - 1;
        }
        img.style.order = nextOrder;
        nextOrders.push(nextOrder);
    });

    sliderButtons.forEach((btn, i) => {
        btn.classList.remove("active-ball");
        btn.classList.add("disabled-ball");
    });

    sliderButtons[ +currentImage.style.order - 1 ].classList.add("active-ball");
    sliderButtons[ +currentImage.style.order - 1 ].classList.remove("disabled-ball");

    console.log(currentImage);
};

sliderItems.forEach(btn => btn.addEventListener('click', onSliderButtonClick));
sliderButtons.forEach(btn => btn.addEventListener('click', onSliderButtonClick));

// function clikFirst() {
//     sliderItems[0].style.order = 2
//     sliderItems[1].style.order = 3
//     sliderItems[2].style.order = 1
//     sliderButtons[0].classList.add('active-ball')
//     sliderButtons[0].classList.remove('disabled-ball')
//     sliderButtons[1].classList.add("disabled-ball")
//     sliderButtons[2].classList.add("disabled-ball")
//     sliderButtons[1].classList.remove("active-ball")
//     sliderButtons[2].classList.remove("active-ball")
//     position = 1
//     retorn = 0
//     clickPosition()
//     setTimeout(retorn = 1, 1000);
// }


// function clikSecand() {
//     sliderItems[0].style.order = 1
//     sliderItems[1].style.order = 2
//     sliderItems[2].style.order = 3
//     document.getElementById("Secand").classList.add('active-ball')
//     document.getElementById("Secand").classList.remove('disabled-ball')
//     document.getElementById("First").classList.add("disabled-ball")
//     document.getElementById("Tird").classList.add("disabled-ball")
//     document.getElementById("Tird").classList.remove("active-ball")
//     document.getElementById("First").classList.remove("active-ball")
//     position = 2
//     retorn = 0
//     clickPosition()
//     setTimeout(retorn = 1, 1000);
// }


// function clikTird() {
//     sliderItems[0].style.order = 3
//     sliderItems[1].style.order = 1
//     sliderItems[2].style.order = 2
//     document.getElementById("Tird").classList.add('active-ball')
//     document.getElementById("Tird").classList.remove('disabled-ball')
//     document.getElementById("First").classList.add("disabled-ball")
//     document.getElementById("Secand").classList.add("disabled-ball")
//     document.getElementById("First").classList.remove("active-ball")
//     document.getElementById("Secand").classList.remove("active-ball")
//     position = 3
//     retorn = 0
//     clickPosition()
//     setTimeout(retorn = 1, 1000);
// }


// let timerId = setInterval(() => {
//     ++position, setlimit(), clickPosition()
// }, 12000);


// function setlimit() {
//     if (position > 3) { position = 1 }
// }


// let pageHeight = document.documentElement.scrollHeight

// function heightt() {
//     let heightWw = document.getElementById("wrap").scrollHeight;
//     let heightStoris = document.getElementById("storis__back").scrollHeight
//     if (heightWw == heightStoris) {
//         alert(heightWw)
//     } else { document.getElementById('storis__back').style.height = (heightWw + 'px'); }

// }

// function clikBurger() {
//     document.getElementById("menuBurger").classList.toggle("close");
//     document.getElementById("menuBurger").classList.toggle("open");
//     document.getElementById("shadow").classList.toggle("shadow-close");
//     document.getElementById("shadow").classList.toggle("shadow-open");
//     height()

// }

// function height() {
//     document.getElementById('shadow').style.height = (pageHeight + 'px');
// }