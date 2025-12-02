import React, { useState } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { GrGoogle } from 'react-icons/gr'

function Login() {

    const [username,setusername]= useState('');
    const [password,setPassword]= useState('');
    const [usernameError,setUserNameError] = useState("");
     const [passwordError,setPasswordError] = useState("");

    const handleClick = ()=>{

        if(!username){
            setUserNameError('Enter your username') 
        }

        if(!password){
            setPasswordError('Enter your password')
            return;
        }else if(password.length<8){
            setPasswordError('password must be 8 charecterse')
            return;
        }

    }


  return (
    <>



    <div className='w-full bg-gren-50 min-h-screen shadow-2xl flex justify-center items-center p-4 '>

        <div className=' bg-gray-100 shadow-2xl w-full max-w-md rounded-xl p-8 '>
          

           
            
                    <h1 className='text-2xl font-serif text-center'>sign in</h1>
    
                    <div className='py-3'>
                        <input onChange={(e)=>{setusername(e.target.value);setUserNameError("")}} type="text" placeholder='username' className='border w-full h-8 rounded-2xl px-3 text-xs' />
                    </div>

                    {usernameError && (
                        <p className='text-xs text-red-600'>{usernameError}</p>
                        
                    )}
                    

    
                    <div className='py-3'>
                        <input  onChange={(e)=>{setPassword(e.target.value);setPasswordError("")}} type="text" placeholder='password' className='border w-full h-8 rounded-2xl px-3 text-xs' />
                    </div>

                     {passwordError && (
                        <p className='text-xs text-red-600'>{passwordError}</p>
                        
                    )}
                    
    
                   <div className='py-3'> <button onClick={()=>handleClick()} className='w-full h-8 border rounded-xl font-serif'>Sign in</button></div>

                   <div className="flex justify-between py-4">
                    <a className='text-green-800 underline' href="/">Back to home</a>
                <a className="text-blue-600 underline" href="#">Forgot Password</a>
            </div>

                   <p className="text-gray-500/90 text-sm mt-4 text-center">Don’t have an account? <a className="text-indigo-400 hover:underline" href="/signup">Sign up</a></p>

                  <div className='flex justify-center items-center pt-5 gap-3'>
                       <div className='bg-white w-10 h-10 rounded-full flex justify-center items-center'>
    
                        <FaFacebook color='blue' size={22}/>
    
                       </div>
                       <div className='bg-white w-10 h-10 rounded-full flex justify-center items-center'>
    
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3WvuubOyA2-L2ubr4Fp-5e-FL13ppfY0A-Q&s" alt="" className='w-7 h-7' />
    
                       </div>
                  </div>
              </div>
           

            


      



    </div>




    
    
    </>
  )
}

export default Login