@regression
Feature: Preenchimento de formulário

  @smoke
  Scenario: Submeter formulário com sucesso
    Given que estou na tela de formulário
    When preencho o formulário corretamente
    Then devo visualizar mensagem de sucesso

  Scenario: Submeter formulário vazio
    Given que estou na tela de formulário
    When submeto o formulário vazio
    Then devo visualizar uma mensagem de erro
