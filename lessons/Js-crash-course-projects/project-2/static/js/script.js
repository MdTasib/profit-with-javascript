function foodGenerate() {
    const img = document.createElement('img');
    img.src = "../images/5.jpg"; // replace this src -- thecatapi.com/api/images

    const foodContainer = document.getElementById('foods-container');
    foodContainer.appendChild(img);
}