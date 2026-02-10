const btnTema = document.getElementById("btn-tema");

if (btnTema) {
	const icone = btnTema.querySelector("i");

	// Ao carregar a página, aplica o tema salvo
	const temaSalvo = localStorage.getItem("tema");

	if (temaSalvo === "escuro") {
		document.body.classList.add("tema-escuro");
		icone.classList.remove("fa-moon");
		icone.classList.add("fa-sun");
	}

	btnTema.addEventListener("click", () => {
		document.body.classList.toggle("tema-escuro");

		if (document.body.classList.contains("tema-escuro")) {
			localStorage.setItem("tema", "escuro");
			icone.classList.remove("fa-moon");
			icone.classList.add("fa-sun");
		} else {
			localStorage.setItem("tema", "claro");
			icone.classList.remove("fa-sun");
			icone.classList.add("fa-moon");
		}




	});
}