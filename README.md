# Validador de Cartão de Crédito v.1.0.0

**Esta biblioteca se destina à fazer a verificação dos dados do Cartão de Crédito para uso em aplicações web.**
Na versão atual é capaz de verificar se o número do Cartão de Crédito é valido ou não.
Os números do Cartão de Crédito são criados de acordo com a norma ISO/IEC 7812, onde nela é estabelecido um padrão para a identificação de um cartão eletrônico. 

## Índice

* [Ferramentas Utilizadas](#Ferramentas-Utilizadas)
* [Como Instalar](#Como-Instalar)
* [Como Utilizar](#Como-Utilizar)
* [Para Desenvolvedores](#Para-Desenvolvedores)
* [Roadmap oficial do projeto](#Roadmap-oficial-do-projeto)
* [Entenda os Números do Cartão de Crédito](#Entenda-os-Números-do-Cartão-de-Crédito)
* [Cálculo para verificar o número do Cartão](#Cálculo-para-verificar-o-número-do-Cartão)
* [Objetivo deste Projeto](#Objetivo-deste-Projeto)
* [Outras informações importantes no Cartão](#Outras-informações-importantes-no-Cartão)

## Ferramentas Utilizadas
Para esta biblioteca foram utilizados Javascript, Node.JS, Mocha, Chai e Nyc.
Foi utilizado o Wallaby para fazer Teste Integrado Contínuo.
E também foi utilizado o Eslint para encontrar padrões problemáticos ou códigos que não seguem determinadas diretrizes de estilo.

## Como Instalar:

```shell

$  npm install credit-card-validator

ou 

$  sudo npm install credit-card-validator

```

## Como Utilizar com o Node.js já instalado:
Abra o terminal na pasta em que a biblioteca já está instalada e digite os comandos:
```node
> node
> const CC = require("validator-credit-card-1");
> console.log(CC.cardValidator('5526988157883653'))

>sudo npm test

```
Dentro dessa função CC.cardValidator('*numero do cartão de crédito*') você pode digitar o número do cartão de crédito para saber se é um número válido ou não.


## Para Desenvolvedores:
Caso você esteja querendo entender como funciona a biblioteca e quer fazer testes, é necessário instalar as ferramentas necessárias. Segue passo-a-passo:
Abra o seu terminal, seguindo os passos abaixo você vai criar uma pasta nova e vai instalar o que for necessário:

```node
> mkdir pastaCartaoDeCredito

> cd pastaCartaoDeCredito

> npm init
(nesse passo de cima ele cria automático um novo projeto com o arquivo package.json, depois vai ser requerido algumas informações que é necessário preencher)

> npm install validator-credit-card-1 (que é para instalar a biblioteca)

> npm install (para instalar o que for necessário para poder trabalhar na biblioteca)

Dentro dessa pasta cria um arquivo echo > index.js (pode ser com o nome que você desejar)

> code .

E cola os comandos: 
> const CC = require("credit-card-validator");
> console.log(CC.cardValidator('5526988157883653'))
```
Dentro dessa função CC.cardValidator('*numero do cartão de crédito*') você pode digitar o número do cartão de crédito para saber se é um número válido ou não.


## Roadmap oficial do projeto
### versão 1.0.0 (released)
- Funcionalidades: Verificação se número de Cartão de Crédito é válido ou não.

## Entenda os Números do Cartão de Crédito
Os números do Cartão de Crédito se subdividem em grupos, onde cada grupo representam algo.
- O Primeiro Grupo é o **Número de Identificação do Emissor (Issuer identification Number – IIN)**
Formado pelos seis primeiros digitos, que referem-se a bandeira do cartão.
- O Segundo grupo é o **Número da Conta (Account Number ou Account Identifier)** que vai do sétimo dígito até o penúltimo número, utilizado para a identificação do cliente.
- O Terceiro é o **Dígito Verificador(Check Sum)** que é o último número contido nessa sequência, utilizado para Verificação de Segurança.
- E o último grupo é o **Código de Segurança do Cartão (Card Security Code – CSC)** que são os dígitos contidos atrás do cartão compostos por três ou quatro dígitos utilizado para transsações não presenciais.

## Cálculo para verificar o número do Cartão
O cálculo é feito a partir do Algoritmo de Luhn, que é uma fórmula utilizada para validar uma variedade de números de identificação.

Do dígito mais à direita, que é o dígito de verificação, e movendo para a esquerda, dobre o valor de cada segundo dígito. O dígito de verificação não é dobrado; o primeiro dígito dobrado é imediatamente à esquerda do dígito de verificação. Se o resultado dessa operação de duplicação for maior que 9 (por exemplo, 8 × 2 = 16), adicione os dígitos do resultado (por exemplo, 16: 1 + 6 = 7, 18: 1 + 8 = 9) ou, alternativamente , o mesmo resultado final pode ser encontrado ao subtrair 9 desse resultado (por exemplo, 16: 16 - 9 = 7, 18: 18 - 9 = 9).
Pegue a soma de todos os dígitos.
Se o módulo total 10 é igual a 0 (se o total terminar em zero), então o número é válido de acordo com a fórmula de Luhn, se der outro resultado não é válida. 
Um outro método alternativo também é: depois de calcular a soma dos dígitos, multiplique por 9, e do resultado pegue o dígito das unidades (último número do resultado), ele é o dígito verificador.

## Objetivo deste Projeto
Construir uma biblioteca que atenda aos requisitos abaixo:
**README.md** com descrição do módulo, instruções de instalação, uso e documentação da API.
**index.js:** Biblioteca deve exportar uma função e fazer uso de features de ES6 onde for apropriado.
package.json com nome, versão, descrição, autores, licença, dependências, scripts (pretest, test, ...)
.eslintrc com configuração para linter (ver guia de estilo de JavaScript)
**test/index.spec.js:** com as rotinas de teste escritas para esta biblioteca. Os testes devem ser implementados com Mocha e NYC
**.gitignore**para ignorar node_modules ou outras pastas que não devem ser incluídas no controle de versões (git).
Fazer uso do **TDD (Test Driven Development)** onde seu principal objetivo é criar testes antes de desenvolver determinado código, visando o mínimo de código possível. Os testes passando se faz necessário refatorar até satisfazer o objetivo final que é criar códigos mais limpos, testáveis e reduzir o máximo de probabilidade de erros no código. 

## Outras informações importantes no Cartão
Se você deseja utilizar essa biblioteca em sua aplicação web lembre-se que outras informações importantes que é necessário pedir para o usuário é a data de validade do cartão, e o nome do titular, escrito exatamente da forma como aparece no cartão (por exemplo, com abreviaturas).
Elas têm sido bastante utilizadas nas transações não presenciais, também para compensar a impossibilidade de verificar fisicamente o cartão.
