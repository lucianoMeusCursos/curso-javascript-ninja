(function(dom, doc) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  function App (){
    var $formRegisterCar = new DOM('[data-js="form-register"]');
    var $carImgUrl = new DOM('[data-js="url-img"]');
    var $carModel = new DOM('[data-js="carro-model"]');
    var $carYear = new DOM('[data-js="carro-year"]');
    var $carBoard = new DOM('[data-js="carro-board"]');
    var $carColor = new DOM('[data-js="carro-color"]');
    var $bodyTableShowCars = new DOM('[data-js="table-cars-registers-body"]');

    function getValue(item){
      return item.get()[0].value;
    }

    function getRegisterCar(){
      var valor = getValue($carImgUrl);
      console.log('valor', valor === "");

      var carObject = {
        img: getValue($carImgUrl),
        model: getValue($carModel),
        year: getValue($carYear),
        board: getValue($carBoard),
        color: getValue($carColor)
      }
      return carObject;
    }


    function createRegister(){
      var car = getRegisterCar();
      console.log(car);

      var $tbodyCars = $bodyTableShowCars.get()[0];
      var newTr = doc.createElement("tr");
      var newTd = doc.createElement("td");




    }







    function handleCreateRegisterCar(event){
      event.preventDefault();
      createRegister();






    }



    function init(){

      $formRegisterCar.on('submit', handleCreateRegisterCar)
    }

    return {
      init: function init(){

      }
    };

  }

  App().init();

})(window.DOM, document);
