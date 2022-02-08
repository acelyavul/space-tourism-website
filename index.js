const exploreButton = document.querySelector(".main__button");
const mainNavButtons = document.querySelectorAll(".header__nav-link");
const firstSubNavButton = document.querySelector(".subnav__list");
const currentPage = document.URL.split("/").pop();
let activeButton = document.querySelector(`[href="${currentPage}"]`);

if (exploreButton)
	exploreButton.addEventListener("click", function () {
		location.assign("./destination-moon.html");
	});

function activateMainNavbar() {
	if (currentPage.includes("index") || currentPage.includes("commander") || currentPage.includes("vehicle")) {
		activeButton.closest("li").classList.add("active");
	}

	if (currentPage.includes("moon")) {
		activeButton.closest("li").classList.add("active");
		firstSubNavButton.firstElementChild.classList.add("active");
		firstSubNavButton.firstElementChild.classList.add("active--sub");
	}
}
activateMainNavbar();

function activateSubNavbar() {
	//class="active active--sub"
	if (currentPage.includes("mars") || currentPage.includes("europa") || currentPage.includes("titan")) {
		activeButton.closest("li").classList.add("active");
		activeButton.closest("li").classList.add("active--sub");
		mainNavButtons[1].parentElement.classList.add("active");
	}
}
activateSubNavbar();

function activateDotNavbar() {
	if (currentPage.includes("specialist") || currentPage.includes("pilot") || currentPage.includes("engineer")) {
		activeButton.classList.add("active--dot");
		mainNavButtons[2].parentElement.classList.add("active");
	}

	if (currentPage.includes("commander")) {
		activeButton = document.querySelectorAll(`[href="${currentPage}"]`);
		activeButton[1].classList.add("active--dot");
	}
}
activateDotNavbar();

function activateNumNavbar() {
	if (currentPage.includes("capsule") || currentPage.includes("spaceport")) {
		activeButton.classList.add("active--btn");
		activeButton.firstChild.classList.add("active--num");
		mainNavButtons[3].parentElement.classList.add("active");
	}

	if (currentPage.includes("vehicle")) {
		activeButton = document.querySelectorAll(`[href="${currentPage}"]`);
		activeButton[1].classList.add("active--btn");
		activeButton[1].firstChild.classList.add("active--num");
	}
}
activateNumNavbar();
