import React from "react";
import PropTypes from 'prop-types';

function Deck (props) {
    const {count, setCount, selection, setSelection} = props;

    const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
    
    const selectCard = (e) => {
        let content= e.target.parentElement
        let card = content.parentElement.className.split(' ')
        const regex = /deck/
        let value = card.find(elem => regex.test(elem));
        // let value = card[2]
        if (!card.includes("card")) {
            console.log('oops, not a card!')
        } else if (card.includes("select-card")) {
            content.parentElement.classList.remove("select-card");
            setCount(count - 1);
            setSelection(selection.filter(each => each !== value))
        } else if (count < 5){
            content.parentElement.classList.add("select-card");
            setCount(count + 1)
            setSelection([...selection, value])
        } else {
            console.log('MAX selected!!')
        }
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
                <div className="front"></div>
                <div className="back"></div>
                </div>
                </div>
            }) }
            </div>
    )
}

Deck.propTypes = {
    count: PropTypes.number,
    setCount: PropTypes.func,
    selection: PropTypes.array,
    setSelection: PropTypes.func,
    cardData: PropTypes.array
}

export default Deck;