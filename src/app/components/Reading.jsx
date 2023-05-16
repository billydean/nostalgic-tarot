/* eslint-disable react/prop-types */
import React from "react";
import Deck from "./Deck";

function ReadingSpace (props) {

    return (
        <div className={props.class}>
            {/* <div style={{height: "50vh"}}></div> */}
            <Deck 
            count={props.count} 
            setCount={props.setCount}
            selection={props.selection}
            setSelection={props.setSelection}
            />
        </div>
    )
}

export default ReadingSpace;
