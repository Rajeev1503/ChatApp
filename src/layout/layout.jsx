export default function ChatLayout(props) {
  return (
    <div class="flex flex-row" style={{height:"100vh", width:"100vw"}}>
      {props.children}
    </div>
  );
}
