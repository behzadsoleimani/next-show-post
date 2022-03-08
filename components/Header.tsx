import Link from 'next/link';
import headerStyles from '../styles/Header.module.css';
import Switch from '../components/switch';
import { useEffect, useState } from 'react';
import { changeThemeMode } from "../redux/action"
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state: any) => state.themeMode)

  const handleToggle = (event: any) => {
    dispatch(changeThemeMode(event.target.checked))
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme === "dark") {
        console.log(1)
        // Set value of  darkmode to dark
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
      } else {
        console.log(2)
        // Set value of  darkmode to light
        document.documentElement.removeAttribute('data-theme');
        window.localStorage.setItem('theme', 'light');
      }
    } else {
      dispatch(changeThemeMode(window.localStorage.getItem('theme') === "dark"));
    }
  }, [darkTheme]);

  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.title}>
        <Link href={`/`}>
          <a className={headerStyles.link}>
            Overreacted
      </a>
        </Link>
      </h1>
      {darkTheme && <Switch handleToggle={handleToggle} checked={darkTheme === "dark"} />}
    </header>
  )
}

export default Header
