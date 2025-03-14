import Matches from "../matches/matches";
import Header from "../header/header";
import { useState, useEffect } from "react";

export default function (){
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMatches = async () => {
        setLoading(true);
        setError(null);
        try {
            document.getElementById("error").style.visibility = "hidden";
            const response = await fetch("https://app.ftoyd.com/fronttemp-service");
            if (!response.ok) document.getElementById("error").style.visibility = "visible";
            else document.getElementById("error").style.visibility = "hidden";
            const data = await response.json();
            setMatches(data.data.matches);
        } catch (err) {
            setError("Ошибка: не удалось загрузить информацию");
        }finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMatches();
    }, []);

    return(
        <div>
            <Header loading={loading} fetchMatches={fetchMatches}/>
            <Matches matches={matches}/>
        </div>

    )
}