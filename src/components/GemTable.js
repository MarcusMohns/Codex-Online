import { FaSort } from 'react-icons/fa';
const GemTable = ({ gems, onClick }) => {
	return (
		<table className="gemTable">
			<thead>
				<tr>
					<th onClick={onClick}>
						<div className="gemNameHeader">
							Name <FaSort className="sortImage" alt="sort icon" />
						</div>
					</th>
					<th onClick={onClick}>
						<div className="gemColorHeader">
							Color <FaSort className="sortImage" alt="sort icon" />
						</div>
					</th>
					<th onClick={onClick}>
						<div className="gemQualityHeader">
							Quality <FaSort className="sortImage" alt="sort icon" />
						</div>
					</th>
					<th onClick={onClick}>
						<div className="gemStatsHeader">
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
							<img src={gem.image} alt="image of gem" />
						</td>
						<td className="gemColorCell" id={`${gem.color.toLowerCase()}Cells`}>
							{gem.color}
						</td>
						<td className="gemQualityCell" id={`${gem.quality.toLowerCase()}Cells`}>
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
