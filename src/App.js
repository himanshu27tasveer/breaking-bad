import './App.css';
import './Components/loader.css';
import CustomLoader from './Components/CustomLoader';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Components/Header';
import ListComponent from './Components/ListComponent';
import SearchBar from './Components/SearchBar';
// import Characters from './Components/apiData.json'


function App() {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [filterQuery, setFilterQuery] = useState("");
  const [filterElement, setFilterElement] = useState("");

  useEffect(() => {
    setFilterElement("");
    setLoading(true);
    const fetchData = async () => {
      try {
        const resp = await axios('https://www.breakingbadapi.com/api/characters');
        setCharacters(resp.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }

    }

    const fetchFilterData = async () => {
      try {
        const resp = await axios(`https://www.breakingbadapi.com/api/characters?name=${filterQuery}`);
        setCharacters(resp.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }

    }

    if (filterQuery === ""){
      fetchData();
    }
    else {
      fetchFilterData();
    }





  }, [filterQuery]);


  useEffect(() => {
    setLoading(true);
    const fetchOnFilter = async () => {
      try {
        const resp = await axios(`https://www.breakingbadapi.com/api/characters?category=${filterElement}`);
        setCharacters(resp.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchOnFilter();
  }, [filterElement]);


  const setSearchQuery = (value) => {
    const transformedValue = value.split(" ").join("+");
    setFilterQuery(transformedValue);
  }

  const setFilterState = (value) => {
    setFilterElement(value);
  }

  return (
    <>
      <Header />
      <SearchBar sendQuery={setSearchQuery} setFilterState={setFilterState} />
      <div className="App">
        {
          !isLoading && 
            <ListComponent CharactersList={characters} />
        }
        {
          isLoading && 
            <CustomLoader />
        }
      </div>
    </>
  );
}

export default App;
