import { createSignal, onMount } from "solid-js";
import ChatLayout from "./layout/layout";
import LeftLayout from "./layout/left-layout";
import RightLayout from "./layout/right-layout";
import { ChatRoomProvider } from "../context/chatRoomContext";
import { UserProvider, useUserContext } from "../context/userContext";
import Login from "./routes/login";
import { Route, Routes, useLocation, useNavigate } from "@solidjs/router";
import ChatApp from "./routes/chatApp";

function App() {
  // const [chatRoom, setChatRoom] = createSignal();
  const [userStore, setUserStore] = useUserContext();
  const navigate = useNavigate()
  const location = useLocation();

  onMount(()=>{
    if(location.pathname == '/login'){
      if (userStore.isLoggedIn) {
        navigate('/',{replace:true});
      }
      return
    }
    else if(location.pathname == '/'){
      if(!userStore.isLoggedIn){
        navigate('/login',{replace:true})
      }
    return 
  }
})

  return (
    <Routes>
      <Route path="/" component={ChatApp} />
      <Route path="/login" component={Login} />
    </Routes>
  );
}

export default App;
