import { GoogleMap } from "@capacitor/google-maps";

const apiKey = "ADD A KEY";
const mapElement = document.getElementById("map");
const mapConfig = {
  center: {
    lat: 33.6,
    lng: -117.9,
  },
  zoom: 8,
  androidLiteMode: false,
};
const mapOptions = {
  id: "my-map",
  apiKey: apiKey,
  config: mapConfig,
  element: mapElement,
};

const initMap = async () => {
  // Create the Map Element
  const map = await GoogleMap.create(mapOptions);
};

initMap();
