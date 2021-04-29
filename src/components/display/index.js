import PropTypes from "prop-types";
import Cyphers from "./cyphers";

const Display = ({seconds}) => {
    <div className={"timer-display"}>
        <Cyphers value={Math.floor(seconds / 60)} />
        <span style={{opacity: seconds % 2 ? 0.5 : 1}}>{";"}</span>
        <Cyphers value={seconds % 60} />
    </div>;
};

Display.propTypes = {
    seconds: PropTypes.number.isRequired,
};

export default Display;
