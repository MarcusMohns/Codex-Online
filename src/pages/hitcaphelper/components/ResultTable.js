import React from "react";
import { CheckCircle } from "../../raidhelper/styles/RaidHelper.styled";
import { CrossIcon } from "../../raidhelper/styles/RaidHelper.styled";

const ResultTable = ({ values }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <span>Class and Spec</span>
          </th>
          <th>
            <span>
              PvE or PvP{" "}
              <img
                src="images/pve_sm.webp"
                className="results-pve-icon"
                alt="pve"
              />
              <img
                src="images/pvp_sm.webp"
                className="results-pvp-icon"
                alt="pvp"
              />
            </span>
          </th>
          <th>
            <span>
              Draenei{" "}
              <img
                src="images/heroic_presence_sm.webp"
                className="draenei-icon"
                alt="draenei"
              />
            </span>
          </th>
          <th>
            <span>Talent Points</span>
          </th>
          <th>
            <span>
              Raid Spell Hit Buff{" "}
              <img
                src="images/raidHitBuff_sm.webp"
                alt="raid hit buff"
                className="raid-hit-buff-icon"
              />
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            id={values.classAndSpec
              .substring(values.classAndSpec.indexOf(" ") + 1)
              .toLowerCase()}
          >
            {values.classAndSpec}
          </td>
          <td>
            {values.pveOrPvp === "pve" ? (
              <span>
                PvE
                <img
                  src="images/pve_sm.webp"
                  className="results-pve-icon"
                  alt="pve"
                />
              </span>
            ) : (
              <span>
                PvP
                <img
                  src="images/pvp_sm.webp"
                  className="results-pvp-icon"
                  alt="pvp"
                />
              </span>
            )}
          </td>
          <td>
            {values.draenei ? (
              <span>
                Yes <CheckCircle />
              </span>
            ) : (
              <span>
                No <CrossIcon />
              </span>
            )}
          </td>
          <td>{values.talentPoints ? `${values.talentPoints}%` : "0%"}</td>
          <td>
            {values.raidHitBuff ? (
              <span>
                Yes <CheckCircle />
              </span>
            ) : (
              <span>
                No <CrossIcon />
              </span>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ResultTable;
