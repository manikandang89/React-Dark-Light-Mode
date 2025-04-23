import {useEffect} from 'react';
import { useTheme } from '../context/ThemeContext';
import { MdLightMode, MdDarkMode } from "react-icons/md";

const AppHeader = () => {
    const {theme, toggleTheme} = useTheme();

    useEffect( () => {
        document.body.setAttribute('data-theme', theme);
    }, [theme])
  return (
    <>
    <header className='header'>
        <div>
        <svg onClick={toggleTheme} height={40} width={40} fontSize={30}>{theme === 'dark' ? < MdLightMode /> : <MdDarkMode />}</svg>
        {/* <button onClick={toggleTheme}>{theme === 'dark' ? 'Light' : 'Dark'}</button> */}
        </div>
    </header>
    </>
  )
}

export default AppHeader
