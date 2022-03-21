"use strict"

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