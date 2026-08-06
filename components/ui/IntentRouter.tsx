'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { motion, AnimatePresence } from 'framer-motion';
import { type Intent, intents, getSuggestions } from '@/lib/intents';

// ─── Constants ────────────────────────────────────────────────────────────────

const PLACEHOLDER_WORDS = [
  'Show me your RAG projects...',
  "What's your experience?",
  'Are you good at backend?',
  'What tech do you use?',
];

const ROUTING_LINE_1 = '> Analyzing intent...';
const ROUTING_LINE_DELAY_1 = 50;
const ROUTING_LINE_DELAY_2 = 350;
const SCROLL_DELAY = 700;
const HIGHLIGHT_DURATION = 1500;
const DEBOUNCE_MS = 200;
const MIN_QUERY_LENGTH = 3;

// ─── Component ────────────────────────────────────────────────────────────────

export default function IntentRouter() {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Intent[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [routingLines, setRoutingLines] = useState<string[]>([]);
  const [isRouting, setIsRouting] = useState(false);
  const [noMatch, setNoMatch] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const routingTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const [placeholderText] = useTypewriter({
    words: PLACEHOLDER_WORDS,
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 55,
    deleteSpeed: 30,
  });

  // ── Debounce ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [query]);

  // ── Suggestions from debounced query ─────────────────────────────────────
  useEffect(() => {
    const trimmed = debouncedQuery.trim();
    if (trimmed.length < MIN_QUERY_LENGTH) {
      setSuggestions([]);
      setShowDropdown(false);
      setHighlightedIndex(-1);
      return;
    }
    const results = getSuggestions(trimmed, 4);
    setSuggestions(results);
    setShowDropdown(results.length > 0);
    setHighlightedIndex(-1);
  }, [debouncedQuery]);

  // ── Cleanup routing timers on unmount ────────────────────────────────────
  useEffect(() => {
    return () => routingTimers.current.forEach(clearTimeout);
  }, []);

  // ── Selection handler ─────────────────────────────────────────────────────
  const handleSelect = useCallback((intent: Intent) => {
    // Clear any previous timers
    routingTimers.current.forEach(clearTimeout);
    routingTimers.current = [];

    setShowDropdown(false);
    setHighlightedIndex(-1);
    setNoMatch(false);
    setIsRouting(true);
    setRoutingLines([]);

    // Staggered routing lines
    routingTimers.current.push(
      setTimeout(() => {
        setRoutingLines([ROUTING_LINE_1]);
      }, ROUTING_LINE_DELAY_1)
    );
    routingTimers.current.push(
      setTimeout(() => {
        setRoutingLines([ROUTING_LINE_1, `> Routing to: ${intent.label} Expert...`]);
      }, ROUTING_LINE_DELAY_2)
    );

    // Scroll, highlight, then reset
    routingTimers.current.push(
      setTimeout(() => {
        const target = document.getElementById(intent.sectionId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          target.classList.add('intent-highlight');
          setTimeout(() => target.classList.remove('intent-highlight'), HIGHLIGHT_DURATION);
        }
        setQuery('');
        setDebouncedQuery('');
        setSuggestions([]);
        setRoutingLines([]);
        setIsRouting(false);
      }, SCROLL_DELAY)
    );
  }, []);

  // ── Submit (Enter key or empty dropdown) ─────────────────────────────────
  const handleSubmit = useCallback(() => {
    const trimmed = query.trim();
    if (trimmed.length === 0) return;

    // Compute synchronously so Enter is instant even before debounce fires
    if (trimmed.length < MIN_QUERY_LENGTH) return;

    const live = getSuggestions(trimmed, 4);
    if (live.length === 0) {
      setShowDropdown(false);
      setHighlightedIndex(-1);
      setNoMatch(true);
      return;
    }

    const intent =
      highlightedIndex >= 0 && highlightedIndex < live.length
        ? live[highlightedIndex]
        : live[0];
    handleSelect(intent);
  }, [query, highlightedIndex, handleSelect]);

  // ── Keyboard handler ──────────────────────────────────────────────────────
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case 'ArrowDown':
          if (!showDropdown) break;
          e.preventDefault();
          setHighlightedIndex(prev =>
            suggestions.length === 0 ? -1 : (prev + 1) % suggestions.length
          );
          break;

        case 'ArrowUp':
          if (!showDropdown) break;
          e.preventDefault();
          setHighlightedIndex(prev =>
            suggestions.length === 0 ? -1 : (prev - 1 + suggestions.length) % suggestions.length
          );
          break;

        case 'Enter':
          e.preventDefault();
          handleSubmit();
          break;

        case 'Escape':
          e.preventDefault();
          setShowDropdown(false);
          setHighlightedIndex(-1);
          break;
      }
    },
    [showDropdown, suggestions, handleSubmit]
  );

  // ── Input change ──────────────────────────────────────────────────────────
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setNoMatch(false);
    setIsRouting(false);
    setRoutingLines([]);
  }, []);

  // ─────────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Glass card */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl border border-[#E9E7F5] p-5 shadow-lg shadow-[#6366F1]/10">

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholderText}
          aria-label="Ask about Praveen's work"
          aria-expanded={showDropdown}
          aria-haspopup="listbox"
          autoComplete="off"
          spellCheck={false}
          className="w-full rounded-xl border border-[#E9E7F5] bg-[#FAFAFC] px-4 py-3 text-sm text-[#1E1B2E] placeholder:text-[#5B5770]/60 focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-shadow duration-150"
        />

        {/* Helper text */}
        <p className="mt-2 text-xs text-[#5B5770]">
          Try asking, or press Enter to explore.
        </p>

        {/* ── Suggestions dropdown ── */}
        <AnimatePresence>
          {showDropdown && suggestions.length > 0 && (
            <motion.ul
              key="dropdown"
              role="listbox"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="mt-2 rounded-xl border border-[#E9E7F5] bg-white shadow-md overflow-hidden"
            >
              {suggestions.map((intent, idx) => (
                <li
                  key={intent.id}
                  role="option"
                  aria-selected={idx === highlightedIndex}
                  onMouseDown={(e) => e.preventDefault()} // prevent input blur before click
                  onClick={() => handleSelect(intent)}
                  onMouseEnter={() => setHighlightedIndex(idx)}
                  className={`px-4 py-2.5 text-sm cursor-pointer transition-colors duration-100 ${
                    idx === highlightedIndex
                      ? 'bg-[#6366F1] text-white'
                      : 'text-[#1E1B2E] hover:bg-[#F3F1FA]'
                  }`}
                >
                  {intent.label}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* ── Routing animation ── */}
        <AnimatePresence>
          {isRouting && routingLines.length > 0 && (
            <motion.div
              key="routing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-3 space-y-1"
            >
              {routingLines.map((line, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className="font-mono text-sm text-[#6366F1]"
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── No-match fallback ── */}
        <AnimatePresence>
          {noMatch && (
            <motion.div
              key="noMatch"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.15 }}
              className="mt-3"
            >
              <p className="text-xs text-[#5B5770] mb-2">
                Hmm, I didn&apos;t catch that — try one of these:
              </p>
              <div className="flex flex-wrap gap-2">
                {intents.map((intent) => (
                  <button
                    key={intent.id}
                    onClick={() => {
                      setNoMatch(false);
                      handleSelect(intent);
                    }}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border border-[#E9E7F5] text-[#6366F1] bg-[#F3F1FA] hover:bg-[#6366F1] hover:text-white transition-colors duration-150"
                  >
                    {intent.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
