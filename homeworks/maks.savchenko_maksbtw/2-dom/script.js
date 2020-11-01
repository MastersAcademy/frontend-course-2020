const chat = document.querySelector('#chat')
const subBtn = document.querySelector('#submit')
const input = document.querySelector('#input')

function sending(e){
	let value = document.querySelector('#input').value
	input.value = ''
	if(value.trim()){
		let display = `<span class="message">${value}</span>`
		chat.innerHTML += display
		document.querySelector('#typing').classList.remove('toggle')
	}
	else {

	}
}

subBtn.addEventListener('click', function(e) {
	sending(e)
})
/*Shortcut for sending messages*/
input.addEventListener('focus', function(event) {
	document.addEventListener('keydown', function(e) {
		if(e.keyCode == 13){
			sending(e)
		}
		else {

		}
	})
})

input.addEventListener('input', function(e) {
	let value = document.querySelector('#input').value
	if(value.trim()){
		document.querySelector('#typing').classList.add('toggle')
	}
	else {
		document.querySelector('#typing').classList.remove('toggle')
	}
})