// import { limit } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div>
            <h2 className="text-[#403F3F] text-xl font-semibold mb-2 md:mb-5">All Categories</h2>
            <div>
                {
                    categories.map(category => <li className="block text-[#403F3F] text-[17px] md:text-xl font-semibold py-2 md:py-4 ml-7 md:ml-10 bg-[#E7E7E7] mb-2 md:px-7 px-3 rounded-lg w-[300px] md:w-auto "
                        key={category.id}><NavLink 
                            
                        >{category.name}</NavLink></li>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;