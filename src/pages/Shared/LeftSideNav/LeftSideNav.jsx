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
                categories.map(category => <NavLink 
                    className="block text-[#403F3F] text-xl font-semibold py-3 md:py-6 ml-5 md:ml-10"
                    key={category.id}
                  
                    >{category.name}</NavLink>)
            }
          </div>
        </div>
    );
};

export default LeftSideNav;