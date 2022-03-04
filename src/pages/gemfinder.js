import { useState, useEffect } from "react";
import GemTable from "../components/GemTable";
import gemArray from "../Gems";
import Checkboxes from "../components/Checkboxes";
import filterNames from "../FilterNames";
import { Header } from "../components/styles/RaidAssembler.styled";
import {
  Main,
  GemTableContainer,
  CheckBoxContainer,
  GemIcon,
  FilterIcon,
} from "../components/styles/GemFinder.styled";

let currentFilters = [];

const Gemfinder = () => {
  const [gems, setGems] = useState(gemArray);
  const [sort, setSort] = useState({
    gemStats: false,
    gemQuality: false,
    gemColor: false,
    gemName: false,
    gemSource: false,
  });

  const handleChange = (e) => {
    if (e.target.checked) {
      // Add a filter
      currentFilters.push(e.target.value);
    } else if (!e.target.checked) {
      // Remove a filter
      currentFilters = currentFilters.filter(
        (aFilter) => aFilter !== e.target.value
      );
    } else {
      return console.error("Unexpected checkbox value");
    }
    gemFilterer();
  };

  const handleClick = (e) => {
    // Sort arrow is clicked
    let sortBy = null;
    let gemsToSort = [].concat(gems);
    // Check which sort arrow was clicked
    if (e.target.className === "gemNameHeader") {
      sortBy = "name";
    } else if (e.target.className === "gemColorHeader") {
      sortBy = "color";
    } else if (e.target.className === "gemQualityHeader") {
      sortBy = "quality";
    } else if (e.target.className === "gemSourceHeader") {
      sortBy = "source";
    } else if (e.target.className === "gemStatsHeader") {
      sortBy = "stats";
    } else {
      console.error("handleClick recieved unexpected value from onClick");
    }
    // send new array to filter through, sort by SortBy
    gemSorter(gemsToSort, sortBy);
  };

  // Sets our state depending on which checkboxes are ticked.
  const gemFilterer = () => {
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

    setGems(newArray);
  };

  const gemSearch = (search) => {
    if (search) {
      const newArray = [...gemArray];
      let newGems = newArray.filter((gem) =>
        gem.name.toUpperCase().includes(search.toUpperCase())
      );
      setGems(newGems);
    } else {
      setGems(gemArray);
    }
  };

  const gemSorter = (gemsToSort, sortBy) => {
    if (sortBy === "quality" || sortBy === "stats") {
      //  Sort by quality and stats in the same way we would just quality.
      gemsToSort.sort(function (a, b) {
        if (
          (a.quality === "Perfect" && b.quality === "Rare") ||
          (b.quality === "Perfect" && a.quality === "Rare")
          // Sort sorts the gems in order Epic -> Perfect -> Rare -> Uncommon so reverse Perfect and Rare to sort accurately (Epic -> Rare -> Perfect -> Uncommon)
        ) {
          if (a.quality < b.quality) {
            return sort.gemQuality ? -1 : 1;
          }
          if (a.quality > b.quality) {
            return sort.gemQuality ? 1 : -1;
          }
          return 0;
        }
        // Otherwise sort normally
        if (a.quality < b.quality) {
          return sort.gemQuality ? 1 : -1;
        }
        if (a.quality > b.quality) {
          return sort.gemQuality ? -1 : 1;
        }

        return 0;
      });
      setSort((sort) => ({
        ...sort,
        gemQuality: !sort.gemQuality,
      }));
    }

    if (sortBy === "color") {
      gemsToSort.sort(function (a, b) {
        if (a.color < b.color) {
          return sort.gemColor ? 1 : -1;
        }
        if (a.color > b.color) {
          return sort.gemColor ? -1 : 1;
        }

        return 0;
      });
      setSort((sort) => ({
        ...sort,
        gemColor: !sort.gemColor,
      }));
    }

    if (sortBy === "name") {
      gemsToSort.sort(function (a, b) {
        if (a.name < b.name) {
          return sort.gemName ? 1 : -1;
        }
        if (a.name > b.name) {
          return sort.gemName ? -1 : 1;
        }

        return 0;
      });
      console.log(sort);

      setSort((sort) => ({
        ...sort,
        gemName: !sort.gemName,
      }));
    }

    if (sortBy === "source") {
      /// FIX SO IT SORTS BY SOURCE
      gemsToSort.sort(function (a, b) {
        if (a.source < b.source) {
          return sort.gemSource ? 1 : -1;
        }
        if (a.source > b.source) {
          return sort.gemSource ? -1 : 1;
        }

        return 0;
      });
      setSort((sort) => ({
        gemSource: !sort.gemSource,
      }));
    }

    setGems(gemsToSort);
  };

  useEffect(() => {
    // Reset currentFilters when the page is rendered
    currentFilters = [];
  }, []);

  return (
    <>
      <Header>Gem Finder - WOTLK Gems</Header>
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
          <input
            type="text"
            id="search-gem-input"
            onKeyUp={(e) => gemSearch(e.target.value)}
            placeholder="Search for gems..."
            spellCheck="false"
            autoComplete="off"
          />
        </h2>
        <GemTableContainer>
          {gems.length > 0 ? (
            <GemTable gems={gems} onClick={handleClick} />
          ) : (
            <p className="gemsNotFound">No gems found</p>
          )}
        </GemTableContainer>
      </Main>
    </>
  );
};

export default Gemfinder;
