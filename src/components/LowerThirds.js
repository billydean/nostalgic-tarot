import Deck from './Deck';

function LowerThirds (props) {

    return (
        <div className="lower">
            <Deck 
            count={props.count} 
            setCount={props.setCount}
            selection={props.selection}
            setSelection={props.setSelection}
            />

        </div>
    )
};

export default LowerThirds;