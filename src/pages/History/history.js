

import Navbar from "../common/Navbar/Navbar";
import "./history.css";
import { useEffect, useState } from "react";
import HistoryCard from "./historyCard";

const History = (props) => {
    const [data, setData] = useState([
        { id: '1', title: 'Sumit', date: '21' },
        { id: '2', title: 'Rahul', date: '22' },
        { id: '3', title: 'Rohit', date: '23' },
        { id: '4', title: 'Raj', date: '24' }
    ]);

    const [searchText, setSearchText] = useState('');

    const getData = async () => {
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const obj = await res.json();
        setData(obj.products);
    }

    useEffect(() => {
            getData();
    }, [searchText]);

    // console.log('normal rendering data', data);

    return (
        <div>
            <Navbar page="history"/>
            <input className="history-search-box"type="text" onChange={(e) => setSearchText(e.target.value)} />
        

            <div className="history-main-container">
            {data.map((item)=>{
                    return <HistoryCard item={item}/>
                })}
            </div>
        </div>
    )
};

export default History;


//prop drilling context api vs redux backend api call 