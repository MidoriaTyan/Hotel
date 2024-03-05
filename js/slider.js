// const sliderCount = document.querySelector(".slider-counter")
// const prevBtn = document.querySelector(".prev-button")
// const nextvBtn = document.querySelector(".next-button")
// const slider = Array.from(sliderCount.querySelectorAll(".slider"))
// const sliderLength = slider.length
// let sliderIndex = 0


// prevBtn.addEventListener('click', showPreviousSlide);
// nextvBtn.addEventListener('click', showNextSlide);



// function showPreviousSlide() {
//     sliderIndex = (sliderIndex - 1 + sliderLength) % sliderLength
//     updateSlider()
// }

// function showNextSlide() {
//     sliderIndex = (sliderIndex + 1) % sliderLength
//     updateSlider()
// }

// function updateSlider() {
// slider.forEach((sliderCount, index) => {
//     if (index >= sliderIndex && index <= sliderIndex + 2) {
//         sliderCount.style.display = "block"
//     } else {
//         sliderCount.style.display = "none"
//     }
// })
// }
// updateSlider();


const sliderCount = document.querySelector(".slider-counter")
const prevBtn = document.querySelector(".prev-button")
const nextvBtn = document.querySelector(".next-button")
const slider = Array.from(sliderCount.querySelectorAll(".slider"))
const sliderLength = slider.length
let atciveIndex = 0

prevBtn.addEventListener("click", showPreviousSlide)
nextvBtn.addEventListener("click", showNextSlide)

function showPreviousSlide() {
    atciveIndex = (atciveIndex - 1 + sliderLength) % sliderLength
    updateSlider()
}

function showNextSlide() {
    atciveIndex = (atciveIndex + 1) % sliderLength
    updateSlider()
}

function updateSlider() {
    slider.forEach((slider,index) => {
        if (index === atciveIndex) {
            slider.classList.add("active")
        } else {
            slider.classList.remove("active")
        }
    })
}
updateSlider()