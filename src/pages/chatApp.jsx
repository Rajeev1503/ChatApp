import ChatLayout from "../layout/layout";
import LeftLayout from "../layout/left-layout";
import RightLayout from "../layout/right-layout";


export default function ChatApp(props) {
  return (
      <ChatLayout >
        <LeftLayout />
        <RightLayout />
      </ChatLayout>
  );
}
