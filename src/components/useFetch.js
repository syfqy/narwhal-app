import { useState, useEffect } from 'react';

export default function useFetch(url) {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true; // prevent set state when unmounted warning
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw Error("Unable to request data for this resource")
                } 
                if (isMounted) {
                    const data = await res.json();
                    setData(data);
                    setError(null);
                    setIsLoading(false);
                }
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
                console.log(err.message);
            }
        };
        
        fetchData();
        // clean up to prevent fetching after navigating away from page
        return () => {
            isMounted = false;
        }
    }, [url])
    
    return { data, isLoading, error }
}