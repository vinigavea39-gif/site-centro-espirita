const container = document.querySelector('.particulas');

for (let i = 0; i < 40; i++) {
	const span = document.createElement('span');

	span.style.left = Math.random() * 100 + '%';
	span.style.top = Math.random() * 100 + '%';
	span.style.animationDuration = (3 + Math.random() * 4) + 's';
	span.style.opacity = Math.random();

	container.appendChild(span);
}
