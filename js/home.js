let rodape = document.querySelector('.rodape')

//lets do id
let collback = document.querySelector('.collback')

//lets da loja
let spanzin = document.querySelector('.spanzin')
let spanzin2 = document.querySelector('.spanzin2')
let spanzin3 = document.querySelector('.spanzin3')
let spanzin4 = document.querySelector('.spanzin4')
let spanzin5 = document.querySelector('.spanzin5')
let spanzin6 = document.querySelector('.spanzin6')
let spanzin7 = document.querySelector('.spanzin7')
let spanzin8 = document.querySelector('.spanzin8')

let loja_event = document.querySelector('.loja-event')

let loja = document.querySelector('.loja')
let inventario = document.querySelector('.inventario')
let colecao = document.querySelector('.colecao')
let melhorar = document.querySelector('.melhorar')
let convocacao = document.querySelector('.convocacao')

let lc_img = document.querySelector('.lc-img')
let lc_div = document.querySelector('.lc-div')

let loja_equip = document.querySelector('.loja-equip')
let le_img = document.querySelector('.le-img')
let le_div = document.querySelector('.le-div')

let loja_skins = document.querySelector('.loja-skins')
let lsk_img = document.querySelector('.lsk-img')
let lsk_div = document.querySelector('.lsk-div')

let loja_mr = document.querySelector('.loja-mr')
let lmr_img = document.querySelector('.lmr-img')
let lmr_div = document.querySelector('.lmr-div')

let loja_km = document.querySelector('.loja-km')
let lkm_img = document.querySelector('.lkm-img')
let lkm_div = document.querySelector('.lkm-div')

let loja_medalha = document.querySelector('.loja-medalha')
let lme_img = document.querySelector('.lme-img')
let lme_div = document.querySelector('.lme-div')

let loja_espelho = document.querySelector('.loja-espelho')
let lesp_img = document.querySelector('.lesp-img')
let lesp_div = document.querySelector('.lesp-div')

let loja_tampa = document.querySelector('.loja-tampa')
let lt_img = document.querySelector('.lt-img')
let lt_div = document.querySelector('.lt-div')

var img = lc_img
var div = lc_div
var span = spanzin

function mostra() {
	if (img.classList.contains('invisivel') == false) {

		div.classList.remove('invisivel')
		div.classList.remove('blur')
		div.classList.add('no-blur')

		span.classList.remove('invisivel')
		span.classList.remove('blur')
		span.classList.add('no-blur')
	} else {
		img.classList.remove('invisivel')
		img.classList.remove('blur')
		img.classList.add('no-blur')
	}
}

//evento da loja
loja_event.addEventListener('click', function() {

	inventario.classList.add('invisivel', 'blur')
	inventario.classList.remove('no-blur')

	colecao.classList.add('invisivel', 'blur')
	colecao.classList.remove('no-blur')

	melhorar.classList.add('invisivel', 'blur')
	melhorar.classList.remove('no-blur')

	convocacao.classList.add('invisivel', 'blur')
	convocacao.classList.remove('no-blur')

	loja.classList.remove('invisivel', 'blur')
	loja.classList.add('no-blur')

	img = lc_img
	div = lc_div
	span = spanzin

	setInterval(mostra, 2000)
	clearInterval(mostra)
})

spanzin.addEventListener('click', function() {
	spanzin.classList.add('invisivel')

	loja_equip.classList.remove('invisivel', 'blur')
	loja_equip.classList.add('no-blur')

	img = le_img
	div = le_div
	span = spanzin2

	setTimeout(mostra, 2000)
	clearInterval(mostra)
})

spanzin2.addEventListener('click', function() {
	spanzin2.classList.add('invisivel')

	loja_skins.classList.remove('invisivel', 'blur')
	loja_skins.classList.add('no-blur')

	img = lsk_img
	div = lsk_div
	span = spanzin3

	setTimeout(mostra, 2000)
	clearInterval(mostra)
})

spanzin3.addEventListener('click', function() {
	spanzin3.classList.add('invisivel')

	loja_mr.classList.remove('invisivel', 'blur')
	loja_mr.classList.add('no-blur')

	img = lmr_img
	div = lmr_div
	span = spanzin4

	setTimeout(mostra, 2000)
	clearInterval(mostra)
})

spanzin4.addEventListener('click', function() {
	spanzin4.classList.add('invisivel')

	loja_km.classList.remove('invisivel', 'blur')
	loja_km.classList.add('no-blur')

	img = lkm_img
	div = lkm_div
	span = spanzin5

	setTimeout(mostra, 2000)
	clearInterval(mostra)
})

spanzin5.addEventListener('click', function() {
	spanzin5.classList.add('invisivel')

	loja_medalha.classList.remove('invisivel', 'blur')
	loja_medalha.classList.add('no-blur')

	img = lme_img
	div = lme_div
	span = spanzin6

	setTimeout(mostra, 2000)
	clearInterval(mostra)
})

spanzin6.addEventListener('click', function() {
	spanzin6.classList.add('invisivel')

	loja_espelho.classList.remove('invisivel', 'blur')
	loja_espelho.classList.add('no-blur')

	img = lesp_img
	div = lesp_div
	span = spanzin7

	setTimeout(mostra, 2000)
	clearInterval(mostra)
})

spanzin7.addEventListener('click', function() {
	spanzin7.classList.add('invisivel')

	loja_tampa.classList.remove('invisivel', 'blur')
	loja_tampa.classList.add('no-blur')

	img = lt_img
	div = lt_div
	span = spanzin8

	setTimeout(mostra, 2000)
	clearInterval(mostra)
})

//lets do inventario
let invent_event = document.querySelector('.invent-event')

let ie_img = document.querySelector('.ie_img') 
let ie_div = document.querySelector('.ie_div') 

let invent_sel = document.querySelector('.invent_sel')
let is_img = document.querySelector('.is_img')
let is_div = document.querySelector('.is_div')

let spanzin1e = document.querySelector('.spanzin1e') 
let spanzin2e = document.querySelector('.spanzin2e') 


//evento do inventario
invent_event.addEventListener('click', function() {
	collback.removeAttribute('id')
	collback.setAttribute('id', 'inventario')

	loja.classList.add('invisivel', 'blur')
	loja.classList.remove('no-blur')

	convocacao.classList.add('invisivel', 'blur')
	convocacao.classList.remove('no-blur')

	melhorar.classList.add('invisivel', 'blur')
	melhorar.classList.remove('no-blur')

	colecao.classList.add('invisivel', 'blur')
	colecao.classList.remove('no-blur')

	spanzincv.classList.add('invisivel', 'blur')
	spanzincv.classList.remove('no-blur')

	inventario.classList.remove('invisivel', 'blur')
	inventario.classList.add('no-blur')

	img = ie_img
	div = ie_div
	span = spanzin1e

	setInterval(mostra, 2000)
	clearInterval(mostra)
})

spanzin1e.addEventListener('click', function() {
	spanzin1e.classList.add('invisivel')

	invent_sel.classList.remove('invisivel', 'blur')
	invent_sel.classList.add('no-blur')

	img = is_img
	div = is_div
	span = spanzin2e

	setTimeout(mostra, 2000)
	clearInterval(mostra)
})

//lets da coleção
let colect_event = document.querySelector('.colect-event')

let ce_img = document.querySelector('.ce_img') 
let ce_div = document.querySelector('.ce_div') 

let ch_img = document.querySelector('.ch_img')
let ch_div = document.querySelector('.ch_div')

let ch2_img = document.querySelector('.ch2_img')
let ch2_div = document.querySelector('.ch2_div')

let spanzin1c = document.querySelector('.spanzin1c') 
let spanzin2c = document.querySelector('.spanzin2c') 
let spanzin3c = document.querySelector('.spanzin3c') 


//evento da coleção
colect_event.addEventListener('click', function() {
	collback.removeAttribute('id')
	collback.setAttribute('id', 'colecao')

	inventario.classList.add('invisivel', 'blur')
	inventario.classList.remove('no-blur')

	melhorar.classList.add('invisivel', 'blur')
	melhorar.classList.remove('no-blur')

	convocacao.classList.add('invisivel', 'blur')
	convocacao.classList.remove('no-blur')

	loja.classList.add('invisivel', 'blur')
	loja.classList.remove('no-blur')

	spanzincv.classList.add('invisivel', 'blur')
	spanzincv.classList.remove('no-blur')

	colecao.classList.remove('invisivel', 'blur')
	colecao.classList.add('no-blur')

	img = ce_img
	div = ce_div
	span = spanzin1c

	setInterval(mostra, 2000)
	clearInterval(mostra)
})

spanzin1c.addEventListener('click', function() {
	spanzin1c.classList.add('invisivel')

	img = ch_img
	div = ch_div
	span = spanzin2c

	setTimeout(mostra, 2000)
	clearInterval(mostra)
})

spanzin2c.addEventListener('click', function() {
	spanzin2c.classList.add('invisivel')

	img = ch2_img
	div = ch2_div
	span = spanzin3c

	setTimeout(mostra, 2000)
	clearInterval(mostra)
})

//lets do melhorar
let upgrade_event = document.querySelector('.upgrade-event')

let ug_img = document.querySelector('.ug_img') 
let ug_div = document.querySelector('.ug_div') 

let ul_img = document.querySelector('.ul_img')
let ul_div = document.querySelector('.ul_div')

let uo_img = document.querySelector('.uo_img')
let uo_div = document.querySelector('.uo_div')

let ue_img = document.querySelector('.ue_img')
let ue_div = document.querySelector('.ue_div')

let spanzin1m = document.querySelector('.spanzin1m') 
let spanzin2m = document.querySelector('.spanzin2m') 
let spanzin3m = document.querySelector('.spanzin3m') 
let spanzin4m = document.querySelector('.spanzin4m') 


//evento do melhorar
upgrade_event.addEventListener('click', function() {
	collback.removeAttribute('id')
	collback.setAttribute('id', 'upgrade')

	colecao.classList.add('invisivel', 'blur')
	colecao.classList.remove('no-blur')

	loja.classList.add('invisivel', 'blur')
	loja.classList.remove('no-blur')

	inventario.classList.add('invisivel', 'blur')
	inventario.classList.remove('no-blur')

	convocacao.classList.add('invisivel', 'blur')
	convocacao.classList.remove('no-blur')

	spanzincv.classList.add('invisivel', 'blur')
	spanzincv.classList.remove('no-blur')

	melhorar.classList.remove('invisivel', 'blur')
	melhorar.classList.add('no-blur')

	img = ug_img
	div = ug_div
	span = spanzin1m

	setInterval(mostra, 2000)
	clearInterval(mostra)
})

spanzin1m.addEventListener('click', function() {
	spanzin1m.classList.add('invisivel')

	img = ul_img
	div = ul_div
	span = spanzin2m

	setTimeout(mostra, 2000)
	clearInterval(mostra)
})

spanzin2m.addEventListener('click', function() {
	spanzin2m.classList.add('invisivel')

	img = uo_img
	div = uo_div
	span = spanzin3m

	setTimeout(mostra, 2000)
	clearInterval(mostra)
})

spanzin3m.addEventListener('click', function() {
	spanzin3m.classList.add('invisivel')

	img = ue_img
	div = ue_div
	span = spanzin4m

	setTimeout(mostra, 2000)
	clearInterval(mostra)
})

//lets da convocação
let convoc_event = document.querySelector('.convoc-event')

let cv_img = document.querySelector('.cv_img') 
let cv_div = document.querySelector('.cv_div') 

let spanzincv = document.querySelector('.spanzincv') 


//evento da convocação
convoc_event.addEventListener('click', function() {
	collback.removeAttribute('id')
	collback.setAttribute('id', 'convocacao')

	melhorar.classList.add('invisivel', 'blur')
	melhorar.classList.remove('no-blur')

	loja.classList.add('invisivel', 'blur')
	loja.classList.remove('no-blur')

	colecao.classList.add('invisivel', 'blur')
	colecao.classList.remove('no-blur')

	inventario.classList.add('invisivel', 'blur')
	inventario.classList.remove('no-blur')

	convocacao.classList.remove('invisivel', 'blur')
	convocacao.classList.add('no-blur')

	img = cv_img
	div = cv_div
	span = spanzincv

	setInterval(mostra, 2000)
	clearInterval(mostra)
})