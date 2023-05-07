import { onCleanup, onMount } from "solid-js";
import { useChatRoomContext } from "../../context/chatRoomContext";
import { useUserContext } from "../../context/userContext";
import { produce } from "solid-js/store";
import serverUrl from "../../config/server_url";
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
        `${serverUrl}/user/${userStore.userId}/allchatrooms`,
        {
          method: "GET",
        }
      );
      const result = await response.json();

      if (result) setUserStore("allChatRooms", []);
      const chatRooms = result.data.userModel.chatRooms;
      // console.log(chatRooms)
      const joinedChatRooms = result.data.userModel.joinedChatRooms;
      chatRooms.length > 0 &&
        chatRooms.map((chatRoom) => {
          setUserStore("allChatRooms", userStore.allChatRooms.length, {
            chatRoom: chatRoom,
            lastMessage: {
              message:
                chatRoom.chatMessages.length > 0 &&
                chatRoom.chatMessages.at(-1).message,
              date:
                chatRoom.chatMessages.length > 0 &&
                chatRoom.chatMessages.at(-1).createdAt,
            },
          });
        });
      joinedChatRooms.length > 0 &&
        joinedChatRooms.map((joinedChatRoom) => {
          setUserStore("allChatRooms", userStore.allChatRooms.length, {
            chatRoom: joinedChatRoom,
            lastMessage: {
              message:
                joinedChatRoom.chatMessages.length > 0 &&
                joinedChatRoom.chatMessages.at(-1).message,
              date:
                joinedChatRoom.chatMessages.length > 0 &&
                joinedChatRoom.chatMessages.at(-1).createdAt,
            },
          });
        });

      return;
    } catch (error) {
      console.log(error);
    }
  }

  async function getChatRoom(chatRoomId) {
    try {
      const response = await fetch(`${serverUrl}/chatroom/${chatRoomId}`, {
        method: "GET",
      });
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
        <div class="my-4">
          <input class={``} placeholder="Search Messages" />
        </div>
        <div class="h-full px-0 xl:px-3 flex flex-col gap-3 scrollbarfeature hideScrollBar overflow-y-scroll">
          <For
            each={Object.entries(userStore.allChatRooms).sort((a, b) => {
              const d1 = new Date(b[1].lastMessage.date);
              const d2 = new Date(a[1].lastMessage.date);
              return d1 - d2;
            })}
          >
            {(allChatRoom, i) => (
              <div
                onClick={() => {
                  getChatRoom(allChatRoom[1].chatRoom.id);
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
                      <span>{allChatRoom[1].chatRoom.chatRoomName}</span>
                      <span class="text-[#6d6d6d] text-xs">
                        {allChatRoom[1].lastMessage.message}
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
