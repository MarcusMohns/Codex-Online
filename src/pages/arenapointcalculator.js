import { ArenaContainer } from '../components/styles/ArenaContainer.styled';
import React, { useReducer } from 'react';
import { Container } from '../components/styles/Container.styled';
import Header from '../components/Header';

const formReducer = (state, event) => {
	return {
		...state,
		[event.name]: event.value
	};
};

const handleSelect = (event) => {
	event.target.select();
};

const ratingRequried = (pointsNeeded, percentage) => {
	let the_ratingRequired = 0;
	if (
		(pointsNeeded <= 261 && percentage === 0.76) ||
		(pointsNeeded <= 302 && percentage === 0.88) ||
		(pointsNeeded <= 344 && percentage === 1)
		// in 3.3.5 you are rewarded a baseline amount of points if you are 1500 or below
	)
		return the_ratingRequired;
	else
		the_ratingRequired = Math.ceil(
			Math.log(1511.26 / (1639.28 * pointsNeeded / percentage) - 1 / 1639.28) / -0.00412
		);

	return the_ratingRequired ? the_ratingRequired : 'Not possible';
};

const pointsRewarded = (bracketName, rating) => {
	let points = 0;
	if (bracketName === 'twos') {
		if (rating > 1500) points = 0.76 * (1511.26 / (1 + 1639.29 * Math.pow(2.71828, -0.00412 * rating)));
		else points = 261;
	} else if (bracketName === 'threes') {
		if (rating > 1500) points = 0.88 * (1511.26 / (1 + 1639.29 * Math.pow(2.71828, -0.00412 * rating)));
		else points = 302;
	} else if (bracketName === 'fives') {
		if (rating > 1500) points = 1511.26 / (1 + 1639.29 * Math.pow(2.71828, -0.00412 * rating));
		else points = 344;
	} else console.log('Error');

	return Math.floor(points);
};

function Arenapointcalculator() {
	const [ formData, setFormData ] = useReducer(formReducer, {});

	const handleChange = (event) => {
		setFormData({
			name: event.target.name,
			value: pointsRewarded(event.target.name, event.target.value)
		});
	};

	const pointChange = (event) => {
		setFormData({
			name: 'twosRatingRequired',
			value: ratingRequried(event.target.value, 0.76)
		});
		setFormData({
			name: 'threesRatingRequired',
			value: ratingRequried(event.target.value, 0.88)
		});
		setFormData({
			name: 'fivesRatingRequired',
			value: ratingRequried(event.target.value, 1)
		});
	};

	return (
		<main>
			<Header title="Arena Point Calculator" />
			<Container style={{ maxWidth: '50%' }}>
				<ArenaContainer>
					<form onChange={handleChange} onSelect={handleSelect} autoComplete="off">
						<table>
							<caption>
								Input your current rating in the appropriate bracket to calculate how many arena points
								you will recieve at the end of the week
							</caption>
							<tbody>
								<tr>
									<th scope="col">Bracket</th>
									<th scope="col">Your Rating</th>
									<th scope="col">Arena Points</th>
								</tr>

								<tr>
									<th scope="row">2v2</th>
									<td>
										<input type="number" name="twos" />
									</td>
									<td>{formData.twos}</td>
								</tr>

								<tr>
									<th scope="row">3v3</th>
									<td>
										<input type="number" name="threes" />
									</td>
									<td>{formData.threes}</td>
								</tr>

								<tr>
									<th scope="row">5v5</th>
									<td>
										<input type="number" name="fives" />
									</td>
									<td>{formData.fives}</td>
								</tr>
							</tbody>
						</table>
					</form>
				</ArenaContainer>

				<ArenaContainer>
					<form onChange={pointChange} onSelect={handleSelect} autoComplete="off">
						<table>
							<caption>
								Calculate what rating you need acheive in order to get the points you want
							</caption>
							<tbody>
								<tr>
									<th scope="col">Points needed</th>
									<th scope="col">Bracket</th>
									<th scope="col">Arena Rating Required</th>
								</tr>

								<tr>
									<th />
									<th scope="row">2v2</th>
									<td>{formData.twosRatingRequired}</td>
								</tr>

								<tr>
									<td colSpan="0">
										<input type="number" name="threes" />
									</td>
									<th scope="row">3v3</th>
									<td>{formData.threesRatingRequired}</td>
								</tr>

								<tr>
									<th />
									<th scope="row">5v5</th>
									<td>{formData.fivesRatingRequired}</td>
								</tr>
							</tbody>
						</table>
					</form>
				</ArenaContainer>
			</Container>
		</main>
	);
}
//
// <td>{formData.fivesRatingRequired}</td>

export default Arenapointcalculator;
