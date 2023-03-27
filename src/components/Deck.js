import Card from './Card';

function Deck () {
    const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];



    return ( //eslint-disable-line

        <ul className="deck">
            { cards.map((entry, index)=> {
                return <li key={index} className={`card deck-pos-${entry}`}><Card /></li>
            }) }
        </ul>
    )
};

export default Deck;