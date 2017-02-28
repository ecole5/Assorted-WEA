define("students-records/templates/components/manage-system-code", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 2
            },
            "end": {
              "line": 23,
              "column": 2
            }
          },
          "moduleName": "students-records/templates/components/manage-system-code.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("On select will set target model, but onchange will pass the value of the field ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui input");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("input");
          dom.setAttribute(el3, "type", "text");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      \n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("Remove Button ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "ui icon button");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("i");
          dom.setAttribute(el3, "class", "remove circle icon");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" end of list element !");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element11 = dom.childAt(fragment, [1]);
          var element12 = dom.childAt(element11, [3, 1]);
          var element13 = dom.childAt(element11, [7]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element12, 'value');
          morphs[1] = dom.createAttrMorph(element12, 'onclick');
          morphs[2] = dom.createAttrMorph(element12, 'onchange');
          morphs[3] = dom.createElementMorph(element13);
          return morphs;
        },
        statements: [["attribute", "value", ["get", "residencyChoice.name", ["loc", [null, [12, 33], [12, 53]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["setCurrentModel", ["get", "residencyChoice", ["loc", [null, [12, 91], [12, 106]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [12, 108]]], 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editItem"], ["value", "target.value"], ["loc", [null, [null, null], [13, 42]]], 0, 0], 0, 0, 0, 0], ["element", "action", ["removeItem", ["get", "residencyChoice", ["loc", [null, [17, 57], [17, 72]]], 0, 0, 0, 0]], [], ["loc", [null, [17, 35], [17, 75]]], 0, 0]],
        locals: ["residencyChoice"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 0
            },
            "end": {
              "line": 37,
              "column": 0
            }
          },
          "moduleName": "students-records/templates/components/manage-system-code.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("form");
          dom.setAttribute(el1, "class", "ui form");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui input");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "ui button");
          var el3 = dom.createTextNode("Save");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "ui button");
          var el3 = dom.createTextNode("Cancel");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element8 = dom.childAt(fragment, [0]);
          var element9 = dom.childAt(element8, [3]);
          var element10 = dom.childAt(element8, [5]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element8, [1]), 1, 1);
          morphs[1] = dom.createElementMorph(element9);
          morphs[2] = dom.createElementMorph(element10);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "rName", ["loc", [null, [32, 32], [32, 37]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", "Enter Name"], ["loc", [null, [32, 4], [32, 64]]], 0, 0], ["element", "action", ["saveResidency"], [], ["loc", [null, [34, 28], [34, 54]]], 0, 0], ["element", "action", ["cancelNewResidency"], [], ["loc", [null, [35, 28], [35, 59]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 37,
              "column": 0
            },
            "end": {
              "line": 42,
              "column": 12
            }
          },
          "moduleName": "students-records/templates/components/manage-system-code.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("Toggle Button for Add !");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "ui button");
          var el2 = dom.createTextNode("\n     ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "plus icon");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element7 = dom.childAt(fragment, [3]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element7);
          return morphs;
        },
        statements: [["element", "action", ["addNewResidency"], [], ["loc", [null, [40, 26], [40, 54]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 49,
              "column": 2
            },
            "end": {
              "line": 66,
              "column": 2
            }
          },
          "moduleName": "students-records/templates/components/manage-system-code.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("On select will set target model, but onchange will pass the value of the field ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui input");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("input");
          dom.setAttribute(el3, "type", "text");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      \n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("Remove Button ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "ui icon button");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("i");
          dom.setAttribute(el3, "class", "remove circle icon");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" end of list element !");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element4 = dom.childAt(fragment, [1]);
          var element5 = dom.childAt(element4, [3, 1]);
          var element6 = dom.childAt(element4, [7]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element5, 'value');
          morphs[1] = dom.createAttrMorph(element5, 'onclick');
          morphs[2] = dom.createAttrMorph(element5, 'onchange');
          morphs[3] = dom.createElementMorph(element6);
          return morphs;
        },
        statements: [["attribute", "value", ["get", "genderChoice.name", ["loc", [null, [55, 33], [55, 50]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["setCurrentModel", ["get", "genderChoice", ["loc", [null, [55, 88], [55, 100]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [55, 102]]], 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editItem"], ["value", "target.value"], ["loc", [null, [null, null], [56, 42]]], 0, 0], 0, 0, 0, 0], ["element", "action", ["removeItem", ["get", "genderChoice", ["loc", [null, [60, 57], [60, 69]]], 0, 0, 0, 0]], [], ["loc", [null, [60, 35], [60, 72]]], 0, 0]],
        locals: ["genderChoice"],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 72,
              "column": 0
            },
            "end": {
              "line": 80,
              "column": 0
            }
          },
          "moduleName": "students-records/templates/components/manage-system-code.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("form");
          dom.setAttribute(el1, "class", "ui form");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui input");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "ui button");
          var el3 = dom.createTextNode("Save");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "ui button");
          var el3 = dom.createTextNode("Cancel");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [0]);
          var element2 = dom.childAt(element1, [3]);
          var element3 = dom.childAt(element1, [5]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
          morphs[1] = dom.createElementMorph(element2);
          morphs[2] = dom.createElementMorph(element3);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "gName", ["loc", [null, [75, 32], [75, 37]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", "Enter Name"], ["loc", [null, [75, 4], [75, 64]]], 0, 0], ["element", "action", ["saveGender"], [], ["loc", [null, [77, 28], [77, 51]]], 0, 0], ["element", "action", ["cancelNewGender"], [], ["loc", [null, [78, 28], [78, 56]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 80,
              "column": 0
            },
            "end": {
              "line": 85,
              "column": 12
            }
          },
          "moduleName": "students-records/templates/components/manage-system-code.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("Toggle Button for Add !");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "ui button");
          var el2 = dom.createTextNode("\n     ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "plus icon");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [3]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["addNewGender"], [], ["loc", [null, [83, 26], [83, 51]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 85,
            "column": 19
          }
        },
        "moduleName": "students-records/templates/components/manage-system-code.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode(" Residency ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui list");
        var el2 = dom.createTextNode("\n\n ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("Editing option for each residency ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" end of list!");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Form to add new !");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode(" Gender ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui list");
        var el2 = dom.createTextNode("\n\n ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("Editing option for each gender ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" end of list!");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Form to add new !");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [4]), 3, 3);
        morphs[1] = dom.createMorphAt(fragment, 10, 10, contextualElement);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [14]), 3, 3);
        morphs[3] = dom.createMorphAt(fragment, 20, 20, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "each", [["get", "ResidencyModel", ["loc", [null, [6, 10], [6, 24]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [6, 2], [23, 11]]]], ["block", "if", [["get", "isAddingResidency", ["loc", [null, [29, 6], [29, 23]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [29, 0], [42, 19]]]], ["block", "each", [["get", "GenderModel", ["loc", [null, [49, 10], [49, 21]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [49, 2], [66, 11]]]], ["block", "if", [["get", "isAddingGender", ["loc", [null, [72, 6], [72, 20]]], 0, 0, 0, 0]], [], 4, 5, ["loc", [null, [72, 0], [85, 19]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5]
    };
  })());
});