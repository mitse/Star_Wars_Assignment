import React, { Component } from 'react';

class SortBox extends Component {
    state = {
        openBox: false
    };

    sortTypes = [
      {type: 'episodeNumber', label: 'Episode'},
      {type: 'year', label: 'Year'}
    ];

    toggleSortBox = () => {
        const toggleBox = this.state.openBox;
        this.setState({ openBox: !toggleBox });
    };

    render() {
        return (
            <div className="sort-box">
                <button onClick={this.toggleSortBox}>Sort by...</button>
                {this.state.openBox ?
                    <div className="sort-box-list">
                        <div className="sort-list-header"><span>Sort by</span>
                          <i onClick={this.toggleSortBox} className="fa fa-times" aria-hidden="true"></i>
                        </div>
                        <ul>
                            {this.sortTypes.map( s => 
                                <li key={s.type}
                                  onClick={()=>this.props.onSortTypeSelect(s.type)} >
                                  {s.label}
                                </li>
                            )}
                        </ul>
                    </div>
                    : null}
            </div>
        );

    }
}

export default SortBox;