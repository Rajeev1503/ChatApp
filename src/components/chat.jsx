import { FiSend } from "solid-icons/fi";
import { BsCheckAll } from "solid-icons/bs";
import RightLayout from "../layout/right-layout";
import { useChatRoomContext } from "../../context/chatRoomContext";
import { useUserContext } from "../../context/userContext";
import { createEffect, createSignal, onMount } from "solid-js";
import serverUrl from "../../config/server_url";

export default function Chat() {
  const [chatRoomStore, setChatRoomStore] = useChatRoomContext();
  const [userStore, setUserStore] = useUserContext();
  const [messageInput, setMessageInput] = createSignal("");
  const [errorMessage, setErrorMessage] = createSignal("");

  let messageBottomScrollDiv;

  createEffect(() => {
    if ([chatRoomStore.messagesOfChatRoom.length]) {
      messageBottomScrollDiv.scrollTop =
        messageBottomScrollDiv.scrollHeight -
        messageBottomScrollDiv.clientHeight;
    }
    0;
  });

  function setMessageTimeFormat(messageDateAndTime) {
    const inTime = messageDateAndTime.split("T")[1].split("+" || ".")[0];
    const splitTime = inTime.split(":");
    splitTime.pop();
    splitTime[0] = 1;
    if (splitTime[0] >= 12) {
      splitTime[0] = 24 - splitTime[0];
      let joinedTime = splitTime.join(":").split(" ");
      joinedTime.push("PM");
      joinedTime = joinedTime.join(" ");
      return joinedTime;
    } else {
      let joinedTime = splitTime.join(":").split(" ");
      joinedTime.push("AM");
      joinedTime = joinedTime.join(" ");
      return joinedTime;
    }
  }

  async function createMessagehandler() {
    if (messageInput().length == 0) {
      setErrorMessage("Empty message box");
      return;
    }
    setErrorMessage("");
    let dateAndTime = "";
    (function () {
      const d = new Date();

      let diff = d.getTimezoneOffset();
      return (dateAndTime = d.toISOString());
    })();

    const messageData = {
      userId: {
        id: userStore.userId,
      },
      message: messageInput(),
      dateAndTime: dateAndTime,
    };

    setChatRoomStore("messagesOfChatRoom", [
      ...chatRoomStore.messagesOfChatRoom,
      messageData,
    ]);

    setMessageInput("");
    const response = await fetch(
      `${serverUrl}/chatMessage/createChatMessage/${chatRoomStore.chatRoom.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      }
    );
    const messageResponse = await response.json();
    if (messageResponse.success) {
      userStore.allChatRooms.map((allChatRooms, i) => {
        if (allChatRooms.chatRoom.id == chatRoomStore.chatRoom.id) {
          return setUserStore("allChatRooms", [i], {
            lastMessage: {
              message: messageResponse.data.createChatMessage.message,
              date: dateAndTime,
            },
          });
        }
        return;
      });
    }
    return messageResponse;
  }

  return (
    <>
      <div
        class="relative h-[88%] w-[100%] lg:w-[80%] p-6 m-auto rounded-lg overflow-y-scroll scrollbarfeature hideScrollBar"
        ref={messageBottomScrollDiv}
      >
        <div class="fixed text-white left-[61%] top-[10.2%] text-xs font-semibold bg-[#1d1d1d] rounded-lg p-1 px-4">
          <span>Today</span>
        </div>
        <div class="relative flex flex-col h-full w-full text-white">
          <Show
            when={chatRoomStore.messagesOfChatRoom.length !== 0}
            fallback={<div>No messages</div>}
          >
            <For each={chatRoomStore.messagesOfChatRoom}>
              {(message, i) => (
                <>
                  {message.userId.id !== userStore.userId && (
                    <div
                      key={i}
                      class={`relative bottom-0 w-full flex flex-row justify-start text-white`}
                    >
                      <div class="max-w-max flex flex-row gap-2 bg-[#1d1d1d] rounded-lg my-2 py-1 px-4 ">
                        <div class="text-[0.95rem]">
                          <div>{message.message}</div>
                        </div>
                        <div class="flex gap-2 min-w-max">
                          <div class="text-[0.65rem] self-end text-white text-opacity-70 text-right">
                            {setMessageTimeFormat(message.dateAndTime)}
                          </div>
                          <div class="self-end text-white text-opacity-70">
                            <BsCheckAll />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {message.userId.id == userStore.userId && (
                    <div
                      key={i}
                      class={`relative bottom-0 full flex flex-row justify-end text-white float-right clear-left `}
                    >
                      <div
                        class="max-w-max flex flex-row gap-2 bg-[#c13131] rounded-lg my-2 py-1 px-4 "
                        style={{
                          background: `
                          rgb(${Math.floor(Math.random() * 150) + 10}, ${
                            Math.floor(Math.random() * 160) + 10
                          },${Math.floor(Math.random() * 250) + 200})`,
                        }}
                      >
                        <div class="text-[0.95rem]">
                          <div>{message.message}</div>
                        </div>
                        <div class="flex gap-2 min-w-max">
                          <div class="text-[0.65rem] self-end text-white text-opacity-70 text-right">
                            {setMessageTimeFormat(message.dateAndTime)}
                          </div>
                          <div class="self-end text-white text-opacity-70">
                            <BsCheckAll />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </For>
          </Show>
        </div>
      </div>
      <div class={`h-[12%] w-[80%] m-auto flex items-center`}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createMessagehandler();
          }}
          class="text-white font-normal w-full h-1/2 flex justify-between gap-2"
        >
          <input
            type="text"
            placeholder={`${
              errorMessage().length > 0
                ? errorMessage()
                : "Press enter or click on send button"
            } `}
            class={`${
              errorMessage().length > 0 &&
              "placeholder:text-red-500 focus:placeholder:text-red-500"
            } px-4 w-full rounded-3xl border-2 border-[#4d4d4d] outline-none bg-transparent caret-white placeholder:text-[#bbb] focus:placeholder:text-[#999]`}
            onChange={(e) => setMessageInput(e.target.value)}
            value={messageInput()}
          />
          <button
            type="submit"
            class={`flex gap-1 items-center rounded-3xl px-4 bg-[#fff] text-black font-semibold`}
          >
            Send
            <FiSend />
          </button>
        </form>
      </div>
    </>
  );
}
