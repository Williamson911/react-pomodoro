import {useTimer} from "../core/hooks/use-timer";

import classNames from "classnames";
import Display from "../components/display";
import Tools from "../components/tools";

import {SESSION_DURATION} from "../core/constants";

const Pomodoro = () => {
    const [
        {running, seconds},
        {setRunning, setSeconds},
    ] = useTimer(SESSION_DURATION, false, () =>
        console.log("Timer is finished"),
    );

    const handleMinus = () => setSeconds(val => Math.max(val - 60, 0));
    const handleReset = () => setSeconds(SESSION_DURATION);
    const handlePlayPause = () => setRunning(!running);
    const handlePlus = () => setSeconds(val => val + 60);

    return (
        <div className={classNames("columns", "is-mobile", "is-centered")}>
            <div className={classNames("column", "is-half")}>
                <Display seconds={seconds} />
                <Tools
                    running={running}
                    onMinus={handleMinus}
                    onReset={handleReset}
                    onPlayPause={handlePlayPause}
                    onPlus={handlePlus}
                />
            </div>
        </div>
    );
};

export default Pomodoro;
