import { useState } from "react";

function Contact(){
    const [username,setusername] = useState('');

    const onChangeHandler = (event)=>{
        setusername(event.target.value)
    }
    const onSubmitHandler = (event)=>{
        event.preventDefault();
        console.log(username);
    }
    return(
    <>
 <form onSubmit={onSubmitHandler} >
    <input type="text" 
    onChange={onChangeHandler}/>
    <button>Sumbit</button>
 </form>
    </>
    )
}

export default Contact;
