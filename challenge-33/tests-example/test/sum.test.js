'use strict';

var expect = require('chai').expect;
var sum = require('../src/sum');

describe('# SUM', function(){ // primeiro argumento é o nome do teste.
  // it('') cada it é um teste com sua descrição
  // it('Should SUM module to be a function') deve ser em inglês a descrição por conta do módulo ser inglês
  it('Should SUM module to be a function', function(){
    expect(sum).to.be.an('function');
  });

  it('Should SUM return 10 when I pass 1 and 9', function () {
    expect(sum(1, 9)).to.be.equal(10);
  });

  it('Should SUM return 5 when I pass 2 and 3', function () {
    expect(sum(2, 3)).to.be.equal(5);
  });

  it('Should SUM return an error if it receive just one parameter', function () {
    // console.log(sum(1));
    expect(sum(1)).to.be.an('error');
  });

  it('Should SUM return an error if the parameter has not a number', function () {
    // console.log(sum(1));
    expect(sum('a', 'b')).to.be.an('error');
  });

  it('Assert', function(){
    var assert = require('assert'); // módulo padrão do node
    assert.equal(sum(20,60), 50, 'Message dadadadada') // 1º parametro é a função ou modulo, 2º é o esperado e o 3º a menssagem.
    // assert.strictEqual // testa igualdade e tipo ou seja ===

  })
  // instanbul code coverage

})
