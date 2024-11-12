
let mapDivC = document.querySelector(".mapIn");
let xLatcontactC = mapDivC.getAttribute("data-x");
let  yLatContactC = mapDivC.getAttribute("data-y");

var mapC = L.map("map", {
center: [yLatContactC, xLatcontactC], zoom: 15 
}
),
Contact = new L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
// attribution:
// '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
minZoom: "10",
}
).addTo(mapC);



greenIconContact = L.icon({ iconUrl: "newD/images/location.png", iconSize: [24,34] });
markerContact = L.marker([yLatContactC, xLatcontactC], { icon: greenIconContact });
markerContact.addTo(mapC);

