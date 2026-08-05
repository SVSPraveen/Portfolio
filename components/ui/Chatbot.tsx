"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles, BrainCircuit } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTED_QUESTIONS = ["My Projects", "My Skills", "Hire Me", "Contact"];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm Priyanshu's AI assistant. Ask me anything about his skills, projects, or experience!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    
    const userMessage: Message = { role: "user", content: text };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChipClick = (q: string) => {
    handleSend(q);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] glass rounded-2xl flex flex-col overflow-hidden border-[#00d4ff]/20 shadow-[0_0_30px_rgba(0,212,255,0.15)]"
          >
            {/* Header */}
            <div className="p-4 bg-[#0a0f1e]/80 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00d4ff] to-[#7b2fff] p-[1px]">
                  <div className="w-full h-full bg-[#0a0f1e] rounded-full flex items-center justify-center">
                    <BrainCircuit size={16} className="text-[#00d4ff]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">Priyanshu AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs text-gray-400">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg: Message, idx: number) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-2`}>
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 shrink-0 rounded-full bg-gradient-to-tr from-[#00d4ff] to-[#7b2fff] flex items-center justify-center mt-1">
                      <BrainCircuit size={12} className="text-white" />
                    </div>
                  )}
                  <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                    msg.role === "user" 
                      ? "bg-gradient-to-r from-[#00d4ff]/20 to-[#7b2fff]/20 border border-white/10 text-white rounded-tr-sm" 
                      : "glass-panel text-gray-200 rounded-tl-sm"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start gap-2">
                   <div className="w-6 h-6 shrink-0 rounded-full bg-gradient-to-tr from-[#00d4ff] to-[#7b2fff] flex items-center justify-center mt-1">
                      <BrainCircuit size={12} className="text-white" />
                    </div>
                  <div className="glass-panel rounded-2xl rounded-tl-sm p-3 text-sm flex items-center gap-2">
                    <Loader2 size={14} className="animate-spin text-[#00d4ff]" />
                    <span className="text-gray-400">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Chips */}
            {messages.length === 1 && !isLoading && (
              <div className="p-3 flex flex-wrap gap-2 border-t border-white/5">
                {SUGGESTED_QUESTIONS.map(q => (
                  <button 
                    key={q}
                    onClick={() => handleChipClick(q)}
                    className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-3 bg-[#0a0f1e]/90 border-t border-white/10">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#7b2fff] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_15px_rgba(123,47,255,0.4)] transition-all"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7b2fff] flex items-center justify-center shadow-[0_0_20px_rgba(123,47,255,0.5)] z-50"
      >
        {isOpen ? <X size={24} className="text-white" /> : <Sparkles size={24} className="text-white" />}
      </motion.button>
    </div>
  );
}
