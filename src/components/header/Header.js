import React, { useState } from 'react';
import './Header.scss';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header({ handleSearch }) {
  const [InputText, setInputText] = useState('');

  const handleInput = (e) => {
    setInputText(e.target.value);
    handleSearch(e.target.value); 
  };
  return (
    <div className="header">
      <div className="header__logo">
        <a href="/">
          <img
            src="https://thenestline.com/wp-content/uploads/2020/03/stayhealthy-862x1022-1.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="header__search">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search"
          value={InputText}
          onChange={handleInput}
        />
      </div>
      <div className="header__icon">
        <AccountCircleIcon className="MuiSvgIcon" />
      </div>
    </div>
  );
}

export default Header;
