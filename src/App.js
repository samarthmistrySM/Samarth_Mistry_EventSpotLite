import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import EventCard from "./components/EventCard";

import EventModal from "./components/EventModal";
import events from "./mockData";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hamburger from "./components/Hamburger";

gsap.registerPlugin(useGSAP);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const loaderRef = useRef(null);
  const filterRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setLoading(false);
        },
      });

      tl.fromTo(
        loaderRef.current,
        { y: "100%", opacity: 1 },
        { y: "0%", duration: 1.5, ease: "power4.out" }
      )
        .to(loaderRef.current, { duration: 0.5, ease: "none" })
        .to(loaderRef.current, {
          y: "-100%",
          opacity: 0,
          duration: 1.0,
          ease: "power4.inOut",
        });
    }, loaderRef);

    return () => ctx.revert();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const openModal = (event) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFilter = () => {
    setIsFilterOpen((prev) => {
      if (!prev) {
        gsap.fromTo(
          filterRef.current,
          { x: -200, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
        );
      } else {
        gsap.to(filterRef.current, {
          x: -200,
          opacity: 0,
          duration: 0.5,
          ease: "power3.in",
        });
      }
      return !prev;
    });
  };

  if (loading) {
    return <Loader loaderRef={loaderRef} />;
  }

  return (
    <div
      className={`w-screen main h-full transition-opacity duration-500 ${
        darkMode ? "dark" : ""
      } bg-white dark:bg-gray-900 opacity-0`}
    >
      <Navbar
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggleFilter={toggleFilter}
        isFilterOpen={isFilterOpen}
      />

      <div className="max-w-screen mx-auto flex flex-col md:flex-row">
        <Hamburger
          filterRef={filterRef}
          isFilterOpen={isFilterOpen}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />

        <div className="flex-1 border-0 border-l  dark:border-gray-700 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <EventCard
              key={index}
              event={event}
              onClick={() => openModal(event)}
            />
          ))}
        </div>
      </div>

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
