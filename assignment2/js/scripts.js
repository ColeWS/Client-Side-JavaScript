// constants for query selector
const custColorBtn = document.querySelector(".custColor");
const randColorBtn = document.querySelector(".randColor");
const imgSelect = document.querySelector("#imageSelect");
const img = document.querySelector("#images");
const studentId = document.querySelector("#myStudentId");

// function to change bg color from user input and add student id
function changeCustomColor() {
    const customNum = document.querySelector("#customNumber").value;

    studentId.textContent = "Student ID: 1258159";
    
    // if statement to handle color changes based on different number ranges
    if (0 <= customNum && customNum < 20) {
        document.body.style.backgroundColor = "green";
    }
    else if (20 <= customNum && customNum < 40) {
        document.body.style.backgroundColor = "blue";
    }
    else if (40 <= customNum && customNum < 60) {
        document.body.style.backgroundColor = "orange";
    }
    else if (60 <= customNum && customNum < 80) {
        document.body.style.backgroundColor = "purple";
    }
    else if (80 <= customNum && customNum <= 100) {
        document.body.style.backgroundColor = "yellow";
    }
    else {
        document.body.style.backgroundColor = "red";
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    const randomNum = Math.floor((Math.random() * 100) + 1);

    if (0 <= randomNum && randomNum <= 20) {
        document.body.style.backgroundColor = "green";
    }
    else if (20 < randomNum && randomNum <= 40) {
        document.body.style.backgroundColor = "blue";
    }
    else if (40 < randomNum && randomNum <= 60) {
        document.body.style.backgroundColor = "orange";
    }
    else if (60 < randomNum && randomNum <= 80) {
        document.body.style.backgroundColor = "purple";
    }
    else if (80 < randomNum && randomNum <= 100) {
        document.body.style.backgroundColor = "yellow";
    }
    else {
        document.body.style.backgroundColor = "red";
    }
    console.log(randomNum);
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array
    var images = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg", "img/img5.jpg"];
    
    if (imgSelect.length <= 5) {
        for (i = 0; i < images.length; i++) {
            var selectOption = document.createElement("option");
            selectOption.value = images[i];
            selectOption.textContent = "Image " + (i + 1);
            imgSelect.appendChild(selectOption);
        }
    }
}

// function to change image
function changeImage() {
    img.src = imgSelect.value;
    img.alt = "Image appears here";
}

// event listeners for on click event of buttons and select
custColorBtn.addEventListener("click", changeCustomColor);
randColorBtn.addEventListener("click", changeRandomColor);
imgSelect.addEventListener("click", addList);

// event listeners for on change event of select
imgSelect.addEventListener("change", changeImage);