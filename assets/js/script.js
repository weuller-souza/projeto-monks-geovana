const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    const visible = nav.style.display === "flex";
    nav.style.display = visible ? "none" : "flex";
});

document.getElementById("scroll-button").addEventListener("click", () => {
    const sections = Array.from(document.querySelectorAll("main section"));
    const headerOffset = 100;
    const currentScroll = window.scrollY;

    const nextSection = sections.find(section => {
        return section.offsetTop > currentScroll + headerOffset;
    });

    if (nextSection) {
        const offsetTop = nextSection.offsetTop - headerOffset;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
});

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("cards__button")) {
        const text = event.target.previousElementSibling;
        if (text) {
            text.style.display = text.style.display === "block" ? "none" : "block";
        }
    }
});

$(document).ready(() => {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');

    function CPFValido(cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf.length == 11) return true;
    }

    function NumeroValido(telefone) {
        telefone = telefone.replace(/[^\d]+/g, '');
        if (telefone.length == 11) return true;
    }

    $('#Form').on('submit', function (e) {
        e.preventDefault();

        const nome = $('#nome').val().trim();
        const email = $('#email').val().trim();
        const telefone = $('#telefone').val().trim();
        const cpf = $('#cpf').val().trim();

        if (!CPFValido(cpf)) {
            alert('CPF inválido!');
            return;
        }

        if (!NumeroValido(telefone)) {
            alert('Telefone inválido!');
            return;
        }

        const dados = { nome, email, telefone, cpf };
        console.log('Dados enviados:');
        console.table(dados);

        alert('Formulário enviado com sucesso!');
        this.reset();
    });
});
