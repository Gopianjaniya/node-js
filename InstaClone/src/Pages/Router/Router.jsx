import { Routes,Route } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/sidebar';
import HomePage from '../HomePage/HomePage';
 
import Profile from '../Profile/Profile';

export default function Router() {
  return (
    <>
      <div className="flex">
        <div className="w-[20%]  border-slate-500 pl-10 ">
          <Sidebar />
        </div>
        <div className='w-full'>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/username" element={<Profile />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}
