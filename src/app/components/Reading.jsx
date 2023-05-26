
import React from "react";
import PropTypes from 'prop-types';
import Deck from "./Deck";

function ReadingSpace (props) {

    return (
        <div className={props.class}>
           { props.started && <div className="reading-content">
                <div className="reading-1"></div>
                <div className="reading-2"></div>
                <div className="reading-3"></div>
                <div className="reading-4"></div>
                <div className="reading-5"></div>
            </div> }
            
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
    setSelection: PropTypes.func,
    started: PropTypes.bool
}

export default ReadingSpace;
