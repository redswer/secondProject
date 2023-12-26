import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import './Header.css';
import HeaderLogo from './HeaderLogo';
import SearchBox from './SearchBox';
import HeaderCategory from './HeaderCategory';
import UserSupport from './UserSupport';

function Header() {
    return (
        <div className='header'>
            <div className='header_container'>
                <HeaderLogo>
                    <Routes>
                        <Route path='/' element={<HeaderLogo />}></Route>
                    </Routes>
                </HeaderLogo>
                <div>
                    <SearchBox></SearchBox>
                    <HeaderCategory></HeaderCategory>
                </div>
                <UserSupport></UserSupport>
            </div>
        </div>
    )
}

// export default React.memo(Header);
export default Header;