import PropTypes from "prop-types";

const Cyphers = ({value}) => <span>{String(value).padStart(2, "0")}</span>;

Cyphers.propTypes = {
    value: PropTypes.number.isRequired,
};

export default Cyphers;
