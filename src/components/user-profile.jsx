import { FaSolidImagePortrait } from "solid-icons/fa";
import dp from '../assets/dp.jpg'

export default function UserProfile() {
    return (
      <div class="h-full flex flex-col gap-8 px-2 md:p-4 text-md text-white">
        <div class="h-[30%] flex flex-row items-center justify-center gap-2 mt-6 text-8xl">
        <div class="rounded-full p-14 cursor-pointer"><img src={dp} class="rounded-full "/></div>
        </div>
        <div class="pt-2 px-4 h-full flex flex-col gap-3 scrollbarfeature overflow-y-scroll text-xl font-normal">
          <div class="button_highlight">
            <p class="text-xs">Your Name</p>
            <p class="p-2">User 1</p>
          </div>
          <div class="button_highlight">
            <p class="text-xs">About</p>
            <p class="p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, voluptate?</p>
          </div>
          
        </div>
      </div>
    );
  }
  