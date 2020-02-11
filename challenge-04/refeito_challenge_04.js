




/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

const isTruthy =  (valueBoolean) => !!valueBoolean;


// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

const valuesFalsy = [NaN, undefined, 0, '', "", false, null];

for (let index = 0; index < valuesFalsy.length; index++) {
  console.log(`${valuesFalsy[index]}`, isTruthy(valuesFalsy[index]));

}

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

const valuesTruhty = [[], {}, 1, 'string preencida', "string preencida", true, ];

for (let index = 0; index < valuesTruhty.length; index++) {
  console.log(`${valuesTruhty[index]}`, isTruthy(valuesTruhty[index]));

}

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

const carro = {
  marca: 'Wolksvagen',
  modelo: 'Fusca',
  placa: 'xpto9999',
  ano: 1967,
  cor: 'Azul',
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0,
};



/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudaCor = function (cor){
  carro.cor = cor;
}


/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = function (){
  return carro.cor
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.obterModelo = function (){
  return carro.modelo
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = function (){
  return carro.marca
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = function (){
  let { marca, modelo } = carro;

  return `"Esse carro é um ${marca} ${modelo}"`
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:

- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.

- O método deve retornar a frase: "Já temos [X] pessoas no carro!"

- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"

- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"

- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/




/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro*/

// Mude a cor do carro para vermelho.
carro.mudaCor("vermelho");carro.adicionarPessoa = function (pessoaEntrando){
  let { assentos, quantidadePessoas} = carro;
  let quantasPessoasCabem = assentos - quantidadePessoas;
  var textoPessoa = quantasPessoasCabem === 1 ? 'pessoa' : 'pessoas';
  let totalPessoas = quantidadePessoas + pessoaEntrando;

  if (quantidadePessoas === assentos && totalPessoas >= carro.assentos) {
    return "O carro já está lotado!"
  }

  if (totalPessoas > assentos) {
    return `Só cabem mais ${quantasPessoasCabem} ${textoPessoa} no carro!`
  }

  carro.quantidadePessoas += pessoaEntrando;

  return `Já temos ${carro.quantidadePessoas} ${textoPessoa} no carro!`

};

// E agora, qual a cor do carro

// Mude a cor do carro para verde musgo.
carro.mudaCor("verde musgo");

// E agora, qual a cor do carro
console.log(carro.obterCor());

// Qual a marca e modelo do carro
console.log(carro.obterMarca());

// Adicione 2 pessoas no carro.
console.log(carro.adicionarPessoa(2));

// Adicione mais 4 pessoas no carro.
console.log(carro.adicionarPessoa(4));

// Faça o carro encher.
console.log(carro.adicionarPessoa(3));

// Tire 4 pessoas do carro.
console.log(carro.adicionarPessoa(-4));

// Adicione 10 pessoas no carro.
console.log(carro.adicionarPessoa(10));

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas)
