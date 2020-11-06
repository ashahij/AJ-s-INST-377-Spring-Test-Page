const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = document.getElementById("busroute").value; // Your code here

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    let busRouteURL = "https://api.umd.io/v0/bus/routes"; // Your code here
    console.log(busRouteURL);
    const fetch = fetch(busURL);

    fetch(busRouteURL)
      .then((response) => {
        return response.json();
      })
      .then((route) => {
        // YOUR CODE HERE
        console.log("Here");
        console.log(route);
        let title, latMax, latMin, lonMax, lonMin;
        let message = "";

        if(typeof route.title != "undefined"){
          title = title.route;
          latMax = route.lat_max;
          latMin = route.lat_min;
          lonMax = route.lon_max;
          lonMin = route.lon_min;

          message = title + " <br> Lat max : " + LatMax + " <br> Lat min: " + LatMin + " <br> Lon max " + lonMax + " <br>Lon min" + lonMin;
        }
        else{
          message = "No bus info available";
        }
      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
  }
}
