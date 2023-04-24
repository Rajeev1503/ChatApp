import { A } from '@solidjs/router';
import logo from '../assets/logo.jpg'
export default function Login() {

  function loginFormSubmitHandler(){
    
  }

  return (
    <div class="flex flex-col justify-center items-center gap-6 h-[100vh]">
      <div><img src={logo} class='h-20 w-24'/></div>
      <form className="flex flex-col gap-5 w-[20%] font-semibold text-sm text-gray-500" onSubmit={(e)=>{e.preventDefault();loginFormSubmitHandler()}}>
        <input class="border border-gray-200 p-2 rounded-lg outline-none" type="text" name='emailOrPhone' placeholder="Email or Phone Number" />
        <input class="border border-gray-200 p-2 rounded-lg outline-none" type="password" name='password' placeholder="Password" />
        <button type="submit" class="bg-gray-200 p-2 rounded-lg">Login</button>
      </form>
      <div class='text-xs font-semibold text-gray-400'>
        <span>Create new account </span><span> <A href="/signup" class='text-gray-600'>Signup</A></span>
      </div>
    </div>
  );
}
