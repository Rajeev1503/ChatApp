import ChatLayout from "./layout/layout";
import LeftLayout from "./layout/left-layout";
import RightLayout from "./layout/right-layout";

function App() {
  return (
    <ChatLayout>
      <LeftLayout />
      <RightLayout />
    </ChatLayout>
  );
}

export default App;
