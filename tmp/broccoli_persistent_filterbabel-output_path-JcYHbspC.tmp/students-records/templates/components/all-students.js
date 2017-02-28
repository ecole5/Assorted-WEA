define("students-records/templates/components/all-students", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 4
            },
            "end": {
              "line": 25,
              "column": 4
            }
          },
          "moduleName": "students-records/templates/components/all-students.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui grid");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ten wide column");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "actions");
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "ui form");
          var el5 = dom.createTextNode("\n              ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "grouped fields");
          var el6 = dom.createTextNode("\n                ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("div");
          dom.setAttribute(el6, "class", "field");
          var el7 = dom.createTextNode("\n                  ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("div");
          dom.setAttribute(el7, "class", "ui radio checkbox");
          var el8 = dom.createTextNode("\n                    ");
          dom.appendChild(el7, el8);
          var el8 = dom.createElement("input");
          dom.setAttribute(el8, "type", "radio");
          dom.appendChild(el7, el8);
          var el8 = dom.createTextNode("\n                    ");
          dom.appendChild(el7, el8);
          var el8 = dom.createElement("label");
          var el9 = dom.createComment("");
          dom.appendChild(el8, el9);
          var el9 = dom.createTextNode(" ");
          dom.appendChild(el8, el9);
          var el9 = dom.createComment("");
          dom.appendChild(el8, el9);
          var el9 = dom.createTextNode("\n                      ");
          dom.appendChild(el8, el9);
          var el9 = dom.createComment("");
          dom.appendChild(el8, el9);
          var el9 = dom.createTextNode("  ");
          dom.appendChild(el8, el9);
          dom.appendChild(el7, el8);
          var el8 = dom.createTextNode("\n                  ");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n                ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n              ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n            ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "six wide column");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1, 1, 1, 1, 1, 1]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element0, [3]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element1, 'onchange');
          morphs[1] = dom.createMorphAt(element2, 0, 0);
          morphs[2] = dom.createMorphAt(element2, 2, 2);
          morphs[3] = dom.createMorphAt(element2, 4, 4);
          return morphs;
        },
        statements: [["attribute", "onchange", ["subexpr", "action", ["getStudent", ["get", "oneStudent", ["loc", [null, [13, 58], [13, 68]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [13, 70]]], 0, 0], 0, 0, 0, 0], ["content", "oneStudent.number", ["loc", [null, [14, 27], [14, 48]]], 0, 0, 0, 0], ["content", "oneStudent.firstName", ["loc", [null, [14, 49], [14, 73]]], 0, 0, 0, 0], ["content", "oneStudent.lastName", ["loc", [null, [15, 22], [15, 45]]], 0, 0, 0, 0]],
        locals: ["oneStudent"],
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
            "line": 41,
            "column": 0
          }
        },
        "moduleName": "students-records/templates/components/all-students.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui modal");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "header");
        var el3 = dom.createTextNode("List of 10 Students, click the arrow keys to get more students");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "content");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "actions");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("hr");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "ui button");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "arrow right icon");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "ui button");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "arrow left icon");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "ui button");
        var el5 = dom.createTextNode("OK");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [0, 3]);
        var element4 = dom.childAt(element3, [3]);
        var element5 = dom.childAt(element4, [3]);
        var element6 = dom.childAt(element4, [5]);
        var element7 = dom.childAt(element4, [7]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element3, 1, 1);
        morphs[1] = dom.createElementMorph(element5);
        morphs[2] = dom.createElementMorph(element6);
        morphs[3] = dom.createElementMorph(element7);
        return morphs;
      },
      statements: [["block", "each", [["get", "studentsModel", ["loc", [null, [4, 12], [4, 25]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [4, 4], [25, 13]]]], ["element", "action", ["loadNext"], [], ["loc", [null, [29, 29], [29, 50]]], 0, 0], ["element", "action", ["loadPrevious"], [], ["loc", [null, [32, 29], [32, 54]]], 0, 0], ["element", "action", ["exit"], [], ["loc", [null, [35, 29], [35, 46]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});