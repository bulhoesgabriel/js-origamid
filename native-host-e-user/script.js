// native -> objetos nativos são aqueles definidos na especificação da linguagem e são implementados independente do host.

// construtores de objetos nativos -> Object, String, Array, Function

// host -> objetos do host são aqueles implementados pelo próprio ambiente. Por exemplo no browser possuímos objetos do dom, como DomList, HTMLCollection e outros. Em Node.js os objetos do Host são diferentes, já que não estamos em um ambiente do browser.

// objetos do browser -> NodeList, HTMLCollection, Element

// user -> objetos do user, são os objetos definidos pelo seu aplicativo. Ou seja, qualquer objeto que você criar ou que importar de alguma biblioteca externa. Exemplo:

// const Pessoa = {
//     nome: 'Gabriel'
// }

// diferentes versões

// browsers diferentes -> apesar de tentarem ao máximo manter um padrão, browsers diferentes possuem objetos com propriedades e métodos diferentes.

// versões de browsers -> sempre que o browser é atualizado, novos objetos, métodos e propriedades podem ser implementados.

// host e native objects -> por exemplo, browsers que não implementaram o ECMAScript 2015 (ES6), não possuem o método find de Array.

// versões do JavaScript

// ECMA -> organização responsável por definir padrões para tecnologias. ECMAScript é o padrão de JavaSCript.

// ECMAScript 2015 ou ES6 -> ES é uma abreviação de ECMAScript, ES6 é a sexta versão do ECMAScript, que foi lançada em 2015. Por isso ECMAScript 2015 é igual a ES6. A partir da ES6, existe uma tendência anual de atualizações. ES 2015, 2016, 2017, 2018 e Next.

// Engine -> existem diversas engines que implementam o ECMAScript como V8, SpiderMonkey, Chakra, JavaScriptCore e mais.

// O ECMAScript seria o padrão e o JavaScript a implementação, digamos assim.

// Babel é uma ferramenta usada para transpilar códigos da nova versão do JavaScript para anteriores.

// Bibliotecas -> bibliotecas como jQuery foram criadas para resolver o problema de inconsistências entre browsers e adicionar funcionalidades que não existiam nativamente. A padronização dos browsers e a implementação de soluções nativas, torna as mesmas obsoletas.

// $('a').addClass('ativo') // hoje em dia já existe o classList.add
// $('a').hide()
// $('a').show()

// verificar se existe -> o typeof retorna o tipo de dado. Caso esse dado não exista ou não tenha sido definido, ele irá retornar undefined. Ou seja, quando não for undefined quer dizer que existe.

// if (typeof Array.from !== "undefined")
// if (typeof NodeList !== "undefined")

// API -> Application Programming Interface, é uma interface de software criada para a interação com outros softwares. Ou seja, toda interação que fazemos com o browser utilizando Objetos, Métodos e Propriedades, estamos na verdade interagindo com a API do browser.