import "./particles.js"

// load particles background for Contact section
// window.particlesJS.load = function(tag_id, path_config_json, callback)
particlesJS.load('contact', 'assets/particlesjs-config.json');

// copy email to clipboard functionality
const btnCopyEmail = document.querySelector('#btn-copy-email')
const tooltipText = document.querySelector('#btn-copy-email span')
btnCopyEmail.addEventListener( 'click', () => {
    navigator.clipboard.writeText('ivanprovci@yahoo.com')
    tooltipText.textContent = "Copied!"
})
btnCopyEmail.addEventListener( 'mouseleave', () => {
    tooltipText.textContent = "Copy"
})