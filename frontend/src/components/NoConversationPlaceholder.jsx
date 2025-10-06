import { MessageCircleIcon } from "lucide-react";

const NoConversationPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4 sm:p-6">
  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
    <MessageCircleIcon className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />
  </div>
  <h3 className="text-lg sm:text-xl font-semibold text-slate-200 mb-2">
    Select a conversation
  </h3>
  <p className="text-slate-400 max-w-xs sm:max-w-md px-2 sm:px-0">
    Choose a contact from the sidebar to start chatting or continue a previous conversation.
  </p>
</div>

  );
};

export default NoConversationPlaceholder;