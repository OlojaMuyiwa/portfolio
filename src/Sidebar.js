import React from 'react';
import { links, social} from './data';
import { FaTimes } from 'react-icons/fa'

const Sidebar = ( { closeSidebar, isSidebarOpen} ) => {

  return (
   <aside className={`${isSidebarOpen ?'sidebar-show' : 'sidebar'}`}>
    <div className='logo-container'>
      <h2 className='logo'>Oloja</h2>
      <button className='btn close-btn'>
        <FaTimes onClick={closeSidebar}/>
      </button>
     </div>
      <ul className='links'>
        { links.map((link) => {
          const { id, text, icon } = link;
          return <li key={id} className='links-link'>
             <a href="/" className='links-icon'>
              { icon }
              { text }
             </a>
          </li>
        })}
      </ul>
      <ul className='social-link'>
        { social.map((item) => {
          const { id, icon, url } = item;

          return <li key={id}>
             <a href={ url }>
              { icon }
             </a>
          </li>
        })}
      </ul>
   </aside>
  )
}

export default Sidebar
