import { useForm } from "react-hook-form";
function About(){
    const{register,handleSubmit,formState:{errors}} = useForm();

    const myonSubmit = (data)=>{
        console.log(data);
    }
    return(
    <>
    <form onSubmit={handleSubmit(myonSubmit)}>
        <input type="text" placeholder="FirstName" 
        {...register('FirstName',{required:"Can not be Blank",maxLength:{
            value:10,
            message:" Should be 10 Letters "
        }, minLength:{
            value:3,
            message:"Greater than 3"
        }})}
        />
          {errors.FirstName && <span style={{color:'red'}}>{errors.FirstName.message}</span>}
        <br/><br/>
        <input type="text" placeholder="LastName"
        {...register('LastName',{required:"Can not be blank"})}
        />
    {errors.LastName && <span style={{color:'red'}}>{errors.LastName.message}</span>}
        
        <br/><br/>
        <input type="number" placeholder="Age"
        {...register('Age',{required:"Can not be Blank",
            min:{value:18,
                message:"Minimum Age 18"
            },
            max:{value:65,
                message:"Maximun Age 65"
            }
        })}
        />
         { errors.Age && <span style={{color:'red'}}>{errors.Age.message}</span>}
        <br/><br/>

        <input type="email" placeholder="Email"
        {...register('Email')}
        /><br/><br/>
        <input type="password" placeholder="Password"
        {...register('Password',{required:"Can not be Blank",
            pattern:{
                value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:"8+ chars, uppercase, lowercase, number, special char"
            }
        })}
        />
        { errors.Password && <span style={{color:'red'}}>{errors.Password.message}</span>}
        
        <br/><br/>
        <textarea placeholder="Address"
        {...register('Address')}
        /><br/><br/>
        <select {...register('Country')} >
            <option value='USA'>USA</option>
            <option value='UK'>UK</option>
            <option value='JAPAN'>JAPAN</option>

        </select><br/><br/>
        <input
        type="checkbox"
        {...register('Subscribe')}
        /><br/><br/>

        <button>Submit</button>
    </form>
    </>
    )
}

export default About;
