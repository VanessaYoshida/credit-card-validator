# Validador de Cartão de Crédito v.1.0.0

**Esta biblioteca se destina à fazer a verificação dos dados do Cartão de Crédito para uso em aplicações web.**
Na versão atual é capaz de verificar se o número do Cartão de Crédito é valido.
Os números do Cartão de Crédito são criados de acordo com a norma ISO/IEC 7812, onde nela é estabelecido um padrão para a identificação de um cartão eletrônico. 

## Índice

*[Entenda os Números do Cartão de Crédito](#Entenda-os-Números-do-Cartão-de-Crédito)
*[Ferramentas Utilizadas](#Ferramentas-Utilizadas)
*[](#)
*[](#)
*[](#)
*[](#)
*[](#)
*[](#)
*[](#)

## Entenda os Números do Cartão de Crédito
Os números do Cartão de Crédito se subdividem em grupos, onde cada grupo representam algo.
O Primeiro Grupo é o *Número de Identificação do Emissor (Issuer identification Number – IIN)*
Formado pelos seis primeiros digitos, que referem-se a bandeira do cartão.
O Segundo grupo é o *Número da Conta (Account Number ou Account Identifier)* que vai do sétimo dígito até o penúltimo número, utilizado para a identificação do cliente.
O Terceiro é o *Dígito Verificador(Check Sum)* que é o último número contido nessa sequência, utilizado para Verificação de Segurança.
E o último grupo é o *Código de Segurança do Cartão (Card Security Code – CSC)* que são os dígitos contidos atrás do cartão compostos por três ou quatro dígitos utilizado para transsações não presenciais.

##Ferramentas Utilizadas
Para esta biblioteca foram utilizados Javascript, Node.JS e os frameworks Mocha e Chai.


## Como instalar:

```shell

$  npm install credit-card-validator

```

## Como utilizar:

```node


```

## Cálculo para verificar o número do Cartão
O cálculo é feito a partir do Algoritmo de Luhn, que é uma fórmula utilizada para validar uma variedade de números de identificação.

Do dígito mais à direita, que é o dígito de verificação, e movendo para a esquerda, dobre o valor de cada segundo dígito. O dígito de verificação não é dobrado; o primeiro dígito dobrado é imediatamente à esquerda do dígito de verificação. Se o resultado dessa operação de duplicação for maior que 9 (por exemplo, 8 × 2 = 16), adicione os dígitos do resultado (por exemplo, 16: 1 + 6 = 7, 18: 1 + 8 = 9) ou, alternativamente , o mesmo resultado final pode ser encontrado ao subtrair 9 desse resultado (por exemplo, 16: 16 - 9 = 7, 18: 18 - 9 = 9).
Pegue a soma de todos os dígitos.
Se o módulo total 10 é igual a 0 (se o total terminar em zero), então o número é válido de acordo com a fórmula de Luhn; outra coisa não é válida.

## Objetivo deste Projeto
Construir uma biblioteca que atenda aos requisitos abaixo:
<p>*README.md* com descrição do módulo, instruções de instalação, uso e documentação da API.</p>
<p>*index.js:* Biblioteca deve exportar uma função e fazer uso de features de ES6 onde for apropriado.
package.json com nome, versão, descrição, autores, licença, dependências, scripts (pretest, test, ...)
.eslintrc com configuração para linter (ver guia de estilo de JavaScript)</p>
<p>*test/index.spec.js:* com as rotinas de teste escritas para esta biblioteca. Os testes devem ser implementados com Mocha e NYC (ver vídeo tutorial do Daniel :D) </p>
<p>*.gitignore* para ignorar node_modules ou outras pastas que não devem ser incluídas no controle de versões (git).</p>
<p>Fazer uso do *TDD (Test Driven Development)* onde seu principal objetivo é criar testes antes de desenvolver determinado código, visando o mínimo de código possível. Os testes passando se faz necessário refatorar até satisfazer o objetivo final que é criar códigos mais limpos, testáveis e reduzir o máximo de probabilidade de erros no código. </p>

## Outras informações importantes no Cartão
Se você deseja utilizar essa biblioteca em sua aplicação web lembre-se que outras informações importantes que é necessário pedir para o usuário é a data de validade do cartão, e o nome do titular, escrito exatamente da forma como aparece no cartão (por exemplo, com abreviaturas).
Elas têm sido bastante utilizadas nas transações não presenciais, também para compensar a impossibilidade de verificar fisicamente o cartão.

## Próxima Versão
Verificar as seguintes bandeiras:
*Visa
*Mastercard
*Amex
*DinersClub
*Discover
*JCB