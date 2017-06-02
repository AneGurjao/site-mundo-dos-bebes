// BOTAO NEWSLETTER

var botaoNewsletter = document.querySelector(".button.newsletter");

function entrarEmail(){

	alert ("Cadastro realizado com sucesso!");
};

	botaoNewsletter.onclick = entrarEmail;





// BOTAO SIDEBAR HAMBURGUER
var botaoHamburguer = document.querySelector(".botao.hamburguer");

function mostrarSidebarEsquerda(){
	//Aqui vamos escrever o codigo de mostrar a sidebar
	var sidebarEsquerda = document.querySelector(".sidebar.esquerda");

	sidebarEsquerda.className = "sidebar esquerda ativo";
}
//Ao clicar executa alguma funçao
	botaoHamburguer.onclick = mostrarSidebarEsquerda;


// Fechar sidebar esquerda
var botaofechar = document.querySelector(".botao.fechar");

function fecharSidebarEsquerda(){
	// Aqui vamos escrever o codigo de mostrar a sidebar
	var sidebarEsquerda = document.querySelector(".sidebar.esquerda.ativo");
	sidebarEsquerda.className = "sidebar esquerda";
};

botaofechar.onclick = fecharSidebarEsquerda;




// BOTAO SIDEBAR LOGIN
var botaoLogin = document.querySelector(".botao.login");

function mostrarSidebarDireita(){
	var sidebarDireita = document.querySelector(".sidebar.direita");
	sidebarDireita.className = "sidebar direita ativo";
}
	botaoLogin.onclick = mostrarSidebarDireita;

 
 
 // fechar botao sidebar direita

var botaofechar = document.querySelector(".botao.fechar.direita");

function fecharSidebarDireita(){
	var sidebarDireita = document.querySelector(".sidebar.direita.ativo");
	// Aqui vamos escrever o codigo de mostrar a sidebar
	sidebarDireita.className = "sidebar direita";
};

	botaofechar.onclick = fecharSidebarDireita;


// BOTAO DESEJO

var botaoDesejo = document.querySelectorAll(".botao.desejo");

function mudarCor(){

	if(this.className == "btn botao desejo vermelho"){

		this.className = "btn botao desejo";

	} else{
		this.className = "btn botao desejo vermelho";	
	}
	
} 
		botaoDesejo[0].onclick = mudarCor;
		botaoDesejo[1].onclick = mudarCor;
		botaoDesejo[2].onclick = mudarCor;

