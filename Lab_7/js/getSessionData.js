// Get saved data from sessionStorage

let title = sessionStorage.getItem("title"); // Your code here
let lat_max = sessionStorage.getItem("lat_max");
let lat_min = sessionStorage.getItem("lat_min");
let lon_max = sessionStorage.getItem("lon_max");
let lon_min = sessionStorage.getItem("lon_min");


// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above
 

document.getElementById("title").innerHTML= title;
document.getElementById("lat_max").innerHTML= lat_max;
document.getElementById("lat_min").innerHTML= lat_min;
document.getElementById("lon_max").innerHTML= lon_max;
document.getElementById("lon_min").innerHTML= lon_min;