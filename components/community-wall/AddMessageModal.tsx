// components/AddMessageModal.tsx
"use client";

import { useState } from "react";
import { supabase, Message } from "@/utils/supabase";

interface AddMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onMessageAdded: (message: Message) => void;
}

export default function AddMessageModal({
  isOpen,
  onClose,
  onMessageAdded,
}: AddMessageModalProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !message.trim()) {
      setError("Please fill in both fields");
      return;
    }

    if (message.length > 200) {
      setError("Message is too long (max 200 characters)");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error: supabaseError } = await supabase
        .from("community_messages")
        .insert([{ name: name.trim(), message: message.trim() }])
        .select()
        .single();

      if (supabaseError) throw supabaseError;

      onMessageAdded(data as Message);
      setName("");
      setMessage("");
    } catch (err) {
      console.error("Error adding message:", err);
      setError("Failed to add message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Leave a Message</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
            aria-label="Close modal"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 6L6 18M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
              placeholder="Enter your name"
              maxLength={50}
              disabled={isSubmitting}
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-gray-900"
              placeholder="Share your thoughts..."
              rows={4}
              maxLength={200}
              disabled={isSubmitting}
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              {message.length}/200 characters
            </p>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Posting..." : "Post Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
