function checkLang() {
	const [lang, locale] = (navigator.userLanguage || navigator.language)
		.replace("-", "_")
		.toLowerCase()
		.split("_");
	console.log("LANG", lang, "LOCALE", locale);
}

function genLang() {
	var elem = document.getElementById("lang");
	console.log("gen");
	if (elem) {
		elem.innerHTML = `
      <a href="index.html" alt="Česky"><img src="/img/cz32.png" width="24" alt="Česky" /></a>&nbsp;
      <a href="index_de.html" alt="Deutsch"><img src="/img/de32.png" width="24" alt="Deutsch" /></a>&nbsp;
      <a href="index_en.html" alt="English"><img src="/img/en32.png" width="24" alt="English" /></a>
    `;
	}
}

function ini() {
	console.log("aaa");
	checkLang();
	genLang();
}

window.onload = ini;