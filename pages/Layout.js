import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../scss/Layout.scss"
import logo from '../Assets/bg.jpg';
//import { useLocation } from 'react-router-dom'; 









const Layout = () => {
  const [clicked, setClicked] = useState(false);

  //const location = useLocation(); //location
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);

    //per te shku majtas kur klikon
    setIsVisible(!isVisible); // Toggle visibility
  };

  // useEffect nese e scroll navbarin
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 9000) {
        setClicked(true);
      } else {
        setClicked(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav>
        <Link to='/'>
        <img src={logo} alt='logo' width="100" height="70" />
        </Link>
        <div>
          <ul id='navbar' className={clicked ? "navbar active" : "navbar"}>
            <li><Link to='/' onClick={handleClick}>Home</Link></li>
            <li><Link to='/shop' onClick={handleClick}>Shop</Link></li>
            <li><Link to='/about' onClick={handleClick}>About</Link></li>
            <li><Link to='/partner' onClick={handleClick}>Partner</Link></li>
            <li><Link to='/contact' onClick={handleClick}>Contact</Link></li>
          </ul>
        </div>
        <div id='mobile' onClick={handleClick}>
          <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default Layout;
