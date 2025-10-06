import { XIcon } from "lucide-react";
import useChatStore from "../store/useChatStore";
import { useEffect } from "react";

function ChatHeader() {
  const { selectedUser, setSelectedUser, onlineUsers } = useChatStore();
  const isOnline = selectedUser && onlineUsers?.includes(selectedUser._id);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") setSelectedUser(null);
    };
    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [setSelectedUser]);

  // Guard clause if no user selected
  if (!selectedUser) return null;

  <div className="flex justify-between items-center bg-slate-800/50 border-b border-slate-700/50 max-h-[84px] px-4 sm:px-6 flex-1">
  <div className="flex items-center space-x-3 min-w-0">
    <div className={`avatar ${isOnline ? "online" : "offline"}`}>
      <div className="w-10 sm:w-12 rounded-full flex-shrink-0">
        <img
          src={selectedUser?.profilePic || "/avatar.png"}
          alt={selectedUser?.fullName || "User avatar"}
          onError={(e) => (e.currentTarget.src = "/avatar.png")}
        />
      </div>
    </div>
    <div className="min-w-0">
      <h3 className="text-slate-200 font-medium truncate">{selectedUser?.fullName}</h3>
      <p className="text-slate-400 text-sm">{isOnline ? "Online" : "Offline"}</p>
    </div>
  </div>

  <button onClick={() => setSelectedUser(null)}>
    <XIcon className="w-5 h-5 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer" />
  </button>
</div>

}

export default ChatHeader;
