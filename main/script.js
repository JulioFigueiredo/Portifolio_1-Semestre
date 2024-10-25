const botaoAI = document.getElementById('botaoAI');
const botaoDevWeb = document.getElementById('botaoDevWeb');
const botaoBancoDeDados = document.getElementById('botaoBancoDeDados');
const botaoLinguagemDeProg = document.getElementById('botaoLinguagemDeProg');
const botaoCienciaDeDados = document.getElementById('botaoCienciaDeDados');
const botaoPOO = document.getElementById('botaoPOO');
const teste = document.getElementById('teste');

function carregarPagina(url) {
    document.getElementById("conteudoFrame").src = url;
}

botaoAI.addEventListener('click', ExibirAI);
botaoDevWeb.addEventListener('click', ExibirDevWeb);
botaoBancoDeDados.addEventListener('click', ExibirBancoDeDados);
botaoLinguagemDeProg.addEventListener('click', ExibirLinguagemDeProg);
botaoCienciaDeDados.addEventListener('click', ExibirCienciaDeDados);
botaoPOO.addEventListener('click', ExibirPOO);

function ExibirAI() {
    carregarPagina("/AutomaçãoIndustrial/AI.html");
    teste.textContent = '';
}

function ExibirDevWeb() {
    carregarPagina("/DesenvolvimentoWeb/DevWeb.html")
    teste.textContent = '';
}

function ExibirBancoDeDados() {
    carregarPagina("/BancoDeDados/BD.html")
    teste.textContent = '';
}

function ExibirLinguagemDeProg() {
    carregarPagina("/LinguagemProg/LP.html")
    teste.textContent = '';
}

function ExibirCienciaDeDados() {
    carregarPagina("/CienciaDeDados/CD.html")
    teste.textContent = '';
}

function ExibirPOO() {
    carregarPagina("/POO/POO.html")
    teste.textContent = '';
}

