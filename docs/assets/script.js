import "./particles.js"

// load particles background for Contact section
// window.particlesJS.load = function(tag_id, path_config_json, callback)
particlesJS.load("contact", "assets/particlesjs-config.json")

// copy email to clipboard functionality
const btnCopyEmail = document.querySelector("#btn-copy-email")
const tooltipText = document.querySelector("#btn-copy-email span")
btnCopyEmail.addEventListener("click", () => {
	navigator.clipboard.writeText("ivanprovci@yahoo.com")
	tooltipText.textContent = "Copied!"
})
btnCopyEmail.addEventListener("mouseleave", () => {
	tooltipText.textContent = "Copy"
})

const modal = document.querySelector("#modal")
const modalImg = document.querySelector("#modalImg")
const allProjectImgs = document.querySelectorAll("img[alt='project image']")

allProjectImgs.forEach((projectImg) => {
	projectImg.addEventListener("click", () => {
		modal.classList.remove("hidden")
		modalImg.src = projectImg.src.replace("/images/project/thumb/", "/images/project/full/")
	})
})

modal.addEventListener("click", (e) => {
	if (e.target === modal) {
		modal.classList.add("hidden")
	}
})
