import { useEffect, useState } from 'react';
import DrinkList from './DrinkList';


export default function FetchGetRequest() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://fake-coffee-api.vercel.app/api?limit=10', { mode: 'cors' });
                const coffeeData = await res.json(); // await the JSON parsing
                setData(coffeeData); // set the state with the parsed data
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <h1>Coffee Data</h1>
            {data ? <DrinkList drinks={data} /> : <p>Loading...</p>}
        </>
    );
}
