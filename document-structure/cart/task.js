let productControll = Array.from(document.getElementsByClassName("product__quantity-control"));
let addPanels = Array.from(document.getElementsByClassName("product__add"));
let cardWithProduct = document.querySelector(".cart__products");



productControll.forEach(element => {
	if (element.classList.contains("product__quantity-control_dec")) {
		element.addEventListener("click", () => {
			if (Number(element.nextElementSibling.textContent) > 0) {
				element.nextElementSibling.textContent = Number(element.nextElementSibling.textContent) - 1;
			}
		})
	} else if (element.classList.contains("product__quantity-control_inc")) {
		element.addEventListener("click", () => {
			element.previousElementSibling.textContent = Number(element.previousElementSibling.textContent) + 1;
		})
	}
});


addPanels.forEach(element => {
	element.addEventListener("click", () => {
		let carProducts = Array.from(cardWithProduct.getElementsByClassName("cart__product"));
		let searchingIndex;



		let includeResult = carProducts.find((elem, index) => {
			if (elem.dataset.id === element.closest(".product").dataset.id) {
				searchingIndex = index;
				return true;
			} else { return false; };
		})


		if (!includeResult) {
			let addELement = document.createElement("div");
			let Photo = element.closest(".product").querySelector(".product__image");
			Photo.classList.add("cart__product-image");

			addELement.classList.add("cart__product");
			addELement.dataset.id = element.closest(".product").dataset.id;
			addELement.insertAdjacentElement("afterbegin", Photo.cloneNode(true))
			addELement.insertAdjacentHTML("beforeend", `<div class="cart__product-count"></div>`);
			addELement.insertAdjacentHTML("beforeend", `<div class="delete-button" style = "background: red; padding: 5px 2px; color: white; border-radius: 5px; cursor: pointer;">удалить товар</div>`);
			addELement.lastChild.addEventListener("click", () => {
				addELement.remove();
			})


			addELement.querySelector(".cart__product-count").textContent = Number(addELement.querySelector(".cart__product-count").textContent) + Number(element.previousElementSibling.querySelector(".product__quantity-value").textContent);
			document.querySelector(".cart__products").insertAdjacentElement("beforeend", addELement);
		} else {
			carProducts[searchingIndex].querySelector(".cart__product-count").textContent = Number(carProducts[searchingIndex].querySelector(".cart__product-count").textContent) + Number(element.previousElementSibling.querySelector(".product__quantity-value").textContent);
		}



	})
})
