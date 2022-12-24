import React, {useState} from 'react';
import './ChatEntry.css';

export type Props = {
  id: number,
  sender: string,
  body: string,
  timeStamp: string,
  liked: boolean,
};

const ChatEntry = (props: Props) => {
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
    <div className={`chat-entry ${senderLocalOrRemote}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{today - msgDate} years ago</p>
        <button className="like" onClick={toggleLiked}>{likedIcon}</button>
      </section>
    </div>
  );
};

export default ChatEntry;
