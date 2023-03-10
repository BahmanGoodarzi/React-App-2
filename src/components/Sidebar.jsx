import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../context/ContexProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, setscreenSize, currentColor } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-sm m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-sm dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'


  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
        <div className='flex justify-between items-center'>

          <Link to='/' onClick={handleCloseSideBar}
            className='items-center gap-3 ml-3 flex text-xl font-bold tracking-tight
         dark:text-white text-slate-900 mt-3'><SiShopware /> <span>Shoppy</span>
          </Link>

          <TooltipComponent content='Menu' position='BottomCenter'>
            <botton type='botton' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
              className='text-2xl rounded-full p-1 block hover:bg-light-gray mt-3 md:hidden'>
              <MdOutlineCancel />
            </botton>
          </TooltipComponent>
        </div>

        <div>
          {links.map((item) => (
            <div key={item.title}>
              <p className='text-gray-500 m-3 mt-4 uppercase'>
                {item.title}
              </p>

              {item.links.map((link) => (
                <NavLink to={`/${link.name}`} key={link.name}
                  style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : '' })} onClick={handleCloseSideBar}
                  className={({ isActive }) => isActive ? activeLink : normalLink}>
                  {link.icon} <span className='capitalize'>{link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar