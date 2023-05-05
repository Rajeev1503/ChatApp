import { createContext, createSignal, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const UserContext = createContext();

const initialUserData = {
  isLoggedIn: false,
  isCreatorOfRoomId: false,
  userId: null,
  allChatRooms:[{chatRoom:{}, lastMessage:''}],
};

export function UserProvider(props) {
  const [userStore, setUserStore] = createStore(initialUserData);

  return (
    <UserContext.Provider value={[userStore,setUserStore]}>
      {props.children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
