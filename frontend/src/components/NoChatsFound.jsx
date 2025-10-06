import { MessageCircleIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

function NoChatsFound() {
  const { setActiveTab } = useChatStore();

  return (
    <div className="flex flex-col items-center justify-center py-6 sm:py-10 text-center space-y-3 sm:space-y-4 px-4">
  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cyan-500/10 rounded-full flex items-center justify-center">
    <MessageCircleIcon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
  </div>
  <div className="max-w-xs sm:max-w-sm">
    <h4 className="text-slate-200 font-medium mb-1 text-base sm:text-lg">No conversations yet</h4>
    <p className="text-slate-400 text-sm">
      Start a new chat by selecting a contact from the contacts tab
    </p>
  </div>
  <button
    onClick={() => setActiveTab("contacts")}
    className="px-3 py-2 sm:px-4 sm:py-2 text-sm text-cyan-400 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 transition-colors"
  >
    Find contacts
  </button>
</div>

  );
}
export default NoChatsFound;