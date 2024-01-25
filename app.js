const container = document.querySelector('.container');
const button = document.querySelector('button');

for (let i = 0; i < 256; i++) {
	let div = document.createElement('div');
	div.className = 'box';
	container.append(div);
	div.addEventListener('mouseover', () => {
		div.style.backgroundColor = 'black';
	});
}
