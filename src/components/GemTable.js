import { FaSort } from 'react-icons/fa';
const GemTable = ({ gems, onClick }) => {
	return (
		<table className="gemTable">
			<thead>
				<tr className="headerItems">
					<th onClick={onClick}>
						<div className="gemName">
							Name <FaSort className="sortImage" alt="sort icon" />
						</div>
					</th>
					<th onClick={onClick}>
						<div className="gemColor">
							Color <FaSort className="sortImage" alt="sort icon" />
						</div>
					</th>
					<th onClick={onClick}>
						<div className="gemQuality">
							Quality <FaSort className="sortImage" alt="sort icon" />
						</div>
					</th>
					<th onClick={onClick}>
						<div className="gemStats">
							Stats <FaSort className="sortImage" alt="sort icon" />
						</div>
					</th>
				</tr>
			</thead>
			<tbody>
				{gems.map((gem) => (
					<tr key={gem.name}>
						<td className="gemNameCell">
							<p className="gemNameText">{gem.name}</p>
							<img src={gem.image} alt="image of gem" />
						</td>
						<td className="gemColorCell">{gem.color}</td>
						<td className="gemQualityCell">{gem.quality}</td>
						<td className="gemStatsCell">{gem.stats}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
export default GemTable;
