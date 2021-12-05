import { FaSort } from "react-icons/fa";

const GemTable = ({ gems, onClick }) => {
  return (
    <table className="gemTable">
      <thead>
        <tr>
          <th>
            <div className="gemNameHeader" onClick={onClick}>
              Name <FaSort className="sortImage" alt="sort icon" />
            </div>
          </th>
          <th>
            <div className="gemColorHeader" onClick={onClick}>
              Color <FaSort className="sortImage" alt="sort icon" />
            </div>
          </th>
          <th>
            <div className="gemQualityHeader" onClick={onClick}>
              Quality <FaSort className="sortImage" alt="sort icon" />
            </div>
          </th>
          <th>
            <div className="gemStatsHeader" onClick={onClick}>
              Stats <FaSort className="sortImage" alt="sort icon" />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {gems.map((gem) => (
          <tr key={gem.name}>
            <td className="gemNameCell">
              <p>{gem.name}</p>
              <img src={gem.image} alt="gem" />
            </td>
            <td className="gemColorCell" id={`${gem.color.toLowerCase()}Cells`}>
              {gem.color}
            </td>
            <td
              className="gemQualityCell"
              id={`${gem.quality.toLowerCase()}Cells`}
            >
              {gem.quality}
            </td>
            <td className="gemStatsCell">{gem.stats}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default GemTable;
