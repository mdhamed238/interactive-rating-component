const container = document.querySelector('.container');
const ratings = document.querySelectorAll('.rating');
const button = document.querySelector('button');

let RATING;

ratings.forEach((el) => {
	const listener = el.addEventListener('click', (e) => {
		const { target } = e;

		document
			.querySelectorAll('.rating')
			.forEach((el) => el.classList.remove('selected'));

		target.classList.toggle('selected');
		RATING = parseInt(target.innerHTML);
	});

	return () => el.removeEventListener('click', listener);
});

/* Submit button click event */
button.addEventListener('click', (e) => {
	if (!RATING) return;
	document.querySelector(
		'.badge'
	).innerHTML = `You selected ${RATING} out of 5`;
	container.classList.add('done');
});
