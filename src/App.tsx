import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './Chat';
import { Message } from './types';
import UserMessage from './UserMessage';

function App() {

  const [conversation, setConversation] = useState<Message[]>([
    { side: 'start', text: 'You were the Chosen One!' },
    { side: 'end', text: 'I hate you!' },
    { side: 'start', text: 'You were the Chosen One!' },
    { side: 'end', text: 'I hate you!' },
  ]);

  const addMessage = (message: string) => {
    setConversation([...conversation, 
      { side: 'end', text: message }]);
  }

  useEffect(() => {
    if (conversation.length > 0) {
      const lastMessage = conversation[conversation.length - 1];
      if (lastMessage.side === 'end') {
        setConversation([...conversation, { side: 'start', text: "Reply" }]);
      }
    }
  }, [conversation])


  return (
    <div className="App h-screen">
      <div className='flex flex-col-reverse h-[600px] w-[400px]'>
        <div className="grow-0">
          <UserMessage onChange={addMessage} />
        </div>
        <div className='grow'>
          <Chat conversation={conversation} />
        </div>
      </div>
    </div>
  );
}

export default App;
