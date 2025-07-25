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

$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');

    function NumeroValido(telefone) {
        telefone = telefone.replace(/[^\d]+/g, '');
        return telefone.length === 11;
    }

    function CPFValido(cpf) {
        var Soma = 0
        var Resto

        var strCPF = String(cpf).replace(/[^\d]/g, '')

        if (strCPF.length !== 11)
            return false

        if ([
            '00000000000',
            '11111111111',
            '22222222222',
            '33333333333',
            '44444444444',
            '55555555555',
            '66666666666',
            '77777777777',
            '88888888888',
            '99999999999',
        ].indexOf(strCPF) !== -1)
            return false

        for (i = 1; i <= 9; i++)
            Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

        Resto = (Soma * 10) % 11

        if ((Resto == 10) || (Resto == 11))
            Resto = 0

        if (Resto != parseInt(strCPF.substring(9, 10)))
            return false

        Soma = 0

        for (i = 1; i <= 10; i++)
            Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)

        Resto = (Soma * 10) % 11

        if ((Resto == 10) || (Resto == 11))
            Resto = 0

        if (Resto != parseInt(strCPF.substring(10, 11)))
            return false

        return true
    }

    $('#Form').on('submit', function (e) {
        e.preventDefault();

        const nome = $('#nome').val().trim();
        const email = $('#email').val().trim();
        const telefone = $('#telefone').val().trim();
        const cpf = $('#cpf').val().trim();

        if (!NumeroValido(telefone)) {
            alert('Telefone inválido!');
            return;
        }

        if (!CPFValido(cpf)) {
            alert('CPF inválido!');
            return;
        }

        const dados = { nome, email, telefone, cpf };
        console.log('Dados enviados:');
        console.table(dados);

        alert('Formulário enviado com sucesso!');
        this.reset();
    });
});
