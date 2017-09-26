'use strict';

var expect = require('chai').expect;
var sum = require('../src/sum');

describe('# SUM', function(){ // primeiro argumento é o nome do teste.
  // it('') cada it é um teste com sua descrição
  // it('Should SUM module to be a function') deve ser em inglês a descrição por conta do módulo ser inglês
  it('Should SUM module to be a function', function(){
    expect(sum).to.be.a('function');
  });
})
