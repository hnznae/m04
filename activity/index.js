function circleRadius(radius) {
	let area = Math.PI * (radius**2);		
	return area;
}

let circleArea = circleRadius(10);
console.log(`The radius of the circle is ${circleArea}`);

function checkGrade(score, total) {
	let percentScore = (score * 100) / total;

	if (percentScore >= 75) {
		isPassed = percentScore.toFixed(2);
		percentScore = 1;
	}
	else if (percentScore <= 74) {
		isPassed = percentScore.toFixed(2);
		percentScore = 0;
	}

	return !!+percentScore;
}

let isPassingScore = checkGrade(13, 15);
console.log(`Your score is ${isPassed}%, have you passed? ${isPassingScore}`);