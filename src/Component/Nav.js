import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Themecontext } from "../Context/Themecontext";
import Light from '../icons/light_mode_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg';
import dark from '../icons/dark_mode_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg';


function Nav(){
  const {theme:theme1,setTheme}=useContext(Themecontext);
  console.log(theme1);

  let myStyle = {};

  if(theme1 === 'Light'){
    myStyle = {
      background:'#e0dedeff'
    }
  }
  else if(theme1 === 'dark'){
    myStyle = {
      background:'#0F172A'
    }
  }

    return(
    <>
<header>


     <nav className="navbar navbar-expand-sm  navbar-light" style={myStyle}
    //  onClick={()=>{
    //   setTheme('dark')
    //  }}
     >
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        {/* <a className="nav-link active" href="/home">Home</a> */}
        <NavLink to={"/home"} className="n" >Home</NavLink>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="/contact">Contact</a> */}
         <NavLink to={"/contact"} className="n" >Contact</NavLink>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="/about">About</a> */}
         <NavLink to={"/about"} className="n" >About</NavLink>
      </li>
         <li className="nav-item">
        {/* <a className="nav-link active" href="/reg">Register</a> */}
         <NavLink to={"/reg"} className="n" >Register</NavLink>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="/login">Login</a> */}
         <NavLink to={"/login"} className="n" >Login</NavLink>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="/product">Product</a> */}
         <NavLink to={"/product"} className="n" >products</NavLink>
         
      </li>
      {
        theme1 ==='Light'
        ?(
          <img src={dark}
          onClick={()=>setTheme('dark')}
          />
        )
        :(
         <img src={Light}
          onClick={()=>setTheme('Light')}
          /> 
        )
      }
      </ul>
       </div>
       
      </nav>
</header>
<main>
  <Outlet/>
</main>
    </>
    )
}

export default Nav;
