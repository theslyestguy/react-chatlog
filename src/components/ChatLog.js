import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries}) => {
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
    <div className="chat-log">
      {chatEntries}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timestamp: PropTypes.string,
      liked: PropTypes.bool,
    }).isRequired
  ).isRequired,
};

export default ChatLog;
