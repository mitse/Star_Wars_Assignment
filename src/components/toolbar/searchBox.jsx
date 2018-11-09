import React from 'react';

const SearchBox = (props) => {
    
  return (
    <div className="search-box">
      <input
        type="text"
        name="filterQuery"
        placeholder="Type to search"
        value={props.value}
        onChange={event => props.onSearhChange(event.target.value)}
      />
        <i className="fa fa-search"></i>
    </div>
  );
}

export default SearchBox;