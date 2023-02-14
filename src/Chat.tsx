import React, { useEffect } from 'react';
import { Message } from './types';

interface Props {
  conversation: Message[];
}
const Chat: React.FC<Props> =  ({conversation}: Props) => {
  const handleScroll = (index: number) => {
    const element = document.getElementById(`bubble-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    handleScroll(conversation.length - 1);
  }, [conversation]);
  return (
    <div className='overflow-auto w-full'>
      {
        conversation.map((message: Message, index: number) => {
          return (
            <div id={`bubble-${index}`}className={`chat chat-${message.side}`} key={index}>
              <div className='chat-bubble'>{message.text}</div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Chat;
