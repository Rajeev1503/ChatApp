import Login from './routes/login';
import { Routes, Route } from '@solidjs/router';
import ChatApp from './routes/chatApp';

function App() {
  return (
    <Routes>
        <Route path='/app' component={<ChatApp />}/>
        <Route path='/login' component={<Login />}/>
    </Routes>
  );
}

export default App;
