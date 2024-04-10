import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <div className='mx-4 md:mx-0 poppins-font'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;