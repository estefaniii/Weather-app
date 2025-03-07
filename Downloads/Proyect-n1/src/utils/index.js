export function randomItem(arr) {
	const index = Math.floor(Math.random() * arr.length);
	return arr[index];
}
