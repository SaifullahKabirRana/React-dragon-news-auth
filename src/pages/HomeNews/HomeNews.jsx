import { useEffect, useState } from "react";
import News from "./News";

const HomeNews = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data));
    }, []);

    return (
        <div className="mt-5 md:mt-0">
            <h2 className="text-[#403F3F] text-xl font-semibold">Dragon News Home</h2>
            <div className="grid gap-4 md:gap-7">
               {
                news.map(newss => <News key={news.id} newss={newss}></News>)
               }
            </div>
        </div>
    );
};

export default HomeNews;