import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setWordEntered('')
    setFilteredData([]);
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" value={wordEntered} placeholder={placeholder} onChange={handleFilter} />
        <div className="searchIcon">
          {
           filteredData.length === 0  ? <SearchIcon /> : <CloseIcon id='clearBtn' onClick={clearInput}/> 
          }
        
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, index) => {
            return (
              <a
                key={index}
                target="_blank"
                className="dataItem"
                href={value.link}
              >
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
