import './Taskbar.css';
// import TwitterIcon from '@material-ui/icons/Twitter';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import TaskbarOption from './TaskbarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


function Taskbar() {
  return (
    <div className="taskbar">
      <TaskbarOption active Icon={HomeIcon} />
      <TaskbarOption Icon={SearchIcon} />
      <TaskbarOption Icon={NotificationsNoneIcon} />
      <TaskbarOption Icon={MailOutlineIcon} />

      <Fab size="large" className="taskbar__tweet" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  )
}

export default Taskbar;
