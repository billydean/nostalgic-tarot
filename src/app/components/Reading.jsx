
import React from "react";
import PropTypes from 'prop-types';
import Deck from "./Deck";

function ReadingSpace (props) {

    return (
        <div className={props.class}>
           { props.started && <div className="reading-content">
                <div className="reading-1">
                    <h3>Present Situation</h3>
                    <p>Where do things currently stand? What circumstances led you to seek a reading?</p>
                    <h4>Dummy Card Title</h4>
                    <p>Dummy Card Reading</p>
                </div>
                <div className="reading-2">
                    <h3>Influences</h3>
                    <p>What factors or actors have their finger on the scale? What is contributing to the situation?</p>
                    <h4>Dummy Card Title</h4>
                    <p>Dummy Card Reading</p>
                </div>
                <div className="reading-3">
                    <h3>Challenges</h3>
                    <p>What stands in the way of resolving the situation?</p>
                    <h4>Dummy Card Title</h4>
                    <p>Dummy Card Reading</p>
                </div>
                <div className="reading-4">
                    <h3>Final Outcome</h3>
                    <p>If nothing else changes, what is most likely to happen?</p>
                    <h4>Dummy Card Title</h4>
                    <p>Dummy Card Reading</p>
                </div>
                <div className="reading-5">
                    <h3>Theme</h3>
                    <p>This is the lens through which all the other cards should be read.</p>
                    <h4>Dummy Card Title</h4>
                    <p>Dummy Card Reading</p>
                </div>
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
