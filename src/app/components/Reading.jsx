
import React from "react";
import PropTypes from 'prop-types';
import Deck from "./Deck";

function ReadingSpace (props) {
    const cards = props.cardData;

    return (
        <div className={props.class}>
           { props.started && <div className="reading-content">
                <div className="reading-1">
                    <h3>Present Situation</h3>
                    <p className="h3-tag">Where do things currently stand? What circumstances led you to seek a reading?</p>
                    <h4>{cards[0].title}</h4>
                    <p>{cards[0].reading}</p>
                    <div className="read-back"></div>
                    <div className="read-left"></div>
                </div>
                <div className="reading-2">
                    <h3>Influences</h3>
                    <p className="h3-tag">What factors or actors have their finger on the scale? What is contributing to the situation?</p>
                    <h4>{cards[1].title}</h4>
                    <p>{cards[1].reading}</p>
                    <div className="read-back"></div>
                    <div className="read-right"></div>
                </div>
                <div className="reading-3">
                    <h3>Challenges</h3>
                    <p className="h3-tag">What stands in the way of resolving the situation?</p>
                    <h4>{cards[2].title}</h4>
                    <p>{cards[2].reading}</p>
                    <div className="read-back"></div>
                    <div className="read-left"></div>
                </div>
                <div className="reading-4">
                    <h3>Final Outcome</h3>
                    <p className="h3-tag">If nothing else changes, what is most likely to happen?</p>
                    <h4>{cards[3].title}</h4>
                    <p>{cards[3].reading}</p>
                    <div className="read-back"></div>
                    <div className="read-right"></div>
                </div>
                <div className="reading-5">
                    <h3>Theme</h3>
                    <p className="h3-tag">This is the lens through which all the other cards should be read.</p>
                    <h4>{cards[4].title}</h4>
                    <p>{cards[4].reading}</p>
                    <div className="read-back"></div>
                    <div className="read-left"></div>
                </div>
            </div> }
            
            <Deck 
            count={props.count} 
            setCount={props.setCount}
            selection={props.selection}
            setSelection={props.setSelection}
            cardData={props.cardData}
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
    started: PropTypes.bool,
    cardData: PropTypes.array
}

export default ReadingSpace;
