import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNewss from "./BreakingNewss";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div className="poppins-font">
            <Header></Header>
            <BreakingNewss></BreakingNewss>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 mt-7 md:mt-16 gap-2 md:gap-4" >
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* news */}
                <div className="md:col-span-2 ">
                    <div className="mt-5 md:mt-0">
                        <h2 className="text-[#403F3F] text-xl font-semibold mb-3 md:mb-5">Dragon News Home</h2>
                        <div className="grid gap-4 md:gap-7">
                            {
                                news.map(aNews => <NewsCard
                                    key={aNews._id}
                                    news={aNews}
                                ></NewsCard>)
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default Home;