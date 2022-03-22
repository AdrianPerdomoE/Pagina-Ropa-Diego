"use strict"
/* Esta seccion se encarga de cargar los productos de la lista de productos y organizar en la platilla
para mostrarlos ordenados en pantalla
*/
var productSection = document.getElementById("Products");
products.forEach(item => {
    let Html = `
            <div>
                <h3>${item.Name}</h3>
                <img src="${item.Img}">
                <h4>${item.Type}</h4>
                <p>${item.Description}</p>
            </div>`;
    productSection.innerHTML+= Html;
});
//esta seccion es la parte logica del Lightbox
const LIGHTBOX = document.createElement("div");
LIGHTBOX.id = "lightbox";
document.body.appendChild(LIGHTBOX);
const IMAGES = document.querySelectorAll("img");
IMAGES.forEach(image => {
    image.addEventListener("click",event=>{
        LIGHTBOX.classList.add("active");
        const IMG = document.createElement("img");
        IMG.src = image.src;
        while (LIGHTBOX.firstChild){
            LIGHTBOX.removeChild(LIGHTBOX.firstChild);
        }
        LIGHTBOX.appendChild(IMG);
    });
});
LIGHTBOX.addEventListener("click",event=>{
   if(event.target !== event.currentTarget){
       return;
   }

    LIGHTBOX.classList.remove("active");

})