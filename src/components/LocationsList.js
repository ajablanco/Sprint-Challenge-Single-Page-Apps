import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationList() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    console.log("Rick & Morty Location");

    axios
      .get(
        "https://rickandmortyapi.com/api/location/"
      )
      .then(response => {
        console.log(response.data.results);
        setLocation(response.data.results);
      })
      .catch(error => {
        console.log("ERROR!", error);
      });
  }, []);

  return (
    <div className="LocationCard">
      {location.map(location => (
        <LocationCard key={location.id} location={location} />
      ))}
    </div>
  );
}
