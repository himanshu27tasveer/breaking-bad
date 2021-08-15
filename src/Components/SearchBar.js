import React, {useState, useEffect} from 'react';

const SearchBar = ({sendQuery, setFilterState}) => {

    const [inputVal, setInputVal] = useState("");
    const [filter, setFilter] = useState("");

    useEffect(() => {
        sendQuery(inputVal);
    }, [inputVal, sendQuery]);

    useEffect(() => {
        setFilterState(filter);
    }, [filter, setFilterState])

    return (
        <div id="search-bar">
            <form>
                <input id="search-input"
                    type="text"
                    placeholder="Enter a Character"
                    autoFocus
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    />
                <div id="select-div">
                    <label>Filter By</label>
                    <select name="filter" id="select-filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="">All</option>
                        <option value="Breaking+Bad">Breaking Bad</option>
                        <option value="Better+Call+Saul">Better Call Saul</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;