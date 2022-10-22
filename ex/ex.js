
function minhaPrimeiraFunc(){
  var palavra = prompt('Digite aqui para verificar se é um palindromo');
  var palindromo = palavra.split("").reverse().join("");

  if (palavra == palindromo) {

    alert('Palavra é um polindromo');

  } else {
    alert('Palavra não é um polindromo');

  }
} 