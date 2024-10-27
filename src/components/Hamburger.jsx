import React from 'react'
import SearchBar from "./SearchBar"
import FilterButton from "./FilterButton"

const Hamburger = ({filterRef,isFilterOpen,searchTerm,setSearchTerm,setSelectedCategory,selectedCategory}) => {
  return (
    <div
          ref={filterRef}
          className={`w-full md:w-64 p-6 space-y-4 ${isFilterOpen ? "block" : "hidden md:block"}`}
        >
          <SearchBar searchTerm={searchTerm} onChange={setSearchTerm} />
          <div className="space-y-3">
            {["All", "Conference", "Exhibition", "Business", "Festival", "Health"].map((category) => (
              <FilterButton
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                isSelected={selectedCategory === category}
              />
            ))}
          </div>
        </div>
  )
}

export default Hamburger