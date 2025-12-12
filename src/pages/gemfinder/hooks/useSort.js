import { useState } from "react";

const useSort = () => {
  const [sort, setSort] = useState({
    gemStats: false,
    gemQuality: false,
    gemColor: false,
    gemName: false,
  });

  const gemSorter = (gemsToSort, sortBy) => {
    let sortedGems = [...gemsToSort];

    if (sortBy === "quality" || sortBy === "stats") {
      //  Sort by quality and stats in the same way we would just quality.
      sortedGems.sort(function (a, b) {
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
      sortedGems.sort(function (a, b) {
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
      sortedGems.sort(function (a, b) {
        if (a.name < b.name) {
          return sort.gemName ? 1 : -1;
        }
        if (a.name > b.name) {
          return sort.gemName ? -1 : 1;
        }

        return 0;
      });

      setSort((sort) => ({
        ...sort,
        gemName: !sort.gemName,
      }));
    }

    if (sortBy === "source") {
      sortedGems.sort(function (a, b) {
        if (a.source < b.source) {
          return sort.gemSource ? 1 : -1;
        }
        if (a.source > b.source) {
          return sort.gemSource ? -1 : 1;
        }

        return 0;
      });
      setSort((sort) => ({
        ...sort,
        gemSource: !sort.gemSource,
      }));
    }
    return sortedGems;
  };
  return { gemSorter, sortState: sort };
};

export default useSort;
