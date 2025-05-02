"use client";

import { createContext, useState, useContext } from 'react';

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [selectedChatId, setSelectedChatId] = useState(null);

  return (
    <ChatContext.Provider value={{ selectedChatId, setSelectedChatId }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}