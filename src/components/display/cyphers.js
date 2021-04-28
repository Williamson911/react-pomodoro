import Prototypes from "prop-types";

const Cyphers = ({value})=>(
    <span>{String(value).padStart(2, "0")}</span>
);

Cyphers.propTypes = {
    value: Prototypes.number.isRequired,
};

export default Cyphers;