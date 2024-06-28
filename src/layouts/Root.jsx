import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Root = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className="flex justify-center items-center mt-[200px] md:mt-[400px]"><span className="loading loading-spinner loading-lg"></span></div>
    }
    return (
        <div className='container mx-auto'>
            <div className='mx-4 md:mx-0 poppins-font'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;