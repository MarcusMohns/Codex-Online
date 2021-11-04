import React from 'react';
const GemTable = ({ gems, onClick }) => {
	return (
		<table className="gemTable">
			<thead>
				<tr className="headerItems">
					<th className="gemName" onClick={onClick}>
						Name
					</th>
					<th className="gemColor" onClick={onClick}>
						Color
					</th>
					<th className="gemQuality" onClick={onClick}>
						Quality
					</th>
					<th className="gemStats" onClick={onClick}>
						Stats
					</th>
				</tr>
			</thead>
			<tbody>
				{gems.map((gem) => (
					<tr key={gem.name}>
						<td className="gemNameAndImage">
							{gem.name}
							<img src={gem.image} />
						</td>
						<td className="gemColor">{gem.color}</td>
						<td className="gemQuality">{gem.quality}</td>
						<td className="gemStats">{gem.stats}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
export default GemTable;
