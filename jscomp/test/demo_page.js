// Generated CODE, PLEASE EDIT WITH CARE
'use strict';

var React      = require("react");
var Caml_curry = require("../runtime/caml_curry");
var ReactDom   = require("react-dom");

function fib(n) {
  if (n === 2 || n === 1) {
    return 1;
  }
  else {
    return fib(n - 1) + fib(n - 2);
  }
}

function sum(n) {
  var v = 0;
  for(var i = 0; i<= n; ++i){
    v += i;
  }
  return v;
}

function map(f, param) {
  if (param) {
    return [
            /* Cons */0,
            Caml_curry.app1(f, param[1]),
            map(f, param[2])
          ];
  }
  else {
    return /* Nil */0;
  }
}

function test_curry(x, y) {
  return x + y;
}

function f(param) {
  return 32 + param;
}

Caml_curry.app2(ReactDom.render, Caml_curry.app1(React.createClass, {
          "render": function () {
            return Caml_curry.app3(React.DOM.div, {
                        "alt": "pic"
                      }, Caml_curry.app2(React.DOM.h1, null, "hello react"), Caml_curry.app2(React.DOM.h2, null, "type safe!"));
          }
        }), Caml_curry.app1(document.getElementById, "hi"));

exports.fib        = fib;
exports.sum        = sum;
exports.map        = map;
exports.test_curry = test_curry;
exports.f          = f;
/*  Not a pure module */
