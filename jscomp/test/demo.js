// Generated CODE, PLEASE EDIT WITH CARE
'use strict';

var BUI        = require("@blp/ui");
var UI         = require("@ui");
var Runtime    = require("@runtime");
var Caml_curry = require("../runtime/caml_curry");

var data = /* array */[
  [
    /* record */0,
    "GOOG",
    700.0
  ],
  [
    /* record */0,
    "AAPL",
    500.0
  ],
  [
    /* record */0,
    "MSFT",
    300.0
  ]
];

function ui_layout(compile, lookup, appContext) {
  var init = Caml_curry.app1(compile, "bid  - ask");
  var computeFunction = [
    0,
    function (env) {
      return Caml_curry.app1(init, function (key) {
                  return Caml_curry.app2(lookup, env, key);
                });
    }
  ];
  var hw1 = new BUI.HostedWindow();
  var hc = new BUI.HostedContent();
  var stackPanel = new UI.StackPanel();
  var inputCode = new UI.TextArea();
  var button = new UI.Button();
  var grid = new UI.Grid();
  hw1.appContext = appContext;
  hw1.title = "Test Application From OCaml";
  hw1.content = hc;
  hc.contentWidth = 700;
  hc.content = stackPanel;
  stackPanel.orientation = "vertical";
  stackPanel.minHeight = 10000;
  stackPanel.minWidth = 4000;
  Caml_curry.app1(stackPanel.addChild, grid);
  Caml_curry.app1(stackPanel.addChild, inputCode);
  Caml_curry.app1(stackPanel.addChild, button);
  var u = {
    "width": 200
  };
  grid.minHeight = 300;
  grid.titleRows = /* array */[
    {
      "label": {
        "text": "Ticker"
      }
    },
    {
      "label": {
        "text": "Bid"
      }
    },
    {
      "label": {
        "text": "Ask"
      }
    },
    {
      "label": {
        "text": "Result"
      }
    }
  ];
  grid.columns = /* array */[
    u,
    u,
    u,
    u
  ];
  inputCode.text = " bid - ask";
  inputCode.minHeight = 100;
  button.text = "update formula";
  button.minHeight = 20;
  Caml_curry.app2(button.on, "click", function () {
        try {
          var hot_function = Caml_curry.app1(compile, inputCode.text);
          computeFunction[1] = function (env) {
            return Caml_curry.app1(hot_function, function (key) {
                        return Caml_curry.app2(lookup, env, key);
                      });
          };
          return /* () */0;
        }
        catch (e){
          return /* () */0;
        }
      });
  Caml_curry.app2(Runtime.setInterval, function () {
        return grid.dataSource = Caml_curry.app2(Array.prototype.map.call, data, function (param) {
                    var price = param[2];
                    var bid = price + 20 * Caml_curry.app0(Math.random);
                    var ask = price + 20 * Caml_curry.app0(Math.random);
                    var result = Caml_curry.app1(computeFunction[1], {
                          "bid": bid,
                          "ask": ask
                        });
                    var text = Caml_curry.app1(bid.toFixed, 2);
                    var text$1 = Caml_curry.app1(ask.toFixed, 2);
                    var text$2 = Caml_curry.app1(result.toFixed, 2);
                    return /* array */[
                            {
                              "label": {
                                "text": param[1]
                              }
                            },
                            {
                              "label": {
                                "text": text
                              }
                            },
                            {
                              "label": {
                                "text": text$1
                              }
                            },
                            {
                              "label": {
                                "text": text$2
                              }
                            }
                          ];
                  });
      }, 100);
  return hw1;
}

exports.data      = data;
exports.ui_layout = ui_layout;
/* @blp/ui Not a pure module */
