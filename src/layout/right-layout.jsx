import { FiPhone, FiSearch, FiVideo } from "solid-icons/fi";
import { BsThreeDotsVertical } from "solid-icons/bs";
import { FaSolidImagePortrait } from "solid-icons/fa";
import Chat from "../components/chat";
import FriendProfile from "../components/friend-profile";
import { createSignal } from "solid-js";

export default function RightLayout(props) {
  const [showFriendsProfile, setShowFriendsProfile] = createSignal(false);

  return (
    <div
      class="flex flex-col bg-[#000] h-full md:border-l border-[#1d1d1d]"
      style={{ width: "70vw" }}
    >
      <header class="h-[10%] w-full text-white flex flex-row items-center px-4 border-b border-[#1d1d1d]">
        <div class="w-full flex justify-between px-4">
          <div class="cursor-pointer flex gap-3 items-center" onClick={()=>setShowFriendsProfile(!showFriendsProfile())}>
            <div class="text-2xl text-black" >
              <span class="rounded-full h-10 w-10 p-1 px-2" style={{
                  background: `rgb(${
                    Math.floor(Math.random() * 150) + 50
                  }, ${Math.floor(Math.random() * 160) + 100},${
                    Math.floor(Math.random() * 150) + 200
                  })`,
                }}>R</span>
            </div>
            <div class="text-lg font-semibold flex flex-col gap-0 text-[#e7e9ea]"><span>Rajeev</span><span class="text-sm text-[#6d6d6d]">@rajeev1503</span></div>
          </div>
          <div class="flex gap-6 items-center text-xl">
            <div>
              <FiPhone />
            </div>
            <div>
              <FiVideo />
            </div>
            <div>
              <FiSearch />
            </div>
            <div>
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>
      </header>
      <div class={`h-[90%] flex flex-row ${showFriendsProfile()&& 'border-t border-[#4d4d4d]'}`}>
        <div class={`${showFriendsProfile() ? "w-[70%] h-full" : "w-full h-full"}`}>
          <Chat />
        </div>
        <div class={`w-[30%] border-l  border-[#4d4d4d] ${!showFriendsProfile() && "hidden"}`}>
          <FriendProfile showFriendsProfile={()=>setShowFriendsProfile(false)}/>
        </div>
      </div>
    </div>
  );
}
