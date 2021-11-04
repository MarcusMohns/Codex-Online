import React from 'react';
const Gems = ({ gems }) => {
	return (
		<table className="gemTable">
			<thead>
				<tr className="headerItems">
					<th>Name</th>
					<th className="gemColor">Color</th>
					<th className="gemQuality">Quality</th>
					<th className="gemStats">Stats</th>
				</tr>
			</thead>
			<tbody>
				{gems.map((gem) => (
					<tr key={gem.name}>
						<td className="gemName">
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
export default Gems;
