import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockMessages } from '../mockData';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Send, ArrowLeft } from 'lucide-react';

const Messages = ({ isAuthenticated }) => {
  const [conversations, setConversations] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      setConversations(mockMessages);
    }
  }, [isAuthenticated]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add message to conversation
    const updatedConversations = conversations.map(conv => {
      if (conv.id === selectedChat?.id) {
        return {
          ...conv,
          messages: [
            ...conv.messages,
            { sender: 'me', text: newMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
          ],
          lastMessage: newMessage,
          timestamp: 'Just now'
        };
      }
      return conv;
    });

    setConversations(updatedConversations);
    setSelectedChat(updatedConversations.find(c => c.id === selectedChat?.id));
    setNewMessage('');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Login Required</h2>
          <p className="text-gray-600 mb-6">Please login to view your messages</p>
          <Link to="/login">
            <Button className="bg-teal-600 hover:bg-teal-700">Go to Login</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 h-[calc(100vh-4rem)]">
          {/* Conversations List */}
          <div className={`bg-white border-r overflow-y-auto ${selectedChat ? 'hidden md:block' : 'block'}`}>
            <div className="p-4 border-b">
              <h2 className="text-xl font-bold">Messages</h2>
            </div>
            
            {conversations.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <p>No messages yet</p>
              </div>
            ) : (
              <div>
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedChat(conv)}
                    className={`w-full p-4 border-b hover:bg-gray-50 transition-colors text-left ${
                      selectedChat?.id === conv.id ? 'bg-teal-50' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={conv.productImage}
                        alt={conv.productTitle}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-sm truncate">{conv.otherUser}</h3>
                          {conv.unread && (
                            <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 truncate mb-1">{conv.productTitle}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-gray-500 truncate">{conv.lastMessage}</p>
                          <span className="text-xs text-gray-400">{conv.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Chat Window */}
          <div className={`md:col-span-2 bg-gray-50 flex flex-col ${selectedChat ? 'block' : 'hidden md:flex'}`}>
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="bg-white border-b p-4 flex items-center space-x-3">
                  <button
                    onClick={() => setSelectedChat(null)}
                    className="md:hidden text-gray-600"
                  >
                    <ArrowLeft size={24} />
                  </button>
                  <img
                    src={selectedChat.productImage}
                    alt={selectedChat.productTitle}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{selectedChat.otherUser}</h3>
                    <p className="text-sm text-gray-600 truncate">{selectedChat.productTitle}</p>
                  </div>
                  <Link to={`/product/${selectedChat.productId}`}>
                    <Button variant="outline" size="sm">View Product</Button>
                  </Link>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {selectedChat.messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl ${
                          msg.sender === 'me'
                            ? 'bg-teal-600 text-white'
                            : 'bg-white border'
                        }`}
                      >
                        <p>{msg.text}</p>
                        <p className={`text-xs mt-1 ${
                          msg.sender === 'me' ? 'text-teal-100' : 'text-gray-500'
                        }`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <form onSubmit={handleSendMessage} className="bg-white border-t p-4">
                  <div className="flex items-center space-x-2">
                    <Input
                      type="text"
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
                      <Send size={20} />
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                <p>Select a conversation to start messaging</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;