import React, { useState } from "react";
import { Calendar, MapPin, Heart } from "lucide-react";

const EventCard = ({ event,onClick }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div onClick={onClick}
    className="relative rounded-xl overflow-hidden group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
      <img
        src={event.imgUrl}
        alt={event.title}
        className="w-full h-72 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end z-20">
        <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
          <div className="flex justify-between items-start">
            <h3 className="text-white font-semibold text-xl mb-2">
              {event.title}
            </h3>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              className={`p-2 rounded-full ${
                isLiked ? "bg-red-500" : "bg-white/20"
              } backdrop-blur-sm transition-all duration-300 hover:scale-110`}
            >
              <Heart
                size={16}
                className={`${
                  isLiked ? "text-white fill-current" : "text-white"
                }`}
              />
            </button>
          </div>
          <div className="flex items-center gap-4 text-white/80 text-sm mb-3">
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{event.date}</span>
            </div>
          </div>
          <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
            <span className="text-white font-semibold">{event.price}</span>
            <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;