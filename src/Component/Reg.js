import { useState } from "react";

function Reg(){
    const [err,setErr] = useState({});
    const [formdata,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        dob:'',
        phone:'',
        address:'',
        con:'',
        sub:false,
    })

    function validate10Digit(phone){
        const regex = /^\d{10}$/;
        return regex.test(phone);
    }

    const onSubmitHandler = (event)=>{
        event.preventDefault();
        setErr({});
        if(formdata.name === '' || formdata.name === null ){
            setErr({
                errName : 'Name can not be Blank'
            })
        }
          else if(formdata.email === '' || formdata.email === null ){
            setErr({
                errName1 : 'Name can not be Blank'
            })
        }
         else if(formdata.password.length <3 || formdata.password.length>=9 ){
            setErr({
                errName2 : 'Password length should be in range 3 to 9'
            })
        }
          else if(formdata.phone.length !== 10 || !validate10Digit(formdata.phone) ){
            setErr({
                errName3 : 'Phone Number Should be 10 Digit'
            })
        }
        else{
      console.log(formdata);
        }
    }
    const onChangeHandler = (event)=>{
        setFormData({
            ...formdata,
            [event.target.name]:event.target.type ==='checkbox'?event.target.checked:event.target.value //using ternary operator
        })
    }
    return(
    <>
  <h2 style={{color:'red'}}>Multiple Input Form</h2><br/>
  <form onSubmit={onSubmitHandler}>
    <input type="text"
    name="name"
    value={formdata.name}
    onChange={onChangeHandler}
     />
     {err.errName && <span style={{color:'red'}}>{err.errName}</span>}
     <br/><br/>
    <input type="email"
     name="email"
    value={formdata.email}
    onChange={onChangeHandler}
    />
    {err.errName1 && <span style={{color:'red'}}>{err.errName1}</span>}
    <br/><br/>
    <input type="password"
     name="password"
    value={formdata.password}
    onChange={onChangeHandler}
    />
    {err.errName2 && <span style={{color:'red'}}>{err.errName2}</span>}
    <br/><br/>
    <input type="date"
     name="dob"
    value={formdata.dob}
    onChange={onChangeHandler}
    /><br/><br/>
    <input type="tel"
     name="phone"
    value={formdata.phone}
    onChange={onChangeHandler}
    />
    {err.errName3 && <span style={{color:'red'}}>{err.errName3}</span>}
    <br/><br/>

    <textarea
        name="address"
        value={formdata.address}
        onChange={onChangeHandler}
        >
    </textarea><br/><br/>

    <select
    name="con"
    value={formdata.con}
    onChange={onChangeHandler}
    >
        <option value={'INDIA'}>INDIA</option>
        <option value={'UK'}>UK</option>
        <option value={'USA'}>USA</option>
        <option value={'JAPAN'}>JAPAN</option>
    </select>

    <input type="checkbox"
    name="sub"
    checked={formdata.sub}
    onChange={onChangeHandler}
    /> Subscribe

   <button>Submit</button>
  </form>
  <h2>{JSON.stringify(formdata)}</h2>
    </>
    )
}

export default Reg;
