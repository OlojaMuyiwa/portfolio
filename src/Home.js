import { useState } from 'react';
import Sidebar from './Sidebar';
import Modal from './Modal';
import { FaBars } from 'react-icons/fa';
const Home = () => {
  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }
  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }


  return (
   <>
    <div className='navbar'>
        <FaBars className='sidebar-toggle'/>
      </div>
    <Sidebar openSidebar={ openSidebar } closeSidebar={ closeSidebar }/>
    <Modal openModal={ openModal } closeModal={ closeModal }/>
   </>
  )
}

export default Home
