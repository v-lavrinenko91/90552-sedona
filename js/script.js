var link = document.querySelector(".search-btn");
var popup = document.querySelector(".search-form");
var close = true;

link.addEventListener("click", function(event) {
	
	event.preventDefault();

	if (close) {
		popup.classList.add("popup-down");
		close = false;
	}

	else {
		popup.classList.remove("popup-down");
		close = true;
	}
});													