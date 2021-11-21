import { useState, useEffect } from "react";
import GemTable from "../components/GemTable";
import gemArray from "../Gems";
import Checkboxes from "../components/Checkboxes";
import filterNames from "../FilterNames";
import {
  Main,
  GemTableContainer,
  CheckBoxContainer,
} from "../components/styles/GemFinder.styled";

let currentFilters = [];

const Gemfinder = () => {
  const [gems, setGems] = useState(gemArray);
  const [sort, setSort] = useState({
    gemStats: false,
    gemQuality: false,
    gemColor: false,
    gemName: false,
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
    let newArray = [].concat(gemArray);
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

  const gemSorter = (gemsToSort, sortBy) => {
    if (sortBy === "quality" || sortBy === "stats") {
      //  Sort by quality and stats in the same way we would just quality. We are usually not interested in amount of stats just
      //  the quality of the stats e.g Rare 32 AP gems are not superior to Epic 20 STR gems in-game so we sort by quality instead.
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
      setSort((sort) => ({
        gemName: !sort.gemName,
      }));
    }

    setGems(gemsToSort);
  };

  useEffect(() => {
    // Reset currentFilters when the page is rendered
    currentFilters = [];
  }, []);

  return (
    <Main>
      <CheckBoxContainer className="checkbox-container">
        <Checkboxes filters={filterNames} onChange={handleChange} />
      </CheckBoxContainer>
      <GemTableContainer>
        {gems.length > 0 ? (
          <GemTable gems={gems} onClick={handleClick} />
        ) : (
          <p className="gemsNotFound">No gems found :(</p>
        )}
      </GemTableContainer>
    </Main>
  );
};

export default Gemfinder;
