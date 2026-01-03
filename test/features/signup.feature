@regression
Feature: Cadastro de usuário

  @smoke
  Scenario: Cadastro com dados válidos
    Given que estou na tela de cadastro
    When preencho os dados válidos de cadastro
    Then devo acessar a tela home

  Scenario: Cadastro com campos vazios
    Given que estou na tela de cadastro
    When tento cadastrar sem preencher os campos
    Then devo visualizar uma mensagem de erro
