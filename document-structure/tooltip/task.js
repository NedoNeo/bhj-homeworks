let tooltips = Array.from(document.getElementsByClassName("has-tooltip"));
let tool;

tooltips.forEach(element => {
	element.insertAdjacentHTML("afterEnd", `<div class="tooltip"></div>`);

	element.addEventListener("click", () => {
		event.preventDefault();

		tool = element.title;
		let elementPosition = element.getBoundingClientRect();


		element.nextElementSibling.style.top = `${elementPosition.bottom}px`;
		element.nextElementSibling.style.left = `${elementPosition.left}px`;
		element.nextElementSibling.textContent = tool;
		element.nextElementSibling.classList.toggle("tooltip_active");
	})


});