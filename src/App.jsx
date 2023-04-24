import Login from './pages/login';
import { Routes, Route } from '@solidjs/router';
import Signup from './pages/signup';
import ChatApp from './pages/chatApp';

function App() {
  return (
    <div>
    <Routes>
        <Route path='/app' component={<ChatApp />}/>
        <Route path='/login' component={<Login />}/>
    </Routes>
    </div>
  );
}

export default App;
