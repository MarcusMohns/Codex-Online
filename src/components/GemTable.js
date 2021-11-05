import { FaSort } from 'react-icons/fa';
const GemTable = ({ gems, onClick }) => {
	return (
		<table className="gemTable">
			<thead>
				<tr className="headerItems">
					<th className="gemName" onClick={onClick}>
						Name <FaSort />
					</th>
					<th className="gemColor" onClick={onClick}>
						Color <FaSort />
					</th>
					<th className="gemQuality" onClick={onClick}>
						Quality <FaSort />
					</th>
					<th className="gemStats" onClick={onClick}>
						Stats
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
