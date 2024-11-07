const gallery = document.getElementById("gallery")
const fullViewContainer = document.getElementById("fullViewContainer")
const fullViewCloseButton = document.getElementById("fullViewCloseButton")
const fullViewImage = document.getElementById("fullViewImage")

const images = ["https://avatars.mds.yandex.net/get-vertis-journal/4469561/toyota-ae86-bev-concept.jpg_1673608843299/orig","https://ae01.alicdn.com/kf/HTB1t64QKFXXXXbYaXXXq6xXFXXXu/High-Spray-Sunset-View-Printed-Home-Decor-Art-Picture-Prairie-Scenery-Wall-Sticker-on-canvas.jpg","https://avatars.mds.yandex.net/i?id=aa600387b43c1bd968157d0954f43b4a_l-9229750-images-thumbs&n=13"]

images.forEach(createImage)

function createImage(imgSrc){
    const imageElement = document.createElement("img")
    imageElement.src = imgSrc
    imageElement.className = "gallery__image"
    gallery.appendChild(imageElement)
}

function openFullView(imgSrc){
    console.log(fullViewContainer);
    
    fullViewContainer.classList.toggle('hidden')
    fullViewImage.setAttribute("src",imgSrc)
}

function closeFullView(){
    fullViewContainer.classList.add('hidden')
}

for(const item of gallery.children){
    console.log(item.addEventListener("click",()=>{  openFullView(item.getAttribute("src"))    }))
}

fullViewCloseButton.addEventListener("click",closeFullView)

