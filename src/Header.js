import React,{useState, useEffect} from 'react';
import './css/Header.css';

import HeaderTop from './HeaderTop';
import Menu from './Menu';

const Header = () => {
    const [scroll, setScroll] = useState(true)

    useEffect(() => {
        document.addEventListener("scroll", () => {
          const scrollCheck = window.scrollY < 66
          if (scrollCheck !== scroll) {
            setScroll(scrollCheck)
          }
        })
      })

    return(
        <header className={`${scroll ? ' ' : 'sticky'}`}>
            <HeaderTop />
            <Menu />
        </header>
    )
}


export default Header;