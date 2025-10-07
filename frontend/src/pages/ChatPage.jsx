import { useChatStore } from "../store/useChatStore";

import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatsList from "../components/ChatsList";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";

function ChatPage() {
  const { activeTab, selectedUser } = useChatStore();

  return (
    <div className="relative w-full max-w-6xl h-[800px] mx-auto flex flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div
        className={`
          w-full md:w-80 bg-slate-800/50 backdrop-blur-sm flex flex-col
          transition-all duration-300
          ${selectedUser ? "hidden" : "flex"} 
          md:flex
        `}
      >
        <ProfileHeader />
        <ActiveTabSwitch />

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {activeTab === "chats" ? <ChatsList /> : <ContactList />}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className={`
          flex-1 flex flex-col bg-slate-900/50 backdrop-blur-sm
          transition-all duration-300
          ${!selectedUser && "hidden"} 
          md:flex
        `}
      >
        {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
      </div>
    </div>
  );
}

export default ChatPage;

