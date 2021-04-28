import classNames from "classnames";
import Display from "../components/display";
const Pomodoro = ()=>{
    const seconds = 1500;
    return(
        <div className={classNames("columns", "is-mobile", "is-centered")}>
            <div className={classNames("column", "is-half")}>
                <Display seconds={seconds} />
            </div>
        </div>
    );
};

export default Pomodoro;