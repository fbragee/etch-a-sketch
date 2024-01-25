const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
	let div = document.createElement('div');
	div.className = 'box';
	container.append(div);
}

const box = document.querySelector('.box');

box.addEventListener('hover', () => {});
