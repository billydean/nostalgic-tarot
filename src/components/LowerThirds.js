import Deck from './Deck';

function LowerThirds (props) {

    return (
        <div className="lower">
            <Deck count={props.count} setCount={props.setCount} />

        </div>
    )
};

export default LowerThirds;