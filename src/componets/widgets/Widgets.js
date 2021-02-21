import './Widgets.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';
  
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Buscar en Twitter" type="text"/>
      </div>

      <div className="widgets__widgetContainer">
        <h2>Qué está pasando</h2>

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ed_talavera"
          options={{height: 500}}
        />
      
      </div>
    </div>
  )
}

export default Widgets
