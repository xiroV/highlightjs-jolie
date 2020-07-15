/*
Language: Jolie
Author: Brian Alberg <brian@alberg.org>
Description: The first language for Microservices.
Website: https://www.jolie-lang.org
Category: common
*/

module.exports = function(hljs) {
  var KEYWORDS = {
    keyword:
      'if else while for foreach provide until in forward scope with' +
      'interface execution constants main init cH instanceof comp concurrent single sequential cset is_defined embedded extender courier forward install undef include synchronized throws throw ' +
      'inputPort outputPort type define service',
    type: 'string int long bool double void raw any',
    literal: 'false true nullProcess',
  };
  var SUBST = {
    className: 'subst',
    begin: /\{/, end: /\}/,
    keywords: KEYWORDS,
    illegal: /#/
  };
  var LITERAL_BRACKET = {
    begin: /\{\{/,
    relevance: 0
  };
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /'/, end: /'/,
        contains: [hljs.BACKSLASH_ESCAPE, LITERAL_BRACKET, SUBST]
      },
      {
        begin: /"/, end: /"/,
        contains: [hljs.BACKSLASH_ESCAPE, LITERAL_BRACKET, SUBST]
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE
    ]
  };
  var NUMBER = {
    className: 'number', relevance: 0,
    variants: [
      {begin: hljs.C_NUMBER_RE}
    ]
  };
  var COLON_NAME = {
    className: 'meta',
    begin: '\\b(location|Location|protocol|Protocol|interfaces|Interfaces|aggregates|Aggregates|redirects|Redirects|Jolie|JavaScript|Java|OneWay|RequestResponse)\\b',
    end: ':',
    excludeEnd: true,
    relevance: 10,
  };

  var SYMBOLS = {
    className: 'symbol',
    begin: '@'
  };

  SUBST.contains = [STRING, NUMBER];
  return {
    name: 'Jolie',
    aliases: ['ol', 'iol'],
    keywords: KEYWORDS,
    illegal: /(<\/|->|\?)=>/,
    contains: [
      NUMBER,
      STRING,
      COLON_NAME,
      SYMBOLS,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
    ]
  };
}
