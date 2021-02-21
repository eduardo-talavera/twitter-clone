import './App.css';
import Sidebar from './componets/sidebar/Sidebar';
import Taskbar from './componets/taskbar/Taskbar';
import Feed from './componets/feed/Feed';
import Widgets  from './componets/widgets/Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  
  return (
    <div className="app">
     {!user ? (
       <Login />
     ) : (
       <>
        <Sidebar />
        <Feed />
        <Widgets />
        <Taskbar />
       </>
     )}
    </div>
  );
}

export default App;
