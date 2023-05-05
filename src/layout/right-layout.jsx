import { FiPhone, FiSearch, FiVideo } from "solid-icons/fi";
import { BsThreeDotsVertical } from "solid-icons/bs";
import Chat from "../components/chat";
import FriendProfile from "../components/friend-profile";
import { createSignal } from "solid-js";
import { useChatRoomContext } from "../../context/chatRoomContext";
import chatapppng from "../assets/chatapp.svg";
export default function RightLayout(props) {
  const [showFriendsProfile, setShowFriendsProfile] = createSignal(false);
  const [chatRoomStore] = useChatRoomContext();
  return (
    <div class="flex flex-col bg-[#000] h-full md:border-l border-[#1d1d1d] md:w-[60vw] lg:w-[70vw] ">
      <Show
        when={chatRoomStore.chatRoomId}
        fallback={
          <div class="h-full w-full flex flex-col gap-4 items-center justify-center text-white">
            {/* <img src={chatapppng} class="w-[30%] -ml-20" /> */}
            <div class="w-full flex flex-col items-center justify-center text-[#2d2d2d]">
              <div class="font-extrabold text-6xl ">
                Start Messaging
              </div>
            <p class="text-lg font-semibold">Send and receive messages </p>
            <p class="text-lg font-semibold">End to End encrypted </p>
            </div>
          </div>
        }
      >
        <>
          <header class="h-[8%] w-full text-white flex flex-row items-center px-4 border-b border-[#1d1d1d]">
            <div class="w-full flex justify-between px-4">
              <div
                class="cursor-pointer flex gap-3 items-center"
                onClick={() => setShowFriendsProfile(!showFriendsProfile())}
              >
                <div class="text-2xl text-black">
                  <span
                    class="rounded-full h-10 w-10 p-1 px-2"
                    style={{
                      background: `rgb(${
                        Math.floor(Math.random() * 150) + 50
                      }, ${Math.floor(Math.random() * 160) + 100},${
                        Math.floor(Math.random() * 150) + 200
                      })`,
                    }}
                  >
                    R
                  </span>
                </div>
                <div class="text-lg font-semibold flex flex-col gap-0 text-[#e7e9ea]">
                  <span>{chatRoomStore.chatRoom.chatRoomName || ""}</span>
                  <span class="text-sm text-[#6d6d6d]">@rajeev1503</span>
                </div>
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
          <div
            class={`h-[90%] relative flex flex-row ${
              showFriendsProfile() && "border-t border-[#4d4d4d]"
            }`}
          >
            <div
              class={`${
                showFriendsProfile() ? "w-[70%] h-full" : "w-full h-full"
              }`}
            >
              <Chat />
            </div>
            <div
              class={`lg:relative absolute right-0 bg-black w-[80%] lg:w-[30%] h-full border-l  border-[#4d4d4d] ${
                !showFriendsProfile() && "hidden"
              }`}
            >
              <FriendProfile
                showFriendsProfile={() => setShowFriendsProfile(false)}
              />
            </div>
          </div>
        </>
      </Show>
    </div>
  );
}
