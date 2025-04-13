// set base url and set api key
const baseURL = "https://api.nasa.gov/planetary/apod";
const key = "Ljl6TudsCNNZc0fY60VcEiY7KgaVuxyX5OX6xzR4";
// variables for html elements
const viewBtn = document.getElementById("viewBtn");
const apodImg = document.getElementById("apodImg");
const apodVid = document.getElementById("apodVid");
const apodTitle = document.getElementById("apodTitle");
const apodDate = document.getElementById("apodDate");
const apodDescription = document.getElementById("apodDescription");
const studentInfo = document.getElementById("studentInfo");

// function to get data from the api
function getData() {
    var url = `${baseURL}?api_key=${key}`;

    fetch(url).then(res => {
        return res.json();
    }).then(resJson => showApod(resJson));
};

// function to show the astronomy picture of the day based on the data received from the api
function showApod(resJson) {
    console.log(resJson);
    studentInfo.textContent = "Cole Winkler-Sawdon | 1258159";

    // check if apod is an image
    if (resJson.media_type === "image") {
        apodImg.src = resJson.url;
        apodTitle.textContent = resJson.title;
        apodDate.textContent = resJson.date;
        apodDescription.textContent = resJson.explanation;
    }
    // check if apod is a video
    else {
        apodVid.src = resJson.url;
        apodTitle.textContent = resJson.title;
        apodDate.textContent = resJson.date;
        apodDescription.textContent = resJson.explanation;
    }
}

// event listener
viewBtn.addEventListener("click", getData);