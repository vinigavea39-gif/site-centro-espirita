const container = document.querySelector('.particulas');

for (let i = 0; i < 80; i++) {
	const span = document.createElement('span');

	let p = document.createElement("span");
	p.classList.add("particulas");

	p.style.left = Math.random() * 100 + "vw";
	p.style.animationDuration = (10 + Math.random() * 10) + "s";
	p.style.animationDelay = Math.random() * 5 + "s";

	container.appendChild(p);

	
}
