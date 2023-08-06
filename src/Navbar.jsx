import logo from './assets/assets/shared/logo.svg';
import hamburger from './assets/assets/shared/icon-hamburger.svg';
import closeIcon from './assets/assets/shared/icon-close.svg';
import { Link, Outlet } from "react-router-dom";
import { useState } from 'react';

export const Navbar =()=>{
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () =>{
    setIsOpen((open) => !open);
  }
  const mobileNav = window.innerWidth;
  const path = window.location.pathname;
  const isActiveDestination = path === '/moon'|| path === '/mars'|| path === '/europa'||path === '/titan',
    isActiveCrew = path === '/mark'|| path === '/douglas'|| path === '/anousheh'||path === '/victor',
    isTechActive = path === '/space-capsule'|| path === '/spaceport'|| path === '/vehicle';

  return(
    <>
      <div className='navbar'>
        <Link to='/'><img src={logo} alt='test' /></Link>
        <img src={hamburger} alt='test' onClick={toggleMenu} className='burger-btn'/>
        <nav className={mobileNav >= 810 ? 'desktopNav' :'desktopNav-hidden'}>
          <ul> 
            <li><Link to='/' className={path === '/' ? 'active':''}>00 Home</Link></li>
            <li><Link to='/moon' className={ isActiveDestination ? 'active':''}>01 Destination</Link></li>
            <li><Link to='/mark' className={ isActiveCrew ? 'active':''}>02 Crew</Link></li>
            <li><Link to='/space-capsule' className={isTechActive ? 'active':''}>03 Technology</Link></li>
          </ul>
        </nav>
        <Outlet />
      </div>

      <div className={`hamburger ${isOpen ? 'is-open':''}`}>
        <div >
          <img src={closeIcon} alt="close_btn" onClick={toggleMenu} />
        </div>
        <nav>
          <ul> 
            <li><Link to='/'>00 Home</Link></li>
            <li><Link to='/moon'>01 Destination</Link></li>
            <li><Link to='/mark'>02 Crew</Link></li>
            <li><Link to='/space-capsule'>03 Technology</Link></li>
          </ul>
        </nav>
        <Outlet />
      </div>
      
    </>
  );
}

export const DestinationNav = () =>{
  const path = window.location.pathname;
  return(
    <>
      <ul className='destinationNav'>
        <li className={path === '/moon' ? 'active' : ''}><Link to='/moon'>Moon</Link></li>
        <li className={path === '/mars' ? 'active' : ''}><Link to='/mars'>Mars</Link></li>
        <li className={path === '/europa' ? 'active' : ''}><Link to='/europa'>Europa</Link></li>
        <li className={path === '/titan' ? 'active' : ''}><Link to='/titan'>Titan</Link></li>
      </ul>
      <Outlet />
    </>
  );
}

export const NavCrew = () =>{
  const path = window.location.pathname;
  return(
    <>
      <ul className='crew-nav'>
        <li ><Link to='/mark' className={path === '/mark' ? 'active' : ''}></Link></li>
        <li><Link to='/douglas' className={path === '/douglas' ? 'active' : ''}></Link></li>
        <li><Link to='/anousheh' className={path === '/anousheh' ? 'active' : ''}></Link></li>
        <li><Link to='/victor' className={path === '/victor' ? 'active' : ''}></Link></li>
      </ul>
      <Outlet />
    </>
  );
}

export const TechnologyNav = () =>{
  const path = window.location.pathname;
  return(
    <ul className='technology-nav'>
      <li><Link to='/space-capsule' className={path === '/space-capsule'?'active':''}>1</Link></li>
      <li><Link to='/spaceport' className={path === '/spaceport'?'active':''}>2</Link></li>
      <li><Link to='/vehicle' className={path === '/vehicle'?'active':''}>3</Link></li>
    </ul>
  );
}
