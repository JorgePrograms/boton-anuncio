const btnCarro=document.getElementById('carro');
const ventana=document.getElementById('ventana');
const anuncio=document.getElementById('anuncio');
const closeBtn=document.getElementById('close-btn')

let ventanaVisible=false;

const mostrarAnuncio = () => {
	if(!ventanaVisible){
		ventana.style.display = 'block';
	ventanaVisible=true;
	}
	
};

const ocultarAnuncio=()=>{
	if(ventanaVisible){
		ventana.style.display='none';
	ventanaVisible=false;
	}
	
}

closeBtn.addEventListener('click',()=>{
	ocultarAnuncio();
})

btnCarro.addEventListener('click',()=>{
		mostrarAnuncio();
})


ventana.addEventListener('click',(e)=>{
	if(ventanaVisible && e.target===ventana){
		ocultarAnuncio();
	}
})






