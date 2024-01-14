const burgerBtn = document.querySelector('.burger__btn')
const navMenu = document.querySelector('.nav__items')
const allNavItems = document.querySelectorAll('.nav__item')

//open/close bar menu
const handelMenu = (e) => {
	navMenu.classList.toggle('nav__items--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navMenu.classList.remove('nav__items--active')
		})
	})
}

//footer year
document.addEventListener('DOMContentLoaded', function () {
	const yrSpan = document.querySelector('.footer__year')
	const footerYear = new Date().getFullYear()
	yrSpan.textContent = footerYear
})

burgerBtn.addEventListener('click', handelMenu)
