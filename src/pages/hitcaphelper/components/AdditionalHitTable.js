const AdditionalHitTable = () => {
  return (
    <table className="additional-hit-table">
      <thead>
        <tr>
          <th>Race/Spec</th>
          <th>
            <span>
              Spells{" "}
              <img
                src="images/spellicons/Innervate.png"
                className="results-pve-icon"
                alt="pve"
              />
            </span>
          </th>
          <th>
            <span>
              Melee
              <img
                src="images/spellicons/Mortal_Strike.png"
                className="results-pve-icon"
                alt="pve"
              />
            </span>
          </th>
          <th>
            <span>
              Ranged{" "}
              <img
                src="images/spellicons/Aimed_Shot.png"
                className="results-pve-icon"
                alt="pve"
              />
            </span>
          </th>
          <th>
            <span>
              Nature Spells
              <img
                src="images/spellicons/Aspect_Of_The_Wild.png"
                className="results-pve-icon"
                alt="pve"
              />
            </span>
          </th>
          <th>
            <span>
              Shadow Spells{" "}
              <img
                src="images/spellicons/Shadow_Resistance_Aura.png"
                className="results-pve-icon"
                alt="pve"
              />
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="additional-hit-blood-elf">Blood Elf</td>
          <td>
            <span className="amount-of-hit">2%</span>{" "}
            <span className="specific-hit-rating">(53 hit rating)</span>
          </td>
          <td>0%</td>
          <td>0%</td>
          <td>
            <span className="amount-of-hit">2%</span>{" "}
            <span className="specific-hit-rating">(53 hit rating)</span>
          </td>
          <td>
            <span className="amount-of-hit">2%</span>
            <span className="specific-hit-rating">(53 hit rating)</span>
          </td>
        </tr>
        <tr>
          <td className="additional-hit-night-elf">Night Elf</td>
          <td>0%</td>
          <td>
            <span className="amount-of-hit">2%</span>{" "}
            <span className="specific-hit-rating">(66 hit rating)</span>
          </td>
          <td>
            <span className="amount-of-hit">2%</span>{" "}
            <span className="specific-hit-rating">(66 hit rating)</span>
          </td>
          <td>0%</td>
          <td>0%</td>
        </tr>
        <tr>
          <td className="additional-hit-retribution-paladin">
            Retribution Paladin
          </td>
          <td>
            <span className="amount-of-hit">4%</span>{" "}
            <span className="specific-hit-rating">(105 hit rating)</span>
          </td>
          <td>0%</td>
          <td>
            <span className="amount-of-hit">4%</span>{" "}
            <span className="specific-hit-rating">(132 hit rating)</span>
          </td>
          <td>
            <span className="amount-of-hit">4%</span>
            <span className="specific-hit-rating">(105 hit rating)</span>
          </td>
          <td>
            <span className="amount-of-hit">4%</span>{" "}
            <span className="specific-hit-rating">(105 hit rating)</span>
          </td>
        </tr>
        <tr>
          <td className="additional-hit-subtlety-rogue">Sublety Rogue</td>
          <td>
            <span className="amount-of-hit">4%</span>{" "}
            <span className="specific-hit-rating">(105 hit rating)</span>
          </td>
          <td>0%</td>
          <td>
            <span className="amount-of-hit">4%</span>{" "}
            <span className="specific-hit-rating">(132 hit rating)</span>
          </td>
          <td>
            <span className="amount-of-hit">4%</span>{" "}
            <span className="specific-hit-rating">(105 hit rating)</span>
          </td>
          <td>
            <span className="amount-of-hit">4%</span>{" "}
            <span className="specific-hit-rating">(105 hit rating)</span>
          </td>
        </tr>
        <tr>
          <td className="additional-hit-undead">Undead</td>
          <td>0%</td>
          <td>0%</td>
          <td>0%</td>
          <td>0%</td>
          <td>
            <span className="amount-of-hit">2%</span>{" "}
            <span className="specific-hit-rating">(53 hit rating)</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AdditionalHitTable;
