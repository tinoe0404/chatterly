import { useEffect, useRef } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import NoChatHistoryPlaceholder from "./NoChatHistoryPlaceholder";
import MessageInput from "./MessageInput";
import MessagesLoadingSkeleton from "./MessagesLoadingSkeleton";

function ChatContainer() {
  const {
    selectedUser,
    getMessagesByUserId,
    messages,
    isMessagesLoading,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (!selectedUser) return;

    getMessagesByUserId(selectedUser._id);
    subscribeToMessages();

    return () => unsubscribeFromMessages();
  }, [selectedUser, getMessagesByUserId, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    // ✅ Changed fragment <> </> to a full div with flex layout and full height/width
    // This ensures the container grows to fill the screen and is responsive
    <div className="flex flex-col h-full w-full">
      <ChatHeader />

      {/* ✅ Responsive padding added with sm: breakpoints */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6">
        {isMessagesLoading ? (
          <MessagesLoadingSkeleton />
        ) : messages.length > 0 ? (
          // ✅ max width and centering to make chat look good on all screens
          <div className="flex flex-col max-w-3xl mx-auto space-y-4">
            {messages.map((msg) => (
              // ✅ Replaced chat-start/chat-end classes with flex + justify-start/end for better responsiveness
              <div
                key={msg._id}
                className={`flex ${
                  msg.senderId === authUser._id ? "justify-end" : "justify-start"
                }`}
              >
                {/* ✅ Added padding and rounded corners for responsive bubble */}
                {/* ✅ Set max-width for responsiveness: 80% on mobile, 60% on larger screens */}
                <div
                  className={`chat-bubble relative p-3 rounded-xl max-w-[80%] sm:max-w-[60%] ${
                    msg.senderId === authUser._id
                      ? "bg-cyan-600 text-white"
                      : "bg-slate-800 text-slate-200"
                  }`}
                >
                  {msg.image && (
                    // ✅ Added w-full so images fill bubble width on mobile
                    // ✅ Added mt-2 for spacing
                    <img
                      src={msg.image}
                      alt="Shared"
                      className="rounded-lg h-48 w-full object-cover mt-2"
                    />
                  )}
                  {msg.text && (
                    // ✅ Added break-words to prevent long text overflow on small screens
                    <p className="mt-2 break-words">{msg.text}</p>
                  )}
                  <p className="text-xs mt-1 opacity-75 flex items-center justify-end gap-1">
                    {/* ✅ Added justify-end to align timestamp to right of bubble */}
                    {new Date(msg.createdAt).toLocaleTimeString(undefined, {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            {/* 👇 scroll target */}
            <div ref={messageEndRef} />
          </div>
        ) : (
          <NoChatHistoryPlaceholder name={selectedUser.fullName} />
        )}
      </div>

      {/* ✅ Wrapped MessageInput in a div with responsive padding */}
      <div className="px-4 sm:px-6 py-2 sm:py-4">
        <MessageInput />
      </div>
    </div>
  );
}

export default ChatContainer;
