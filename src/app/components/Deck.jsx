import React from "react";
import PropTypes from 'prop-types';

function Deck (props) {
    const {count, setCount, selection, setSelection} = props;

    const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

    const selectCard = (e) => {
        // let card = e.target.classList
        let content= e.target.parentElement
        let card = content.parentElement.classList
        let value = card[2]
        if (!card.contains("card")) {
            console.log('oops, not a card!')
        } else if (card.contains("select-card")) {
            card.remove("select-card");
            setCount(count - 1);
            setSelection(selection.filter(each => each !== value))
        } else if (count < 5){
            card.add("select-card");
            setCount(count + 1)
            setSelection([...selection, value])
        } else {
            console.log('MAX selected!!')
        }
        console.log(count, selection);
    }

    return ( 

        <div className="deck">
            { cards.map((entry, index)=> {
                return <div 
                key={index} 
                className={`card resting deck-pos-${entry}`}
                onClick={(e)=>selectCard(e)}
                > 
                <div className="card-content">
                <div className="back"></div>
                <div className="front"></div>
                </div>
                </div>
            }) }
            </div>
        // <ul className="deck">
        //     { cards.map((entry, index)=> {
        //         return <li 
        //         key={index} 
        //         className={`card deck-pos-${entry}`}
        //         onClick={(e)=>selectCard(e)}
        //         > <div className="back"></div><div className="front"></div>
        //          </li>
        //     }) }
        // </ul>
    )
}

Deck.propTypes = {
    count: PropTypes.number,
    setCount: PropTypes.func,
    selection: PropTypes.array,
    setSelection: PropTypes.func
}

export default Deck;