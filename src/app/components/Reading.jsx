
import React from "react";
import PropTypes from 'prop-types';
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

ReadingSpace.propTypes = {
    class: PropTypes.string,
    count: PropTypes.number,
    setCount: PropTypes.func,
    selection: PropTypes.array,
    setSelection: PropTypes.func
}

export default ReadingSpace;
