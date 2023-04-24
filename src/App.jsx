import Login from './routes/login';
import { Routes, Route } from '@solidjs/router';
import ChatApp from './routes/chatApp';

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
