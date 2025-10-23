function inverterNumero(numero) {
  // Converte o número para string
  const numeroStr = numero.toString();

  // Verifica se é negativo
  const ehNegativo = numeroStr.startsWith('-');

  // Remove o sinal negativo (se houver), inverte e reconstrói
  const invertido = numeroStr
    .replace('-', '')        // remove o sinal
    .split('')               // separa os dígitos
    .reverse()               // inverte a ordem
    .join('');               // junta novamente

  // Retorna como número, com sinal se necessário
  return ehNegativo ? -parseInt(invertido) : parseInt(invertido);
}

// Exemplos de uso:
console.log(inverterNumero(123));     // 321
console.log(inverterNumero(-456));    // -654
console.log(inverterNumero(1000));    // 1