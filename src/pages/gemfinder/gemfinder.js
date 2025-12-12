import { useCallback, useEffect, useState } from "react";
import GemTable from "./components/GemTable";
import gemArray from "../../data/Gems";
import Checkboxes from "./components/Checkboxes";
import filterNames from "../../data/FilterNames";
import {
  Main,
  GemTableContainer,
  CheckBoxContainer,
  GemIcon,
  FilterIcon,
  SearchIcon,
} from "./styles/GemFinder.styled";
import useSort from "./hooks/useSort";
import startViewTransitionWrapper from "../../store";

const Gemfinder = () => {
  const [gems, setGems] = useState(gemArray);
  const [currentFilters, setCurrentFilters] = useState([]);
  const { gemSorter, sortState } = useSort();

  const handleSetGems = (newGems) => {
    // startViewTransition
    startViewTransitionWrapper(() => setGems(newGems));
  };

  const handleChange = (e) => {
    if (e.target.checked) {
      // Add a filter
      setCurrentFilters([...currentFilters, e.target.value]);
    } else if (!e.target.checked) {
      // Remove a filter
      const newCurrentFilters = currentFilters.filter(
        (aFilter) => aFilter !== e.target.value
      );
      setCurrentFilters(newCurrentFilters);
    } else {
      return console.error("Unexpected checkbox value");
    }
  };

  const gemFilterer = useCallback(() => {
    let newArray = [...gemArray];
    currentFilters.forEach((aFilter) => {
      if (filterNames[2].content.includes(aFilter))
        // Gem color
        newArray = newArray.filter((gem) => currentFilters.includes(gem.color));
      else if (filterNames[3].content.includes(aFilter))
        //Gem quality
        newArray = newArray.filter((gem) =>
          currentFilters.includes(gem.quality)
        );
      else if (
        filterNames[0].content.includes(aFilter) ||
        filterNames[1].content.includes(aFilter)
      )
        // Main Attributes, Secondary Attributes
        newArray = newArray.filter((gem) => gem.stats.includes(aFilter));
      else {
        return console.error("gemFilterer Error");
      }
    });

    handleSetGems(newArray);
  }, [currentFilters]);

  const handleClick = (e) => {
    // Sort arrow is clicked
    let gemsToSort = [].concat(gems);
    let sortBy;
    // Check which sort arrow was clicked
    if (e.target.className === "gemNameHeader") {
      sortBy = "name";
    } else if (e.target.className === "gemColorHeader") {
      sortBy = "color";
    } else if (e.target.className === "gemQualityHeader") {
      sortBy = "quality";
    } else if (e.target.className === "gemStatsHeader") {
      sortBy = "stats";
    } else {
      console.error("handleClick recieved unexpected value from onClick");
      return;
    }
    // send new array to filter through, sort by SortBy
    const sorted = gemSorter(gemsToSort, sortBy);
    handleSetGems(sorted);
  };

  // Sets our state depending on which checkboxes are ticked.

  const gemSearch = (search) => {
    if (search) {
      const newArray = [...gemArray];
      let newGems = newArray.filter(
        (gem) =>
          gem.name.toUpperCase().includes(search.toUpperCase()) ||
          gem.stats.toUpperCase().includes(search.toUpperCase())
      );
      handleSetGems(newGems);
    } else {
      handleSetGems(gemArray);
    }
  };

  // Filter gems every time currentFilters changes
  useEffect(() => {
    gemFilterer();
  }, [currentFilters, gemFilterer]);

  return (
    <>
      <Main>
        <h2 className="header">
          <div className="header-text-icon-container">
            <FilterIcon /> FILTERS
          </div>
        </h2>
        <CheckBoxContainer className="checkbox-container">
          <Checkboxes filters={filterNames} onChange={handleChange} />
        </CheckBoxContainer>
        <h2 className="header">
          <div className="header-text-icon-container">
            <GemIcon /> RESULTS
          </div>

          <div className="header-text-icon-container">
            <SearchIcon id="search-icon" />
            <input
              type="text"
              id="search-gem-input"
              onKeyUp={(e) => gemSearch(e.target.value)}
              placeholder="Search for gems..."
              spellCheck="false"
              autoComplete="off"
            />
          </div>
        </h2>
        <GemTableContainer>
          {gems.length > 0 ? (
            <GemTable gems={gems} onClick={handleClick} sortState={sortState} />
          ) : (
            <p className="gemsNotFound">No gems found</p>
          )}
        </GemTableContainer>
      </Main>
    </>
  );
};

export default Gemfinder;
