// 'use client'
import styles from "./page.module.css";
// import {useEffect, useState} from "react";
import LocationPage from "@/app/location/page";

const Home = () => {

    // const [swData, setSwData] = useState(null);
    //
    // useEffect(() => {
    //     fetch('https://swapi.py4e.com/api/people/1/')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setSwData(data.name)
    //         })
    // }, []);


    // if (!swData) return <div>Loading...</div>

  return (
    <div className={styles.page}>
        <LocationPage />
        {/*{swData}*/}
    </div>
  );
}

export default Home

