import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const ChatRoomContext = createContext();

const chatRoomInitialState = {
  chatRoom: [],
  messagesOfChatRoom: [],
  chatRoomId:null
};

export function ChatRoomProvider(props) {
  const [chatRoomStore, setChatRoomStore] = createStore(chatRoomInitialState);

  return (
    <ChatRoomContext.Provider
      value={[
        chatRoomStore,
        setChatRoomStore,
      ]}
    >
      {props.children}
    </ChatRoomContext.Provider>
  );
}

export function useChatRoomContext() {
  return useContext(ChatRoomContext);
}
