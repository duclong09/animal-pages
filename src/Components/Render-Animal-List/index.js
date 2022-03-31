import React, { useEffect, useState } from "react";
import AnimalList from "../Animal-list";
import queryString from "query-string";

function RenderAnimalList(props) {

  const [animalList, setAnimalList] = useState([]);

  useEffect(() => {
    async function fetchAnimalList() {
      try {
        const requestUrl =`https://62446a3439aae3e3b74fc9ea.mockapi.io/api/animal/animals`;

        //thu vien fetch
        const response = await fetch(requestUrl);
  
        const responseJson = await response.json();
        console.log({ responseJson });
        //object destr
        setAnimalList(responseJson);
      } catch (error) {
        console.log("Error", error.message);
      }
    }
    fetchAnimalList();
  }, []);
  return (
    <div>
      <AnimalList animals={animalList} />
    </div>
  );
}

export default RenderAnimalList;
