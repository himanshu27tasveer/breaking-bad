import React from "react";
import CharElement from './CharElement';



function ListComponent (props){


    return (
        <div id="list">
            {
                props.CharactersList.map(character => 
                    <CharElement key={character.char_id} character={character}
                />)
            }
        </div>
    );
}


export default ListComponent;