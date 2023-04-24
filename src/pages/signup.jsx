import { A } from '@solidjs/router';
import logo from '../assets/logo.jpg'
export default function Signup() {
  return (
    <div class="flex flex-col justify-center items-center gap-6 h-[100vh]">
      <div><img src={logo} class='h-20 w-24'/></div>
      <form className="flex flex-col gap-5 w-[20%] font-semibold text-sm text-gray-500" method=''>
        <input class="border border-gray-200 p-2 rounded-lg outline-none" type="text" placeholder="Full Name" />
        <input class="border border-gray-200 p-2 rounded-lg outline-none" type="text" placeholder="Email" />
        <input class="border border-gray-200 p-2 rounded-lg outline-none" type="text" placeholder="Phone Number" />
        <input class="border border-gray-200 p-2 rounded-lg outline-none" type="password" placeholder="Password" />
        <button type="submit" class="bg-gray-200 p-2 rounded-lg">Signup</button>
      </form>
      <div class='text-xs font-semibold text-gray-400'>
        <span>Already have an account </span><span> <A href="/login" class='text-gray-600'>Login</A></span>
      </div>
    </div>
  );
}
