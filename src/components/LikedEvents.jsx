// components/LikedEvents.js
import React from "react";
import EventCard from "./EventCard";

const LikedEvents = ({ likedPosts }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Liked Events</h2>
      {likedPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {likedPosts.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      ) : (
        <p>No liked events yet.</p>
      )}
    </div>
  );
};

export default LikedEvents;
