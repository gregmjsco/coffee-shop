import { useEffect, useState } from 'react';

export default function FetchGetRequest() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://fake-coffee-api.vercel.app/api?limit=2', { mode: 'cors' });
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
            {data ? (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.name}</li> 
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}
