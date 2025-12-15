@login @regression
Feature: Login

  @smoke
  Scenario: Login com credenciais válidas
    Given que estou na tela de login
    When realizo login com email "valido" e senha "valida"
    Then devo visualizar a tela home

  Scenario: Login com credenciais inválidas
    Given que estou na tela de login
    When realizo login com email "invalido" e senha "invalida"
    Then devo visualizar uma mensagem de erro
