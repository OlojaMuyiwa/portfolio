import { useState } from 'react';
import Sidebar from './Sidebar';
// import Modal from './Modal';
import { FaBars } from 'react-icons/fa';
const Home = () => {
  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
  // const [ isModalOpen, setIsModalOpen ] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }

  // const openModal = () => {
  //   setIsModalOpen(true);
  // }
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // }


  return (
   <>
    <div className='navbar'>
        <FaBars className={`${isSidebarOpen ? 'toggle-btn' : 'sidebar-toggle'}`} onClick={() => setIsSidebarOpen(true)} setIsSidebarOpen={setIsSidebarOpen}/>
      </div>
    <main>
    <Sidebar openSidebar={ openSidebar } closeSidebar={ closeSidebar } isSidebarOpen={isSidebarOpen}/>
    {/* <button className='btn btn-modal'>Modal</button> */}
    {/* <Modal openModal={ openModal } closeModal={ closeModal } onClick={() => setIsModalOpen(true)} isModalOpen={isModalOpen}/>  */}
    </main>
   </>
  )
}

export default Home
