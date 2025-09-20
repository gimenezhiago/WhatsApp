export const FormatarNumeroTelefone = (numero) => {
  const numeroApenasDigitos = numero.replace(/\D/g, "");
  if (numeroApenasDigitos.length === 11) {
    return numeroApenasDigitos.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"); // Formato (XX XXXXX-XXXX)
  }
  return numero;
};

export const ManipularMudançaTelefone = (e) => {
  const formatado = FormatarNumeroTelefone(e.target.value);
  setNumeroTelefone(formatado);
};
