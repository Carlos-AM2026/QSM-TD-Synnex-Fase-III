import './index.css';
import { ReactComponent as FinanceIcon } from './icons/finance.svg';
import { ReactComponent as TrainingsIcon } from './icons/trainings.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as ShoppingIcon } from './icons/shopping.svg';
import { ReactComponent as DocumentsIcon } from './icons/documents.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as ReportsIcon } from './icons/reports.svg';
import { ReactComponent as LogisticsIcon } from './icons/logistics.svg';
import { ReactComponent as SalesIcon } from './icons/sales.svg'; 
import { ReactComponent as UserIcon } from './icons/user.svg'; 
import Synnex from'./logo.png';
import Maps from './Our-Locations.png';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <React.Fragment>
      <QSM></QSM>
      <Navbar>
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
    <Logo></Logo>
    
    <Footer></Footer>
    </React.Fragment>
  );
}

function QSM() {
  return(
    <header className="header">
      <h1 className="menu-title">QSM</h1>
    </header>
  );
}

function Logo() {
  return(
    <img className='logo' src={Synnex} alt="TD Synex logo" />
  );
}

function Map(){
  return(
    <img className='maps' src={Maps} alt="TD Synex Maps" />
  );
}

function Footer(){
  return(
    <footer className='footer'></footer>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem
            leftIcon={<UserIcon />}>
            TD Synnex Profile
          </DropdownItem>
          <DropdownItem
            leftIcon={<DocumentsIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="documents">
            Documents
          </DropdownItem>
          <DropdownItem
            leftIcon={<TrainingsIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="trainings">
            Trainings
          </DropdownItem>
          <DropdownItem
            leftIcon={<ReportsIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="reports">
            Reports
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'documents'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Documents</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<FinanceIcon />}>Finance I</DropdownItem>
          <DropdownItem leftIcon={<LogisticsIcon />}>Logistics I</DropdownItem>
          <DropdownItem leftIcon={<ShoppingIcon />}>Shopping I</DropdownItem>
          <DropdownItem leftIcon={<SalesIcon />}>Sales I</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'trainings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Trainings</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<FinanceIcon />}>Finance I</DropdownItem>
          <DropdownItem leftIcon={<LogisticsIcon />}>Logistics I</DropdownItem>
          <DropdownItem leftIcon={<ShoppingIcon />}>Shopping I</DropdownItem>
          <DropdownItem leftIcon={<SalesIcon />}>Sales I</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'reports'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Reports</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<FinanceIcon />}>Finance I</DropdownItem>
          <DropdownItem leftIcon={<LogisticsIcon />}>Logistics I</DropdownItem>
          <DropdownItem leftIcon={<ShoppingIcon />}>Shopping I</DropdownItem>
          <DropdownItem leftIcon={<SalesIcon />}>Sales I</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
