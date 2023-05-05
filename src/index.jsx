/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";
import "./index.css";
import { UserProvider } from "../context/userContext";
import { Router } from "@solidjs/router";
import { ChatRoomProvider } from "../context/chatRoomContext";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
  );
}

render(
  () => (
    <Router>
      <UserProvider value>
        <ChatRoomProvider value>
          <App />
        </ChatRoomProvider>
      </UserProvider>
    </Router>
  ),
  root
);
