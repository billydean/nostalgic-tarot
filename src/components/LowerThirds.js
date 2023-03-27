import Button from './Button';
import Deck from './Deck';

function LowerThirds () {

    return (
        <div className="lower">
            <Deck />
            <div className="buttons">
            <Button label="Start"/>
            <Button label="Clear"/>
            </div>
        </div>
    )
};

export default LowerThirds;