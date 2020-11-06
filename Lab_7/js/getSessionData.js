// Get saved data from sessionStorage
var data = sessionStorage.getItem('route_id');

let title = ""; // Your code here
let lat_max = "";
let lat_min = "";
let lon_max = "";
let lon_min = "";

[{"route_id":"104","title":"104 College Park Metro"},{"route_id":"105","title":"105 Campus Connector"},
{"route_id":"108","title":"108 Adelphi"},{"route_id":"109","title":"109 River Road"},{"route_id":"110","title":"Seven Springs Express"},
{"route_id":"111","title":"111 Silver Spring"},{"route_id":"113","title":"113 Hyattsville"},{"route_id":"114","title":"114 University View"},
{"route_id":"115","title":"115 Orange"},{"route_id":"116","title":"116 Purple"},{"route_id":"117","title":"117 Blue"},{"route_id":"118","title":"118 Gold"},
{"route_id":"122","title":"122 Green"},{"route_id":"123","title":"123 Discovery District"},{"route_id":"124","title":"Shady Grove"},
{"route_id":"126","title":"126 New Carrolton"},{"route_id":"127","title":"127 Mazza GrandMarc"},{"route_id":"128","title":"128 The Enclave"},
{"route_id":"131","title":"131 MGM/Enclave"},{"route_id":"132","title":"132 The Varsity"},{"route_id":"133","title":"133 Grocery Shopping Shuttle"},
{"route_id":"140","title":"140 UMB Law"},{"route_id":"141","title":"141 Gaithersburg Park & Ride"},
{"route_id":"142","title":"142 Columbia Park & Ride"},{"route_id":"143","title":"143 Greenbelt"},{"route_id":"bse","title":"Bowie State - Enclave Express"}]

// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above
 
let data = sessionStorage.getItem('json_item');
console.log("HERE");
const title = JSON.parse(data);
document.getElementById("message").innerHTML= title.name + " Latitude Max: " + lat_max;
