// import { limit } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div id="nav">
            <h2 className="text-[#403F3F] text-xl font-semibold mb-2 md:mb-5">All Categories</h2>
            <div id="nav" className="space-y-3 md:space-y-5">
                {
                    categories.map(category => <Link id="nav" className="flex ml-6"
                        key={category.id}
                        to={`/category/${category.id}`}
                    >{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;