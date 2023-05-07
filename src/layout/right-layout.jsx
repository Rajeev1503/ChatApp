import { FiPhone, FiPlus, FiSearch, FiVideo } from "solid-icons/fi";
import { BsThreeDotsVertical } from "solid-icons/bs";
import Chat from "../components/chat";
import FriendProfile from "../components/friend-profile";
import { createSignal } from "solid-js";
import { useChatRoomContext } from "../../context/chatRoomContext";
import chatapppng from "../assets/chatapp.svg";
import serverUrl from "../../config/server_url";
import { createStore } from "solid-js/store";
import AddFriend from "../components/modal/add-friend";
export default function RightLayout(props) {
  const [showFriendsProfile, setShowFriendsProfile] = createSignal(false);
  const [chatRoomStore] = useChatRoomContext();
  const [openInputBox, setOpenInputBox] = createSignal(false);
  const [foundUsers, setFoundUsers] = createStore([]);
  const [addFriendModal, setAddFriendModal] = createSignal(false);
  const [searchInputValue, setSearchInputValue] = createSignal(false);

  const addMemberHandler = async () => {
    if (!searchInputValue()) {
      return setFoundUsers([]);
    }
    try {
      setAddFriendModal(true);
      const response = await fetch(`${serverUrl}/user/searchUsers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchValue: searchInputValue() }),
      });
      let result = await response.json();
      if (!result.success) return console.log("error in result");

      result = result.data.userModels;
      console.log(result);
      setFoundUsers([]);
      result.map((user) => {
        return setFoundUsers([
          ...foundUsers,
          { userName: user.userName, fullname: user.fullName },
        ]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="flex flex-col bg-[#000] h-full md:border-l border-[#1d1d1d] md:w-[60vw] lg:w-[70vw] ">
      <Show
        when={chatRoomStore.chatRoomId}
        fallback={
          <div class="h-full w-full flex flex-col gap-4 items-center justify-center text-white">
            {/* <img src={chatapppng} class="w-[30%] -ml-20" /> */}
            <div class="w-full flex flex-col items-center justify-center text-[#2d2d2d]">
              <div class="font-extrabold text-6xl ">Start Messaging</div>
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
              <div class="text-white flex gap-6 items-center text-xl">
                <div class="relative">
                  {chatRoomStore.chatRoom.isGroup && (
                    <div class="relative flex flex-row items-center justify-end rounded-full p-1 cursor-pointer">
                      <FiPlus
                        class={`z-10 ${
                          openInputBox() ? "rotate-[135deg]" : " rotate-0"
                        } transition-all duration-300`}
                        onClick={() => {
                          setAddFriendModal(false);
                          setOpenInputBox(!openInputBox());
                        }}
                      />

                      <div
                        class={`flex flex-col justify-start absolute right-10 transition-all duration-300 ${
                          openInputBox() ? "w-96" : "w-0"
                        }`}
                      >
                        <input
                          class={`${
                            openInputBox() ? "" : "border-none cursor-default"
                          }`}
                          placeholder="Username or email"
                          onInput={(e) => {
                            setSearchInputValue(e.target.value);
                            addMemberHandler();
                          }}
                        />

                        {addFriendModal() &&
                          searchInputValue() &&
                          openInputBox() && (
                            <div class="absolute top-10 bg-black rounded-3xl border-2 border-[#1d1d1d] z-50 transition-all duration-1000">
                              <div
                                class={`${
                                  addFriendModal() ? "w-96" : "w-0"
                                } transition-all duration-1000`}
                              >
                                <AddFriend
                                  props={{ setAddFriendModal, foundUsers }}
                                />
                              </div>
                            </div>
                          )}
                      </div>
                    </div>
                  )}
                </div>
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
