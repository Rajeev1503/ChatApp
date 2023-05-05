import { createEffect, onMount } from "solid-js";
import { ChatRoomProvider } from "../../context/chatRoomContext";
import ChatLayout from "../layout/layout";
import LeftLayout from "../layout/left-layout";
import RightLayout from "../layout/right-layout";
import { useUserContext } from "../../context/userContext";
import { A, useNavigate } from "@solidjs/router";
import Login from "./login";

export default function ChatApp() {
  const navigate = useNavigate();
  const [ userStore, setUserStore ] = useUserContext();

  onMount(() => {
    if (!userStore.isLoggedIn) {
      navigate('/login',{replace:true})
    }
});

  return (
      <ChatLayout>
        <LeftLayout />
        <RightLayout />
      </ChatLayout>
  );
}
