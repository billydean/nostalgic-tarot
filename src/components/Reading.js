import LowerThirds from "./LowerThirds";

function ReadingSpace (props) {

    return (
        <div className="reading">
            <div style={{height: "50vh"}}></div>
            <LowerThirds 
            count={props.count} 
            setCount={props.setCount}
            selection={props.selection}
            setSelection={props.setSelection}
            />
        </div>
    )
};

export default ReadingSpace;