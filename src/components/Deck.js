// eslint-disable-next-line;
import Card from './Card';
function Deck () {
    const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

    const selectCard = (e) => {
        let card = e.target.parentElement.classList
        console.log(card)
        if (card.contains("select-card")) {
            card.remove("select-card");
        } else {
            card.add("select-card");
        }
    }

    return ( 

        <ul className="deck">
            { cards.map((entry, index)=> {
                return <li 
                key={index} 
                className={`card deck-pos-${entry}`}
                onClick={(e)=>selectCard(e)}
                > <Card /> </li>
            }) }
        </ul>
    )
};

export default Deck;