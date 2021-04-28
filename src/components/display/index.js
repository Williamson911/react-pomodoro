import Prototypes from "prop-types";
import Cyphers from "./cyphers";

const Display=({seconds})=>{
    <div className={"timer-display"}>
        <Cyphers value={Math.floor(seonds/60)} />
        <span>{";"}</span>
        <Cyphers value={seconds%60} />
    </div>
};

Display.propTypes={
    seconds: PropTypes.number.isRequired,
}

export default Display;