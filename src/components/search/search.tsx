import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";

interface Props {
  onSearchChange: (searchData: any) => void
}


const Search = ({ onSearchChange }: Props) => {
  const [search, setSearch] = useState("");

  const loadOptions = (inputValue: string) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city: any) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData: string | null) : void => {
    setSearch(searchData || "");
    onSearchChange(searchData);
  };

  return (
    <div style={{width:"60%", margin:"auto"}}>
    <AsyncPaginate
      
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
    </div>
  );
};

export default Search;
