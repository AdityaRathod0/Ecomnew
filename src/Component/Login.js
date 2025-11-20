import { useSearchParams } from "react-router-dom";

function Login(){
    const[searchParam,setsearchParam] = useSearchParams();
    console.log(searchParam.get('name'));
    console.log(searchParam.get('email'));
    return(
    <>
    <p>{searchParam.get('name')}</p>
    <p>{searchParam.get('email')}</p>
    <button onClick={()=>{
        setsearchParam({name:'Aditya',email:searchParam.get('email')})
    }}
    >Change!</button>
    </>
    )
}

export default Login;
