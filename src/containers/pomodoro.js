import {useCallback, useState} from "react";
import {useTimer} from "../core/hooks/use-timer";

import classNames from "classnames";
import Display from "../components/display";
import Tools from "../components/tools";

import {SESSION_DURATION} from "../core/constants";

const Pomodoro = () => {
    const [showModal, setShowModal] = useState(false);
    const [
        {running, seconds},
        {setRunning, setSeconds},
    ] = useTimer(SESSION_DURATION, false, () => setShowModal(true));

    const handleMinus = useCallback(
        () => setSeconds(val => Math.max(val - 60, 0)),
        [setSeconds],
    );
    const handleReset = useCallback(() => setSeconds(SESSION_DURATION), [
        setSeconds,
    ]);
    const handlePlayPause = useCallback(() => setRunning(val => !val), [
        setRunning,
    ]);
    const handlePlus = useCallback(() => setSeconds(val => val + 60), [
        setSeconds,
    ]);
    const handleCloseModal = useCallback(() => {
        setShowModal(false);
        handleReset();
    }, [setShowModal, handleReset]);
    const handleRestart = useCallback(() => {
        handleCloseModal();
        handlePlayPause();
    }, [handleCloseModal, handlePlayPause]);

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
            {showModal && (
                <Modal onClose={handleCloseModal} onRestart={handleRestart} />
            )}
        </div>
    );
};

export default Pomodoro;
