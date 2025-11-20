import { useContext } from "react";
import { Themecontext } from "../Context/Themecontext";


function Home(){
    const {theme:data} =useContext(Themecontext);
    console.log(data);
    return(
    <>
    <p>This is Home Components</p>
    </>
    )
}

export default Home;
