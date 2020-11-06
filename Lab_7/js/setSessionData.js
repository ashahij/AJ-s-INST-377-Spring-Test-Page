const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = document.getElementById("busroute").value; // Your code here

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    let busRouteURL = "https://api.umd.io/v0/bus/routes/" + busRoute; // Your code here
    console.log(busRouteURL);


    fetch(busRouteURL)
      .then((response) => {
        return response.json();
      })
      .then((route) => {
        // YOUR CODE HERE 
        console.log("Here");
        console.log(route);
        let title, lat_max, lat_min, lon_max, lon_min;
        let message = "";


        title = route.title;
        lat_max = route.lat_max;
        lat_min = route.lat_min;
        lon_max = route.lon_max;
        lon_min = route.lon_min;
        sessionStorage.setItem("title", title);
        sessionStorage.setItem("lat_max", lat_max);
        sessionStorage.setItem("lat_min", lat_min);
        sessionStorage.setItem("lon_max", lon_max);
        sessionStorage.setItem("lon_min", lon_min);
        message = "Info saved"


      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
    sessionStorage.setItem("title", "nothing set");
    sessionStorage.setItem("lat_max", "nothing set");
    sessionStorage.setItem("lat_min", "nothing set");
    sessionStorage.setItem("lon_max", "nothing set");
    sessionStorage.setItem("lon_min", "nothing set");
  }
}
