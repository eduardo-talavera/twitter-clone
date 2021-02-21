import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';


function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter icon */}
      <TwitterIcon className="sidebar__twitterIcon" />

      {/* Sidebar options */}
      <SidebarOption active Icon={HomeIcon} text="Inicio" />
      <SidebarOption Icon={SearchIcon} text="Explorar" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notificaciones" />
      <SidebarOption Icon={MailOutlineIcon} text="Mensajes" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Guardados" />
      <SidebarOption Icon={ListAltIcon} text="Listas" />
      <SidebarOption Icon={PermIdentityIcon} text="Perfil" />
      <SidebarOption Icon={MoreHorizIcon} text="Más opciones" />
  

      {/* Button tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth >Twittear</Button>
      <Fab className="sidebar__tweet_movil"  color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  )
}

export default Sidebar
