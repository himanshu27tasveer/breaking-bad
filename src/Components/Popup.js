import axios from "axios";
import React, {useState, useEffect} from "react";
import CustomLoader from "./CustomLoader";
 
const Popup = ({character, handleClose}) => {

    const [quotes, setQuotes] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios(`https://www.breakingbadapi.com/api/quote?author=${character.name.replace(/ /g, '+')}`);
                setQuotes(resp.data);
                console.log(resp.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
    }, [character])

    const setColor = (status) => {
        if (status[0] === 'A') return "#90be4e#";
        return "#be4e4e";
    }

  return ( 
      <>
        {!isLoading &&
        <div className="popup-box">
        <div className="box">
            <span className="close-icon" onClick={handleClose}>x</span>
            <div id="pop-content">
                <div id="character-details">
                    <div>
                        <img src={character.img} alt={`${character.name}'s Face Not Available`} />
                    </div>
                    <div id="char-det">
                        <h2>{character.name}</h2>
                        <ul>
                            <li><span className="tag-name">Born On</span> - {character.birthday}</li>
                            <li><span className="tag-name">Occupation</span> - {character.occupation.join(', ')}</li>
                            <li><span className="tag-name">Status</span> - <span style={{"color": setColor(character.status)}}>{character.status}</span></li>
                            <li><span className="tag-name">Nickname</span> - {character.nickname}</li>
                            <li><span className="tag-name">Portrayed by</span> - {character.portrayed}</li>
                            <li><span className="tag-name">Seasons appeared</span> - {character.appearance.join(', ')}</li>
                        </ul>
                    </div>
                </div>
                <div id="character-quotes">
                    {
                        ((quotes && quotes.length > 0) && 
                            <div>
                                <hr />
                                <h3>Quotes by {character.name}</h3>
                                <ul>
                                    {quotes.map((quote) => {
                                        return <li key={quote.quote_id}>{quote.quote}</li>
                                    })}
                                </ul>
                            </div>)
                    }
                </div>
            </div>
        </div>
        </div>
    }
        {isLoading && <CustomLoader />}
      </>
  );
};
 
export default Popup;