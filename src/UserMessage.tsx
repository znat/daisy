import React, { useState } from 'react';

interface Props {
  onChange: Function;
}
const UserMessage: React.FC<Props> = ({ onChange }: Props) => {

  const [message, setMessage] = useState<string>('');

  const handleKeyDown = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      onChange(message);
    }
  }

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    if (event.target.value.length) {
      setMessage(event.target.value);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full bg-neutral rounded-none"
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown} />
    </>
  );
}

export default UserMessage;
