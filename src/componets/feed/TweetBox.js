import { useState, useEffect } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from '../../firebase';
import { useStateValue } from '../../StateProvider';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');
  const [{ user }, dispatch] = useStateValue();

  const sendTweet = e => {
    e.preventDefault();

    const userName = user.displayName;
    const username = userName.split(" ");


    db.collection('posts').add({
      displayName: user.displayName,
      username: username[0].toLowerCase(),
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: user.photoURL
    })

    setTweetMessage('');
    setTweetImage('');
  }

  return <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={user.photoURL} className="tweetBox__avatar" />
          <input
            onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="¿Qué está pasando?"
            type="text"/>
        </div>
        <div className="tweetBox__footer">
          <input
            onChange={e => setTweetImage(e.target.value)}
            value={tweetImage}
            className="tweetBox__imageInput"
            placeholder="Ingresa una URL de una imagen (opcional)"
            type="text"
          />
          <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButon" disabled={ tweetMessage.length ? false : true } >Twittear</Button>
        </div>
      </form>
    </div>;
  
}

export default TweetBox
