window.onload = function(){
    //document.querySelector("h1").innerHTML = "South Park Slideshow"
    alert("Page works")

    var image = 0;
    var images = [
        "KennyMcCormick.png",
        "KyleBroflovski.png",
        "SouthPark.jpg",
        "StanMarsh.png",
        "widen_1840x0.jpg"
    ];
    var siteBtn = document.querySelector("#slideShow-button")
    console.log(images)
    function changeImage(){
        siteBtn.removeEventListener(`click`, changeImage)
        
        if(image >= images.length){
            image = 0;
        }
        
        document.querySelector("#site-image").src = `../Week9/Images/${images[image]}`;
        setTimeout(changeImage, 2000);
        image++;
    }
    siteBtn.addEventListener(`click`,changeImage);
    

}
