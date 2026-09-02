const formatarDataAtual = () => {
  const agora = new Date();

  const diasSemana = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado'
  ];
  const diaSemana = diasSemana[agora.getDay()];

  const diaMês = String(agora.getDate()).padStart(2, '0');
  const mês = String(agora.getMonth() + 1).padStart(2, '0');
  const ano = agora.getFullYear();

  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');

  const offsetMinutos = agora.getTimezoneOffset();
  const sinal = offsetMinutos > 0 ? '-' : '+';
  const horasOffset = String(Math.floor(Math.abs(offsetMinutos) / 60)).padStart(2, '0');
  const minsOffset = String(Math.abs(offsetMinutos) % 60).padStart(2, '0');
  const fusoHorario = `(${sinal}${horasOffset}:${minsOffset})`;

  return `${diaSemana}, ${diaMês}/${mês}/${ano} – ${horas}:${minutos} ${fusoHorario}`;
};

const exibirSaudacaoBoasVindas = () => {
  const elementoSaudacao = document.querySelector('#saudacao');

  if (elementoSaudacao) {
    let usuario = prompt('Por favor, informe seu nome completo:');

    if (!usuario || usuario.trim() === '') {
      usuario = 'Usuário';
    }

    const dataAtual = formatarDataAtual();
    const mensagem = `Olá, ${usuario.trim()}! Hoje é ${dataAtual}`;

    elementoSaudacao.textContent = mensagem;
  }
};

const inicializarBuscaEmTempoReal = () => {
  const campoBusca = document.querySelector('#campoBusca');
  const linhasTabela = document.querySelectorAll('#tabelaCorpo tr');
  const cardsProfissao = document.querySelectorAll('.card-profissao');

  if (campoBusca) {
    campoBusca.addEventListener('input', (event) => {
      const termoBusca = event.target.value.toLowerCase().trim();

      linhasTabela.forEach((linha) => {
        const textoLinha = linha.textContent.toLowerCase();
        if (textoLinha.includes(termoBusca)) {
          linha.style.display = '';
        } else {
          linha.style.display = 'none';
        }
      });

      cardsProfissao.forEach((card) => {
        const textoCard = card.textContent.toLowerCase();
        if (textoCard.includes(termoBusca)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
};

const inicializarAlternanciaTema = () => {
  const btnTema = document.querySelector('#btnTema');

  if (btnTema) {
    btnTema.textContent = document.body.classList.contains('dark-theme') ? 'Modo Claro' : 'Modo Escuro';

    btnTema.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');

      if (document.body.classList.contains('dark-theme')) {
        btnTema.textContent = 'Modo Claro';
      } else {
        btnTema.textContent = 'Modo Escuro';
      }
    });
  }
};

const inicializarMenuMobile = () => {
  const btnMenu = document.querySelector('#btnMenuToggle');
  const menuList = document.querySelector('#menuList');

  if (btnMenu && menuList) {
    btnMenu.addEventListener('click', () => {
      menuList.classList.toggle('active');
    });
  }
};

exibirSaudacaoBoasVindas();
inicializarBuscaEmTempoReal();
inicializarAlternanciaTema();
inicializarMenuMobile();  