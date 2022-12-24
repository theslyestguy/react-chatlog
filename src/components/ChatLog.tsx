import React from 'react';
import './ChatLog.css';
import ChatEntry, { Props as ChatEntryProps } from './ChatEntry';

type Props = {
  entries: ChatEntryProps[]
};

const ChatLog = ({entries}: Props) => {
  const chatEntries = entries.map(entry => {
    return (
      <ChatEntry key={entry.id}
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}/>
    );
  });

  return (
    <div className="chat-log" key="chatLog1">
      {chatEntries}
    </div>
  );
};

export default ChatLog;
