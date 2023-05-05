import { createResource, createSignal, onCleanup, onMount } from "solid-js";
import { useChatRoomContext } from "../../context/chatRoomContext";
import { useUserContext } from "../../context/userContext";
import { createStore } from "solid-js/store";

export default function AllChats() {
  const [chatRoomStore, setChatRoomStore] = useChatRoomContext();
  const [userStore, setUserStore] = useUserContext();

  onMount(() => {
    if (userStore.userId == null) {
      return;
    }
    getAllChatRooms();
  });
  onCleanup(() => {
    return;
  });

  async function getAllChatRooms() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_NODE_ENV == "PRODUCTION" ? 'https://chat-app-server-sigma.vercel.app' : 'http://localhost:5001'}/user/${userStore.userId}/allchatrooms``,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      if (result) setUserStore("allChatRooms", []);
      const chatRooms = result.data.userModel.chatRooms;
      const joinedChatRooms = result.data.userModel.joinedChatRooms;
      chatRooms.length > 0 &&
        chatRooms.map((chatRoom) => {
          setUserStore("allChatRooms", userStore.allChatRooms.length, {
            chatRoom: chatRoom,
            lastMessage: chatRoom.chatMessages.at(-1).message,
          });
        });
      joinedChatRooms.length > 0 &&
        joinedChatRooms.map((joinedChatRoom) => {
          setUserStore("allChatRooms", userStore.allChatRooms.length, {
            chatRoom: joinedChatRoom,
            lastMessage: joinedChatRoom.chatMessages.at(-1).message,
          });
        });
      return;
    } catch (error) {
      console.log(error);
    }
  }

  async function getChatRoom(chatRoomId) {
    try {
      // let result;
      // userStore.allChatRooms.map((chatRoom) => {
      //   if (chatRoom.chatRoom.id == chatRoomId) {
      //     return (result = chatRoom.chatRoom);
      //   }
      // });
      // console.log(result)
      // ${import.meta.env.VITE_PRODUCTION_URL}
      console.log(import.meta.env.VITE_NODE_ENV)
        const response = await fetch(
          `${import.meta.env.VITE_NODE_ENV == "PRODUCTION" ? 'https://chat-app-server-sigma.vercel.app' : 'http://localhost:5001'}/chatroom/${chatRoomId}`,
          {
            method: "GET",
          }
        );
        const result = await response.json();
      result && setChatRoomStore("messagesOfChatRoom", []);
      setChatRoomStore("chatRoom", result.data.chatRoom);
      setChatRoomStore("chatRoomId", chatRoomId);
      result.data.chatRoom.chatMessages.map((message) => {
        return setChatRoomStore("messagesOfChatRoom", [
          ...chatRoomStore.messagesOfChatRoom,
          message,
        ]);
      });
      return;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div class="h-full flex flex-col gap-4 text-xs lg:pl-6 p-2 lg:p-4">
      <div class="h-full flex flex-col gap-4">
        <div class="flex flex-row gap-2 my-4">
          <input
            class={`p-3 text-white outline-none flex-grow min-w-max rounded-3xl bg-transparent border-2 border-[#4d4d4d] px-4 text-sm caret-white placeholder:text-[#4d4d4d] focus:placeholder:text-[#2d2d2d]`}
            placeholder="Search Messages"
          />
        </div>
        <div class="h-full px-0 xl:px-3 flex flex-col gap-3 scrollbarfeature hideScrollBar overflow-y-scroll">
          <For each={userStore.allChatRooms}>
            {(allChatRoom, i) => (
              <div
                onClick={() => {
                  getChatRoom(allChatRoom.chatRoom.id);
                }}
                class="button_highlight"
              >
                <div class="flex flex-row items-center gap-4 font-semibold text-sm">
                  <span
                    class={`rounded-full text-3xl w-10 h-10 text-transparent`}
                    style={{
                      background: `rgb(${
                        Math.floor(Math.random() * 150) + 50
                      }, ${Math.floor(Math.random() * 160) + 100},${
                        Math.floor(Math.random() * 250) + 200
                      })`,
                    }}
                  ></span>
                  <div class="flex-grow max-w-full flex flex-row justify-between items-center">
                    <div class="flex flex-col gap-1">
                      <span>{allChatRoom.chatRoom.chatRoomName}</span>
                      <span class="text-[#6d6d6d] text-xs">
                        {allChatRoom.lastMessage}
                      </span>
                    </div>
                    <span class="text-[#3d3d3d] text-[0.6rem]">Yesterday</span>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
}
