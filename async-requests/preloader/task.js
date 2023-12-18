const loadImg = document.querySelector(".loader");
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses", true);
xhr.send();

let coinItemStorage = document.getElementById("items");
let coinItem = document.createElement("div");
coinItem.classList.add("item")
coinItem.insertAdjacentHTML("afterbegin", `<div class="item__code"></div><div class="item__value"></div><div class="item__currency">руб.</div>`)

xhr.addEventListener("readystatechange", () => {
	if (xhr.readyState === xhr.DONE && xhr.status === 200) {
		loadImg.classList.remove("loader_active");
		let data = JSON.parse(xhr.responseText).response.Valute;

		for (let key in data) {
			let newItem = coinItem.cloneNode(true);
			newItem.querySelector(".item__code").textContent = data[key].CharCode;
			newItem.querySelector(".item__value").textContent = data[key].Value;
			coinItemStorage.append(newItem);
		}
	}
})