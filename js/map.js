let map;

function initMap() {
  const myLatLng = { lat: 31.049804, lng: 31.379884 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatLng,
  });

  let marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
    draggable: true,
  });

  google.maps.event.addListener(marker, "dragend", function (e) {
    updateInput(e.latLng);
  });
}

function updateInput(latLng) {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode(
    {
      latLng: latLng,
    },
    function (results) {
      document.getElementById("locationInput").value =
        results[0].formatted_address;
      document.getElementById("locationInput-1").value =
        results[0].formatted_address;
      console.log(results);
    }
  );
}
