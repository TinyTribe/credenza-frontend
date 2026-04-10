'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
}

interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unread: number;
}

const STORAGE_KEY = 'credenza_chat_messages';
const CONTACTS_KEY = 'credenza_chat_contacts';

const defaultContacts: Contact[] = [
  {
    id: 'user-1',
    name: 'Mariam Ishaq',
    avatar: 'MI',
    lastMessage: 'Thanks for verifying my credentials!',
    lastMessageTime: '2026-04-11T10:30:00Z',
    unread: 2,
  },
  {
    id: 'user-2',
    name: 'Min Sung Lee',
    avatar: 'ML',
    lastMessage: 'The job posting looks great.',
    lastMessageTime: '2026-04-11T09:15:00Z',
    unread: 0,
  },
  {
    id: 'user-3',
    name: 'Patrick Crossdale',
    avatar: 'PC',
    lastMessage: 'Can we schedule a call?',
    lastMessageTime: '2026-04-10T16:45:00Z',
    unread: 1,
  },
  {
    id: 'user-4',
    name: 'Sarah Chen',
    avatar: 'SC',
    lastMessage: 'I submitted my portfolio.',
    lastMessageTime: '2026-04-10T14:20:00Z',
    unread: 0,
  },
];

const defaultMessages: Record<string, Message[]> = {
  'user-1': [
    {
      id: 'msg-1',
      senderId: 'user-1',
      text: 'Hi! I just submitted my credentials for verification.',
      timestamp: '2026-04-11T10:00:00Z',
    },
    {
      id: 'msg-2',
      senderId: 'me',
      text: 'Got it! I will review them shortly.',
      timestamp: '2026-04-11T10:15:00Z',
    },
    {
      id: 'msg-3',
      senderId: 'user-1',
      text: 'Thanks for verifying my credentials!',
      timestamp: '2026-04-11T10:30:00Z',
    },
  ],
  'user-2': [
    {
      id: 'msg-4',
      senderId: 'me',
      text: 'Hey Min, I posted a new job opening for a frontend developer.',
      timestamp: '2026-04-11T09:00:00Z',
    },
    {
      id: 'msg-5',
      senderId: 'user-2',
      text: 'The job posting looks great.',
      timestamp: '2026-04-11T09:15:00Z',
    },
  ],
  'user-3': [
    {
      id: 'msg-6',
      senderId: 'user-3',
      text: 'Can we schedule a call?',
      timestamp: '2026-04-10T16:45:00Z',
    },
  ],
  'user-4': [
    {
      id: 'msg-7',
      senderId: 'user-4',
      text: 'I submitted my portfolio.',
      timestamp: '2026-04-10T14:20:00Z',
    },
  ],
};

function getStoredMessages(): Record<string, Message[]> {
  if (typeof window === 'undefined') return defaultMessages;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultMessages;
  } catch {
    return defaultMessages;
  }
}

function getStoredContacts(): Contact[] {
  if (typeof window === 'undefined') return defaultContacts;
  try {
    const stored = localStorage.getItem(CONTACTS_KEY);
    return stored ? JSON.parse(stored) : defaultContacts;
  } catch {
    return defaultContacts;
  }
}

function formatTime(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) {
    return date.toLocaleDateString([], { weekday: 'short' });
  }
  return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
}

export default function ChatPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [messages, setMessages] = useState<Record<string, Message[]>>({});
  const [activeContactId, setActiveContactId] = useState<string | null>(null);
  const [inputText, setInputText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileChat, setShowMobileChat] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setContacts(getStoredContacts());
    setMessages(getStoredMessages());
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, activeContactId]);

  const activeContact = contacts.find((c) => c.id === activeContactId);
  const activeMessages = activeContactId ? messages[activeContactId] || [] : [];

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function handleSend() {
    if (!inputText.trim() || !activeContactId) return;

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      senderId: 'me',
      text: inputText.trim(),
      timestamp: new Date().toISOString(),
    };

    const updatedMessages = {
      ...messages,
      [activeContactId]: [...(messages[activeContactId] || []), newMessage],
    };

    const updatedContacts = contacts.map((c) =>
      c.id === activeContactId
        ? { ...c, lastMessage: newMessage.text, lastMessageTime: newMessage.timestamp, unread: 0 }
        : c
    );

    setMessages(updatedMessages);
    setContacts(updatedContacts);
    setInputText('');

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMessages));
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(updatedContacts));
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function selectContact(contactId: string) {
    setActiveContactId(contactId);
    setShowMobileChat(true);

    const updatedContacts = contacts.map((c) =>
      c.id === contactId ? { ...c, unread: 0 } : c
    );
    setContacts(updatedContacts);
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(updatedContacts));
  }

  return (
    <div className="flex h-screen bg-gray-950 text-white">
      {/* Left Panel - Contact List */}
      <div
        className={`w-full md:w-80 lg:w-96 border-r border-gray-800 flex flex-col ${
          showMobileChat ? 'hidden md:flex' : 'flex'
        }`}
      >
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-xl font-semibold mb-3">Messages</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900 text-white rounded-lg px-4 py-2 pl-10 text-sm outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            />
            <svg
              className="absolute left-3 top-2.5 w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredContacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => selectContact(contact.id)}
              className={`w-full flex items-center gap-3 p-4 hover:bg-gray-900 transition-colors text-left ${
                activeContactId === contact.id ? 'bg-gray-900' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-sm font-medium shrink-0">
                {contact.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm truncate">{contact.name}</span>
                  <span className="text-xs text-gray-500 shrink-0 ml-2">
                    {formatTime(contact.lastMessageTime)}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-0.5">
                  <span className="text-xs text-gray-400 truncate">{contact.lastMessage}</span>
                  {contact.unread > 0 && (
                    <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shrink-0 ml-2">
                      {contact.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right Panel - Chat Window */}
      <div
        className={`flex-1 flex flex-col ${
          !showMobileChat ? 'hidden md:flex' : 'flex'
        }`}
      >
        {activeContact ? (
          <>
            {/* Chat Header */}
            <div className="flex items-center gap-3 p-4 border-b border-gray-800">
              <button
                onClick={() => setShowMobileChat(false)}
                className="md:hidden text-gray-400 hover:text-white mr-1"
                aria-label="Back to contacts"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-sm font-medium">
                {activeContact.avatar}
              </div>
              <div>
                <p className="font-medium text-sm">{activeContact.name}</p>
                <p className="text-xs text-green-400">Online</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {activeMessages.map((msg) => {
                const isMe = msg.senderId === 'me';
                return (
                  <div
                    key={msg.id}
                    className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                        isMe
                          ? 'bg-blue-600 text-white rounded-br-md'
                          : 'bg-gray-800 text-gray-100 rounded-bl-md'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <p
                        className={`text-[10px] mt-1 ${
                          isMe ? 'text-blue-200' : 'text-gray-500'
                        }`}
                      >
                        {formatTime(msg.timestamp)}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-800">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-900 text-white rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputText.trim()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl p-2.5 transition-colors"
                  aria-label="Send message"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <p className="text-gray-400 text-sm">Select a conversation to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
