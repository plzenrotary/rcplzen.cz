// returns languages of the currently displayed page
function getCurrentPageLang() {
	const href = location.href;

	if (href.indexOf("index_de.html") !== -1) {
		return "de";
	}
	// TODO:
	// if (href.indexOf("index_en.html") !== -1) {
	// 	return "en";
	// }
	return "cs";
}

// returns either previously set or accepted language
function getCurrentLang() {
	// is it in local storage?
	const fromLocalStorage = localStorage.getItem("lang");
	if (fromLocalStorage) {
		return fromLocalStorage;
	}

	// not in local storage, get accepted language
	const [lang, locale] = (navigator.userLanguage || navigator.language)
		.replace("-", "_")
		.toLowerCase()
		.split("_");
	return lang;
}

// changes current page to the specified language
function switchPage(targetLang) {
	// TODO:
	// if (targetLang === "en") {
	// 	location.href = "index_en.html";
	// } else if (targetLang === "de") {
	// 	location.href = "index_de.html";
	// } else {
	// 	location.href = "index.html";
	// }
	if (targetLang === "de") {
		location.href = "index_de.html";
	} else {
		location.href = "index.html";
	}
}

// when the user clicks the german language
function goDE() {
	localStorage.setItem("lang", "de");
	switchPage("de");
}

// when the user clicks the czech language
function goCS() {
	localStorage.setItem("lang", "cs");
	switchPage("cs");
}

// when the user clicks the english language
function goEN() {
	localStorage.setItem("lang", "en");
	switchPage("en");
}

// generates bar with flags
function genLang() {
	var elem = document.getElementById("lang");
	if (elem) {
		elem.innerHTML = `
      <a onclick="goCS()" alt="Česky"><img src="/img/cz32.png" width="24" alt="Česky" /></a>
      <a onclick="goDE()" alt="Deutsch"><img src="/img/de32.png" width="24" alt="Deutsch" /></a>
    `;
	}
}

// TODO:
//      <a onclick="goEN()" alt="English"><img src="/img/en32.png" width="24" alt="English" /></a>

function ini() {
	// console.log("current lang", getCurrentLang());
	// console.log("current page lang", getCurrentPageLang());
	// console.log("locaStorage", localStorage.getItem("lang"));
	const currentLang = getCurrentLang();
	const currentPageLang = getCurrentPageLang();

	if (currentLang !== currentPageLang) {
		return switchPage(currentLang);
	}
	genLang();
}

window.onload = ini;
