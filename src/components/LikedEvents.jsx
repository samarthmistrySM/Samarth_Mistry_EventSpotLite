import React from "react";
import EventCard from "./EventCard";

const LikedEvents = ({ likedPosts, openModal, handleLikePost }) => {
  return (
    <div className="p-6 min-h-[85vh] bg-white dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Liked Events</h2>
      {likedPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {likedPosts.map((event, index) => (
            <EventCard
              key={index}
              event={event}
              openModal={openModal}
              handleLikePost={handleLikePost} 
              likedPosts={likedPosts} 
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">No liked events yet.</p>
      )}
    </div>
  );
};

export default LikedEvents;
