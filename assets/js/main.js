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

  // O script só executa o prompt se o elemento #saudacao existir na página atual (Dashboard)
  if (elementoSaudacao) {
    let usuario = prompt('Por favor, informe seu nome completo:');

    if (!usuario || usuario.trim() === '') {
      usuario = 'Usuário';
    }

    const dataAtual = formatarDataAtual();
    const mensagem = `Olá, ${usuario.trim()}! Hoje é ${dataAtual}`;

    elementoSaudacao.textContent = mensagem;
    console.log('Mensagem gerada:', mensagem);
  }
};

exibirSaudacaoBoasVindas();