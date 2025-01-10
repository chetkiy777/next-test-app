'use client'
import { useEffect, useState } from 'react';
import GoodMarkup from "@/app/components/GoodMarkup";
import BadMarkup from "@/app/components/BadMarkup";

export default function Home() {
    const [geoData, setGeoData] = useState('');

    useEffect(() => {
        async function fetchIP() {
            const res = await fetch('https://api.ipify.org?format=json'); // API для получения IP
            const data = await res.json();

            const geoResponse = await fetch(`https://ipinfo.io/${data.ip}/json?token=20a86765720c74`, {
                cache: 'no-store',
            });
            const geoData = await geoResponse.json();
            console.log(geoData);
            setGeoData(geoData.country)

        }

        fetchIP();
    }, []);


    return (
        <main>
            {geoData && geoData === "UA" ? <GoodMarkup /> : <BadMarkup />}
            <p>{geoData}</p>
        </main>
    );
}