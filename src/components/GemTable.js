import { FaSort } from 'react-icons/fa';
const GemTable = ({ gems, onClick }) => {
	return (
		<table className="gemTable">
			<thead>
				<tr className="headerItems">
					<th onClick={onClick}>
						<div className="gemName">
							Name <FaSort className="sortImage" />
						</div>
					</th>
					<th onClick={onClick}>
						<div className="gemColor">
							Color <FaSort className="sortImage" />
						</div>
					</th>
					<th onClick={onClick}>
						<div className="gemQuality">
							Quality <FaSort className="sortImage" />
						</div>
					</th>
					<th onClick={onClick}>
						<div className="gemStats">Stats</div>
					</th>
				</tr>
			</thead>
			<tbody>
				{gems.map((gem) => (
					<tr key={gem.name}>
						<td className="gemNameCell">
							{gem.name}
							<img src={gem.image} />
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
