window.onload = function() {
    document.getElementById("skills").addEventListener("click", moveToSkills)
    document.getElementById("introduction").addEventListener("click", moveToIntroduction)
    document.getElementById("contact").addEventListener("click", moveToContacts)
    document.getElementById("all-info-container").addEventListener("scroll", changeSelectedPart)
};

function moveToIntroduction(){
    let infoElement = document.getElementById("all-info-container")
    document.getElementById("all-info-container").replaceWith(infoElement)
    let skillsSelector = document.getElementById("skills")
    let contanctSelector = document.getElementById("contact")
    let introductionSelector = document.getElementById("introduction")
    contanctSelector.style.backgroundColor = "rgba(29,30,32, 0)"
    introductionSelector.style.backgroundColor = "rgb(238, 87, 87)"
    skillsSelector.style.backgroundColor = "rgba(29,30,32, 0)"
    scrollInfoElement(50)
}

function moveToSkills(){
    let infoElement = document.getElementById("all-info-container")
    infoElement.replaceWith(infoElement)
    let skillsSelector = document.getElementById("skills")
    let contanctSelector = document.getElementById("contact")
    let introductionSelector = document.getElementById("introduction")
    contanctSelector.style.backgroundColor = "rgba(29,30,32, 0)"
    introductionSelector.style.backgroundColor = "rgba(29,30,32, 0)"
    skillsSelector.style.backgroundColor = "rgb(238, 87, 87)"
    scrollInfoElement(400)
}

function moveToContacts(){
    let infoElement = document.getElementById("all-info-container")
    document.getElementById("all-info-container").replaceWith(infoElement)
    let skillsSelector = document.getElementById("skills")
    let contanctSelector = document.getElementById("contact")
    let introductionSelector = document.getElementById("introduction")
    contanctSelector.style.backgroundColor = "rgb(238, 87, 87)"
    introductionSelector.style.backgroundColor = "rgba(29,30,32, 0)"
    skillsSelector.style.backgroundColor = "rgba(29,30,32, 0)"
    scrollInfoElement(1800)
}

async function changeSelectedPart(){
    let infoElement = document.getElementById("all-info-container")
    let scrollPosition = infoElement.scrollTop
    let skillsSelector = document.getElementById("skills")
    let contanctSelector = document.getElementById("contact")
    let introductionSelector = document.getElementById("introduction")
    
    if (scrollPosition <= 200){
        contanctSelector.style.backgroundColor = "rgba(29,30,32, 0)"
        introductionSelector.style.backgroundColor = "rgb(238, 87, 87)"
        skillsSelector.style.backgroundColor = "rgba(29,30,32, 0)"
    } else if (scrollPosition >= 201 && scrollPosition <= 1549) {
        contanctSelector.style.backgroundColor = "rgba(29,30,32, 0)"
        introductionSelector.style.backgroundColor = "rgba(29,30,32, 0)"
        skillsSelector.style.backgroundColor = "rgb(238, 87, 87)"
    } else if (scrollPosition >= 1550) {
        contanctSelector.style.backgroundColor = "rgb(238, 87, 87)"
        introductionSelector.style.backgroundColor = "rgba(29,30,32, 0)"
        skillsSelector.style.backgroundColor = "rgba(29,30,32, 0)"
    }
}

function scrollInfoElement(position){
    let infoElement = document.getElementById("all-info-container")
    infoElement.scroll({
        top: position
    })
    document.getElementById("all-info-container").addEventListener("scroll", changeSelectedPart)
}