
import React, {useState, useEffect} from "react";

const arr = [
    {"city": "Delhi", "country": "India"},
    {"city": "Columbo", "country": "SriLanka"},
    {"city": "Lahore", "country": "Pakistan"}
];

export default function Home()
{
    const [count, setCount] = useState(0)
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [right, setRight] = useState(false)
    const [wrong, setWrong] = useState(false)

    useEffect(() =>
    {
        if (count == 2)
        {
            filter();

        }
    }, [count])

    const filter = () =>
    {
        let filteredarr = arr.filter(item => item.country == country)
        console.log(filteredarr)
        filteredarr.map(value =>
        {
            if (value.city === city)
            {
                setRight(true)
                arr.splice(arr.findIndex(a => a.city === filteredarr[0].city), 1)
                console.log("right match")
            }
            else
            {
                setWrong(true)
                console.log("wrong match")
            }
        })
        setCount(0)
    }
    const cityClickHandler = (city) =>
    {
        setCity(city)
        setCount(count + 1)
    }
    const countryClickHandler = (countrys) =>
    {
        setCountry(countrys)
        setCount(count + 1)
    }
    return (
        <div>
            <div>
                {arr.map(post =>
                {
                    let sel = ""
                    let unsel = ""
                    if (city === post.city)
                    {
                        sel = 'green'
                        unsel = "red"
                    }
                    return < >
                        <button style={{background: right ? sel : wrong ? unsel : ''}} onClick={() => cityClickHandler(post.city)}>{post.city}</button>
                    </>
                })}

            </div>
            <div>
                {arr.map(post =>
                {
                    let sel = ""
                    let unsel = ""
                    if (country === post.country)
                    {
                        sel = 'green'
                        unsel = "red"
                    }
                    return < >
                        <button style={{background: right ? sel : wrong ? unsel : ''}} onClick={() => countryClickHandler(post.country)}>{post.country}</button>
                    </>
                })}
            </div>
        </div>
    );
}