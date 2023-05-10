import {useEffect, useState} from "react"
function Clock()
{
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);
    // Add event handlers for the buttons (start/stop/reset)
    const [data, setdata] = useState(null)
    const handleStart = () =>
    {
        if (!isRunning)
        {
            const id = setInterval(() =>
            {
                setTime(prevTime => prevTime + 1);
            }, 1000);
            setIntervalId(id);
            setIsRunning(true);
        }
    };
    const handleStop = () =>
    {
        clearInterval(intervalId);
        setIntervalId(null);
        setIsRunning(false);
    };
    const handleReset = () =>
    {
        clearInterval(intervalId);
        setIntervalId(null);
        setTime(0);
        setIsRunning(false);
    };
    // Format the time as HH:MM:SS
    const formatTime = () =>
    {
        const hours = Math.floor(time / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };
    return (
        <div>
            <input type="text" onChange={(e) => setdata(e.target.value)} />
            <h1>{formatTime()}</h1>

            {!isRunning && <button onClick={handleStart}>Start</button>}
            {isRunning && <button onClick={handleStop}>Stop</button>}
            <button onClick={handleReset}>Reset</button>
            {setIntervalId}
        </div>
    );
}
export default Clock