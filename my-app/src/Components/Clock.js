import {useEffect, useState} from "react"
function Clock()
{
    const [time, setTime] = useState(0);
    const [interval, setIntervalId] = useState(null)
    const [isRunning, setIsrunning] = useState(false)
    const [data, setdata] = useState(null)
    const handleStart = () =>
    {
        if (!isRunning)
        {
            const id = setInterval(() =>
            {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
            setIntervalId(id)
            setIsrunning(true)
        }
    };
    function handleReset()
    {
        clearInterval(interval)
        setTime(0)
        setIsrunning(false)
    }
    function Stop()
    {
        clearInterval(interval)
        setIsrunning(false)
    }
    // Add event handlers for the buttons (start/stop/reset)
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
            <h1>{formatTime()}</h1>
            <input type="text" onChange={(e) => setdata(e.target.value)} />
            {!isRunning && <button onClick={handleStart}>Start</button>}
            {isRunning && <button onClick={Stop}>stop</button>}
            <button onClick={handleReset}>Reset</button>
            <p>{data}</p>
        </div>
    );
}
export default Clock