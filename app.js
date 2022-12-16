const firstWrapper = document.getElementById('img-wrapper-1');
const secondWrapper = document.getElementById('img-wrapper-2');
const thirdWrapper = document.getElementById('img-wrapper-3');
const fourthWrapper = document.getElementById('img-wrapper-4');
const descriptionDiv1 = document.querySelector(".hidden-project-description-1")
const descriptionDiv2 = document.querySelector(".hidden-project-description-2")
const descriptionDiv3 = document.querySelector(".hidden-project-description-3")
const descriptionDiv4 = document.querySelector(".hidden-project-description-4")

firstWrapper.addEventListener('mouseover', function(e) {
    descriptionDiv1.classList.toggle('hidden')
    document.getElementById("img-1").style["filter"] = "blur(4px)"
})

firstWrapper.addEventListener('mouseout', function(e) {
    descriptionDiv1.classList.toggle('hidden')
    document.getElementById("img-1").style["filter"] = "blur(0px)"
})

secondWrapper.addEventListener('mouseover', function(e) {
    descriptionDiv2.classList.toggle('hidden')
    document.getElementById("img-2").style["filter"] = "blur(4px)"
})

secondWrapper.addEventListener('mouseout', function(e) {
    descriptionDiv2.classList.toggle('hidden')
    document.getElementById("img-2").style["filter"] = "blur(0px)"
})

thirdWrapper.addEventListener('mouseover', function(e) {
    descriptionDiv3.classList.toggle('hidden')
    document.getElementById("img-3").style["filter"] = "blur(4px)"
})

thirdWrapper.addEventListener('mouseout', function(e) {
    descriptionDiv3.classList.toggle('hidden')
    document.getElementById("img-3").style["filter"] = "blur(0px)"
})

fourthWrapper.addEventListener('mouseover', function(e) {
    descriptionDiv4.classList.toggle('hidden')
    document.getElementById("img-4").style["filter"] = "blur(4px)"
})

fourthWrapper.addEventListener('mouseout', function(e) {
    descriptionDiv4.classList.toggle('hidden')
    document.getElementById("img-4").style["filter"] = "blur(0px)"
})
