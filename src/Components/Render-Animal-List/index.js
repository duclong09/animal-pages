import React, { useEffect, useState } from "react";
import AnimalList from "../Animal-list";
import queryString from "query-string";


function RenderAnimalList(props) {

  const [animalList, setAnimalList] = useState([]);

  // const [pagination, setPagination] = useState({
  //   _page: 1,
  //   _limit: 10,
  //   _totalRows: 1,
  // });

  // const [filters, setFilters] = useState({
  //   _limit: 10,
  //   _page: 1,
  // });
  useEffect(() => {
    async function fetchAnimalList() {
      try {
        //const paramsString = queryString.stringify(filters);
        const requestUrl = `https://62446a3439aae3e3b74fc9ea.mockapi.io/api/animal/animals`;

        //thu vien fetch
        const response = await fetch(requestUrl);
  
        const responseJson = await response.json();
        console.log({ responseJson });
        //object destr
        setAnimalList(responseJson);
        //setPagination(pagination)
      } catch (error) {
        console.log("Error", error.message);
      }
    }
    fetchAnimalList();
  }, []);

  // function handlePageChange(newPage) {
  //   console.log("new page: ", newPage);
  //   setFilters({
  //     ...filters,
  //     _page: newPage,
  //   });
  // }
  return (
    <div>
      <AnimalList animals={animalList} />
      {/* <PaginationList
        pagination={pagination}
        onPageChange={handlePageChange}
      
      /> */}
    </div>
  );
}

export default RenderAnimalList;
