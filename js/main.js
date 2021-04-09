function checkLang() {
	const [lang, locale] = (navigator.userLanguage || navigator.language)
		.replace("-", "_")
		.toLowerCase()
		.split("_");
	console.log("LANG", lang, "LOCALE", locale);
	console.log("LOCALSTORAGE", localStorage.getItem("lang"));
}

function goDE() {
	console.log("DE");
	localStorage.setItem("lang", "de");
}

function goCS() {
	console.log("CS");
	localStorage.setItem("lang", "cs");
}

function genLang() {
	var elem = document.getElementById("lang");
	console.log("gen");
	if (elem) {
		elem.innerHTML = `
      <a onclick="goCS()" alt="Česky"><img src="/img/cz32.png" width="24" alt="Česky" /></a>
      <a onclick="goDE()" alt="Deutsch"><img src="/img/de32.png" width="24" alt="Deutsch" /></a>
    `;
	}
}

function ini() {
	console.log("ini");
	checkLang();
	genLang();
}

window.onload = ini;

//      &nbsp;<a href="index_en.html" alt="English"><img src="/img/en32.png" width="24" alt="English" /></a>
