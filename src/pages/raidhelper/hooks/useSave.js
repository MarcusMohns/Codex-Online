const useSave = ({
  raid,
  buffs,
  utilities,
  raidCount,
  setRaid,
  setBuffs,
  setUtilities,
  setCount,
}) => {
  const deleteSaveOnClick = (saveName) => {
    const saveNameInput = document.querySelector(`#${saveName}`);
    if (saveNameInput) {
      // save exists
      saveNameInput.value = "EMPTY";
      localStorage.removeItem(saveName);
    }
  };
  const editSaveOnChange = (saveName, e) => {
    const newState = JSON.parse(localStorage.getItem(saveName));
    if (newState) {
      // save exists
      newState.name = e.target.value;
      const newSave = JSON.stringify(newState);
      localStorage.setItem(saveName, newSave);
    }
  };
  const saveOnClickToFile = () => {
    const savedRaid = JSON.stringify(raid);
    const savedBuffs = JSON.stringify(buffs);
    const savedUtils = JSON.stringify(utilities);
    const savedCount = JSON.stringify(raidCount);

    const data = JSON.stringify({
      name: `${raidCount[0]}/25 - Saved Raid`,
      raid: savedRaid,
      buffs: savedBuffs,
      utils: savedUtils,
      count: savedCount,
    });
    let c = document.createElement("a");
    c.download = `${raidCount[0]}/25 - Saved Raid.txt`;

    const t = new Blob([data], {
      type: "text/plain",
    });

    c.href = window.URL.createObjectURL(t);
    c.click();
  };

  const loadOnClickToFile = () => {
    const fileSelector = document.createElement("input");
    fileSelector.setAttribute("type", "file");
    fileSelector.click();

    fileSelector.addEventListener("change", () => {
      let files = fileSelector.files;
      if (files.length === 0) return;
      if (files[0].type !== "text/plain") return;

      const file = files[0];
      let reader = new FileReader();

      reader.onload = (e) => {
        const file = e.target.result;
        try {
          const newState = JSON.parse(file);
          const newRaid = JSON.parse(newState.raid);
          const newBuffs = JSON.parse(newState.buffs);
          const newUtilities = JSON.parse(newState.utils);
          const newCount = JSON.parse(newState.count);

          setRaid(newRaid);
          setBuffs({ type: "load", value: newBuffs });
          setUtilities({ type: "load", value: newUtilities });
          setCount(newCount);
        } catch {
          console.error("could not load");
        }
      };

      reader.onerror = (e) => alert(e.target.error.name);
      reader.readAsText(file);
    });
  };
  const saveOnClick = (saveName) => {
    const saveNameInput = document.querySelector(`#${saveName}`);
    // turn state into JSON
    const savedRaid = JSON.stringify(raid);
    const savedBuffs = JSON.stringify(buffs);
    const savedUtils = JSON.stringify(utilities);
    const savedCount = JSON.stringify(raidCount);

    // handles the displayed name of the save
    const date = new Date();
    const curDate = `${date.getDate()}/${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
    let newSaveName = "";

    saveNameInput.value === "EMPTY"
      ? // Only overwrite the save name when 'EMPTY' otherwise edited save name will be deleted on save.
        (newSaveName = `(${raidCount[0]}/25) - ${curDate}`)
      : (newSaveName = saveNameInput.value);

    const saveOne = JSON.stringify({
      name: newSaveName,
      raid: savedRaid,
      buffs: savedBuffs,
      utils: savedUtils,
      count: savedCount,
    });

    const savedTooltip = document.querySelector(".saved-tooltip");

    savedTooltip.style.opacity = "100%";
    setTimeout(function () {
      savedTooltip.style.opacity = "0%";
    }, 1000);
    // Show 'Saved!' for 1 second

    saveNameInput.value = newSaveName;
    localStorage.setItem(saveName, saveOne);
  };
  const loadOnClick = (loadName) => {
    const newState = JSON.parse(localStorage.getItem(loadName));
    if (newState) {
      // save exists
      const newRaid = JSON.parse(newState.raid);
      const newBuffs = JSON.parse(newState.buffs);
      const newUtilities = JSON.parse(newState.utils);
      const newCount = JSON.parse(newState.count);

      setRaid(newRaid);
      setBuffs({ type: "load", value: newBuffs });
      setUtilities({ type: "load", value: newUtilities });
      setCount(newCount);
    }
  };
  return {
    deleteSaveOnClick,
    editSaveOnChange,
    saveOnClickToFile,
    loadOnClickToFile,
    saveOnClick,
    loadOnClick,
  };
};

export default useSave;
