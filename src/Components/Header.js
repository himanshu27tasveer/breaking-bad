import bbart from '../assets/bbart.png'
import logo from '../assets/logo.jpg'

function Header (){
    return (
        <div id="header">
            <img id="logo" src={logo} alt="logo"/>
            <span>Breaking Bad</span>
            <img id="banner" src={bbart} alt="banner"/>
        </div>
    );
}


export default Header;