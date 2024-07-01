// Seleciona todos os elementos com a classe "tab-btn" e adiciona um ouvinte de clique em cada um
const tabs = document.querySelectorAll(".tab-btn");
tabs.forEach((tab) => tab.addEventListener("click", () => tabClicked(tab)));

// Define a função que será chamada quando um dos botões for clicado
const tabClicked = (tab) => {
  // Remove a classe "active" de todos os botões
  tabs.forEach((tab) => tab.classList.remove("active"));
  // Adiciona a classe "active" no botão clicado
  tab.classList.add("active");

  // Seleciona todos os elementos com a classe "content" e remove a classe "show" de todos eles
  const contents = document.querySelectorAll(".content");
  contents.forEach((content) => content.classList.remove("show"));

  // Obtém o atributo "content-id" do botão clicado e usa-o para selecionar o respectivo elemento "content"
  const contentId = tab.getAttribute("content-id");
  const content = document.getElementById(contentId);

  // Adiciona a classe "show" no elemento "content" selecionado
  content.classList.add("show");
};

// Seleciona o botão de tab atualmente ativo e dispara a função "tabClicked" para ele
const currentActiveTab = document.querySelector(".tab-btn.active");
tabClicked(currentActiveTab);

// Seleciona todos os elementos com a classe "accordion" e adiciona um ouvinte de clique em cada um
const accordions = document.querySelectorAll(".accordion");
accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    // Seleciona o corpo do accordion e alterna a classe "active" para ele
    const body = accordion.querySelector(".accordion-body");
    body.classList.toggle("active");
  });
});

// Seleciona o campo de entrada de email, o formulário de contato e os elementos do erro
const inputMail = document.getElementById("email");
const contactUs = document.getElementById("contactUs");
const messageError = document.querySelector(".error-message");
const iconError = document.querySelector(".fa-circle-exclamation");

// Adiciona um ouvinte de clique ao formulário de contato que impede o envio padrão e valida a entrada do email
contactUs.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputMail.value === "" || !inputMail.value.endsWith(".com")) {
    // Adiciona a classe "error" ao campo de entrada de email e remove a classe "correct"
    inputMail.classList.add("error");
    inputMail.classList.remove("correct");
    // Exibe a mensagem e o ícone de erro
    messageError.style.display = "block";
    iconError.style.display = "block";
  } else {
    // Adiciona a classe "correct" ao campo de entrada de email e remove a classe "error"
    inputMail.classList.add("correct");
    inputMail.classList.remove("error");
    // Esconde a mensagem e o ícone de erro
    messageError.style.display = "none";
    iconError.style.display = "none";
  }
});

// Inicializa o ScrollReveal com animações para o elemento "cta-header"
ScrollReveal().reveal("header", {
  distance: "100%",
  origin: "right",
  duration: 2000,
});

ScrollReveal().reveal(".features", {
  distance: "50%",
  origin: "left",
  duration: 2000,
});
