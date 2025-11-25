import { useEffect, useState } from "react"


export function useCountDown(fromDate){

    let [timeleft, setTimeLeft] = useState([]);

    

    useEffect(()=>{

    const interval = setInterval(()=>{

        const date = new Date(fromDate).getTime();

        let now = Date.now();

        let diff = date - now;

        let days = Math.floor(diff /(1000 * 60 * 60 * 24));
        let hour = Math.floor((diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) );
        let minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        let second = Math.floor((diff % (1000 * 60)) / 1000)
        setTimeLeft([
            days,
            hour,
            minute,
            second
        ])

        if(diff < 0){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, 5000)}, [])


    return timeleft;
}




