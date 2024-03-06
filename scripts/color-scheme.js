document.addEventListener("DOMContentLoaded", function () {
	const themeSwitch = document.getElementById("theme-switch");
	const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
	const svg = document.querySelectorAll("svg");
	const isLightMode = localStorage.getItem("theme") === "light";

	// Appliquer le thème initial en fonction de la préférence enregistrée ou du système
	if (localStorage.getItem("theme")) {
		document.body.classList.toggle("light-mode", isLightMode);
		svg.forEach((svg) => svg.classList.toggle("light-mode", isLightMode));
		themeSwitch.checked = !isLightMode;
	} else if (prefersDarkScheme.matches) {
		document.body.classList.remove("light-mode");
		themeSwitch.checked = true;
	} else {
		document.body.classList.add("light-mode");
		svg.forEach((svg) => svg.classList.add("light-mode"));
		themeSwitch.checked = false;
	}

	themeSwitch.addEventListener("change", function () {
		const isLightMode = document.body.classList.toggle("light-mode");
		localStorage.setItem("theme", isLightMode ? "light" : "dark");

		svg.forEach((svg) => svg.classList.toggle("light-mode", isLightMode));
	});
});
