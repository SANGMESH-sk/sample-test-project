import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {decrement, increment, incrementByAmount} from '../Feature/gituserSlice'

export default function Counter()
{
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const [data, setdata] = useState(null)

    const addvalue = Number(data)
    function Update()
    {
        dispatch(incrementByAmount(addvalue))
    }

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <input type="text" onChange={(e) => setdata(e.target.value)} />
                <p>{count}</p>
                <button onClick={Update}>Update</button>
            </div>
        </div>
    )
}