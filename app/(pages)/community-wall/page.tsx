"use client";

import Wall from "@/components/community-wall/Wall";
import { supabase } from "@/utils/supabase";

export const revalidate = 0; // Disable caching for this page

async function getMessages() {
  const { data, error } = await supabase
    .from("community_messages")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(100);

  if (error) {
    console.error("Error fetching messages:", error);
    return [];
  }

  return data || [];
}

export default async function CommunityWallPage() {
  const messages = await getMessages();

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold  mb-3">
            Community Wall
          </h1>
          <p className="text-lg text-gray-600">
            Leave a message, share your thoughts, or just say hello.
          </p>
          <p className="text-lg text-gray-600 hidden md:block">
            Click and drag to explore all the messages scattered across the
            canvas.
          </p>
        </div>

        <Wall initialMessages={messages} />
      </div>
    </div>
  );
}
