import { Avatar, Button } from '@material-ui/core';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
  
function Widgets() {
  const users = [
    { name: 'Frontend Dev', user: 'frontend.dev' },
    { name: 'Eduardo Talavera', user: 'ed_talavera' },
    { name: 'The Pragmatic Coder', user: 'pracmatic.coder' }
  ];
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Buscar en Twitter" type="text"/>
      </div>

      <div className="widgets__widgetContainer">
        <h2>A quién seguir</h2>

       {
        users.map((user, i) => (
         <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1.5rem 0' }} key={i}>
           <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar size="sm" src={`https://i.pravatar.cc/100?img=${i}`} />
           <div style={{ paddingLeft: '0.5rem' }}>
             <b>{ user.name }</b>
             <div className="post__headerSpecial">@{ user.user }</div>
           </div>
          </div>
          <Button className='widgets__followButton'>Seguir</Button>
         </div>
        ))
       }

       <Button className="widgets__showMoreButton">Mostrar más</Button>
      </div>
    </div>
  )
}

export default Widgets
