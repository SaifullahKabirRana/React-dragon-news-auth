import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNewss from "./BreakingNewss";


const Home = () => {
    return (
        <div className="poppins-font">
            <Header></Header>
            <BreakingNewss></BreakingNewss>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 md:grid-cols-4 mt-7 md:mt-16 gap-2 md:gap-4" >
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 ">
                    <h2 className="3xl">News coming soon..</h2>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default Home;