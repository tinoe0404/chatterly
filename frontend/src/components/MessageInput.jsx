import React, { useState, useRef } from 'react';
import useKeyboardSound from '../hooks/useKeyboardSound';
import { toast } from 'react-hot-toast';
import { XMarkIcon, PhotoIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import useChatStore from '../store/useChatStore';
import { SendIcon } from 'lucide-react';

function MessageInput() {
  const { playRandomKeyStrokeSound } = useKeyboardSound();
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const fileInputRef = useRef(null);  
  const { sendMessage, isSoundEnabled } = useChatStore();

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;
    if (isSoundEnabled) playRandomKeyStrokeSound();
    
    sendMessage({
      text: text.trim(),
      image: imagePreview,
    });

    setText("");
    setImagePreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="p-3 border-t border-slate-700/50">
  {imagePreview && (
    <div className="w-full flex items-center justify-center mb-3">
      <div className="relative">
        <img
          src={imagePreview}
          alt="Preview"
          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg border border-slate-700"
        />
        <button
          onClick={removeImage}
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-slate-200 hover:bg-slate-700"
          type="button"
        >
          <XMarkIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  )}

  <form
    onSubmit={handleSendMessage}
    className="w-full max-w-3xl mx-auto flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2"
  >
    <input
      type="text"
      value={text}
      onChange={(e) => {
        setText(e.target.value);
        isSoundEnabled && playRandomKeyStrokeSound();
      }}
      className="flex-1 bg-slate-800/50 border border-slate-700/50 rounded-lg py-2 px-4 w-full"
      placeholder="Type your message..."
    />

    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className={`bg-slate-800/50 text-slate-400 hover:text-slate-200 rounded-lg px-4 transition-colors ${
          imagePreview ? "text-cyan-500" : ""
        }`}
      >
        <PhotoIcon className="w-5 h-5" />
      </button>
      <button
        type="submit"
        disabled={!text.trim() && !imagePreview}
        className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg px-4 py-2 font-medium hover:from-cyan-600 hover:to-cyan-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <SendIcon className="w-5 h-5" />
      </button>
    </div>
  </form>
</div>

  );
}

export default MessageInput;
