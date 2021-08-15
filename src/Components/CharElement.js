import React, { useState } from 'react';
import Popup from './Popup';


function CharElement(props){

    const [show, setShow] = useState(false);


    const handleClick = (e) => {
        setShow(!show);
    }

    const setcolor = (status) => {
        if (status[0] === 'A') return "#90be4e";
        return "#be4e4e";
    }

    return (
            <div className="list-element">
                <p>{props.character.name}</p>
                <div>
                    <p>
                        Born On {props.character.birthday}
                    </p>
                    <p>
                        Occupation - {props.character.occupation.join(', ')}
                    </p>
                    <p style={{"color": setcolor(props.character.status)}}>
                        {props.character.status}
                    </p>
                    <button id="details-btn" onClick={handleClick}>See More</button>
                </div>
                {show && <Popup
                    character={props.character}
                    handleClose={handleClick}
                    />
                }
            </div>
        );
}


export default CharElement;