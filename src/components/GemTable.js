import React from 'react';
const Gems = ({ gems }) => {
	return (
		<table className="gemTable">
			<thead>
				<tr className="headerItems">
					<th>Name</th>
					<th>Color</th>
					<th>Quality</th>
					<th>Stats</th>
				</tr>
			</thead>
			<tbody>
				{gems.map((gem) => (
					<tr key={gem.name}>
						<td className="gemName">{gem.name}</td>
						<td>{gem.color}</td>
						<td className="gemQuality">{gem.quality}</td>
						<td>{gem.stats}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
export default Gems;
