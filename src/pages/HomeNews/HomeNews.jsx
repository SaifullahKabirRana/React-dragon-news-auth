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
            <h2 className="text-[#403F3F] text-xl font-semibold mb-3 md:mb-5">Dragon News Home</h2>
            <div className="grid gap-4 md:gap-7">
               {
                news.map(aNews => <News key={news._id} news={aNews}></News>)
               }
            </div>
        </div>
    );
};

export default HomeNews;