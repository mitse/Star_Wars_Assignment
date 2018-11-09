import React from 'react';
import SearchBox from './searchBox';
import SortBox from './sortBox';

const ToolBar = (props) => {
    const {value, onSearhChange, onSortTypeSelect} = props;
    return (
        <div className="toolbar">
            <SortBox onSortTypeSelect={onSortTypeSelect}/>
            <SearchBox
                value={value}
                onSearhChange={onSearhChange}
            />
        </div>
    );
}

export default ToolBar;