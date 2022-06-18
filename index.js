function ConverteDolar() {
    var valorInserido = document.getElementById("valor"); // atribui numero escrito na box dentro da variável
    var filtraValor = valorInserido.value; // pega apenas o numero escrito, sem essa linha, seria impresso toda a linha do programa
    var valorEmReal = parseFloat(filtraValor); // denomina o valor como variável decimal (flutuante)
  
    var valorEmDolar = valorEmReal / 5; // operação de conversão
  
    var valorEmDolarFixado = valorEmDolar.toFixed(2);
  
    var valorElementoD = document.getElementById("valorConvertido"); // endereço para mostrar a resposta na tela
    var valorConvertido = "O resultado em Dólar é R$ " + valorEmDolarFixado;
    valorElementoD.innerHTML = valorConvertido;
  }
  
  function ConverteIene() {
    var valorInserido = document.getElementById("valor"); // atribui numero escrito na box dentro da variável
    var filtraValor = valorInserido.value; // pega apenas o numero escrito, sem essa linha, seria impresso toda a linha do programa
    var valorEmDolar = parseFloat(filtraValor); // denomina o valor como variável decimal (flutuante)
  
    var valorEmIene = valorEmDolar * 20; // operação de conversão
  
    var valorEmIeneFixado = valorEmIene.toFixed(2);
  
    var valorElementoI = document.getElementById("valorConvertido"); // endereço para mostrar a resposta na tela
    var valorConvertido = "O resultado em Iene é Y " + valorEmIeneFixado;
    valorElementoI.innerHTML = valorConvertido;
  }
  