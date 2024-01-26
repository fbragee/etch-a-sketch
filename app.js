const container = document.querySelector('.container');
const button = document.querySelector('button');
let size = 100;
button.addEventListener('click', () => {
	size = prompt('Grid size ');
	for (let i = 0; i < size; i++) {
		let div = document.createElement('div');
		div.className = 'box';
		container.append(div);
		div.addEventListener('mouseover', () => {
			div.style.backgroundColor = 'black';
		});
	}
});
