/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

(function(){
  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
 let person = {
  'name': 'Luciano',
  'lastname': 'Lourenço',
  'age': 32
  };

  console.log( 'Propriedades de "person":', person );

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
 console.log( 'Array com propriedades de "person":', Object.keys(person) );

  /*
  Crie um array vazio chamado `books`.
  */
  let books = [];

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  let listBooks = [
    {'name': 'Livro 1', 'pages': 100},
    {'name': 'Livro 2', 'pages': 200},
    {'name': 'Livro 3', 'pages': 300}
  ];

  for (let iterator of listBooks) {
    books.push(iterator)
  }

  console.log( '\nLista de livros:');

  /*
  Mostre no console todos os livros.
  */
  console.log(books);

  console.log( '\nLivro que está sendo removido:' );
  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log(books.pop());

  console.log( '\nAgora sobraram somente os livros:' );
  /*
  Mostre no console os livros restantes.
  */
  console.log(books);

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  let booksStr = JSON.stringify(books);
  console.log( '\nLivros em formato string:' );

  /*
  Mostre os livros nesse formato no console:
  */
  console.log(booksStr);

  /*
  Converta os livros novamente para objeto.
  */
  let booksObj = JSON.parse(booksStr);
  console.log( '\nAgora os livros são objetos novamente:' );
  console.log(booksObj);

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
 console.log(`\nMostre no console todas as propriedades e valores de todos os livros, no formato abaixo:`)
  for (const key in books) {
    let { name, pages } = books[key];
    console.log(`${name} : ${pages}`);
  }

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  let myName = ['l','u','c','i','a','n','o']
  console.log( '\nMeu nome é:' );

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log(myName.join(''))

  console.log( '\nMeu nome invertido é:' );

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
 console.log(myName.reverse().join(''))

  console.log( '\nAgora em ordem alfabética:' );
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log(myName.sort())

})()
