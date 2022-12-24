import React, {useState} from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const msgDate = new Date(props.timeStamp).getFullYear();
  const today = new Date().getFullYear();
  const [likedState, setLiked] = useState(props.liked);
  const likedIcon = likedState ? '❤️' : '🤍';

  const toggleLiked = () => {
    setLiked(!likedState);
    const likedEvt = new CustomEvent('onLikeToggle', { detail: {liked: !likedState} });
    document.dispatchEvent(likedEvt);
  };

  const localSender = 'Estragon';
  const senderLocalOrRemote = props.sender === localSender ? 'local' : 'remote';


  return (
    <div className={`chat-entry ${senderLocalOrRemote}`} key="{props.id}">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{today - msgDate} years ago</p>
        <button className="like" onClick={toggleLiked}>{likedIcon}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.string,
  liked: PropTypes.bool,
};

export default ChatEntry;
