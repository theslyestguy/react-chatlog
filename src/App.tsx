import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [likedCount, setLikedCount] = useState(0);

  document.addEventListener('onLikeToggle', ((evt: CustomEvent) => {
    evt.stopPropagation();
    evt.detail.liked ? setLikedCount(likedCount + 1) : setLikedCount(likedCount - 1);
  }) as EventListener);

  return (
    <div id="App">
      <header>
        <h1>Chitter Chatter</h1>
        <h2>{likedCount} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatMessages}/>
      </main>
    </div>
  );
};

export default App;
