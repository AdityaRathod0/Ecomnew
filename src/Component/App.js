import { useEffect, useState } from "react";
import Cardlist from "./Cardlist";
import useApi from "../Hooks/useApi";

function App(){

    // const[products,setProducts] = useState([]);
    const[url,setUrl] = useState('http://localhost:3000/product');
    const{product:products,loading:load} = useApi(url);
    // const[cnt,setCnt] = useState(0);
    
    // useEffect(()=>{
    //  fetch(url)
    // .then((data)=>data.json())
    // .then((res)=>setProducts(res));
    // },[url])

    // useEffect(()=>{
    //  fetch('http://localhost:3000/product')
    // .then((data)=>data.json())
    // .then((res)=>setProducts(res));
    // },[cnt])

    // fetch('http://localhost:3000/product')
    // .then((data)=>data.json())
    // .then((res)=>setProducts(res));
    
    console.log(products);
    console.log("render");
    return(
        <>
        <p>Ecommerce App</p>
        {/* <button onClick={()=>setCnt(cnt+1)}>CallApi</button> */}
        <div className="btn1"> 
            <button className="btn btn-dark"
            onClick={()=>setUrl('http://localhost:3000/product')} 
            >All</button>
            <button className="btn btn-danger"
             onClick={()=>setUrl('http://localhost:3000/product?category=Laptop')} 
             >Laptop</button>
            <button className="btn btn-danger"
               onClick={()=>setUrl('http://localhost:3000/product?category=SmartPhone')} 
            >SmartPhone</button>
            <button className="btn btn-danger"
               onClick={()=>setUrl('http://localhost:3000/product?category=Watch')} 
            >Watch</button>
            <button className="btn btn-danger"
               onClick={()=>setUrl('http://localhost:3000/product?category=TVs')} 
            >TVs</button>
            <br/>
            {
                load && <div class="spinner-border text-dark"></div>
            }
        </div>
        <Cardlist products1 = {products}  />
        </>
    )
    
}


export default App;