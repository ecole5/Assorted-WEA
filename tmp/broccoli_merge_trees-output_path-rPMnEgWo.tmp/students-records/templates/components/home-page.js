export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 30,
            "column": 6
          },
          "end": {
            "line": 32,
            "column": 6
          }
        },
        "moduleName": "students-records/templates/components/home-page.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        return morphs;
      },
      statements: [
        ["content","welcome-page",["loc",[null,[31,8],[31,24]]],0,0,0,0]
      ],
      locals: [],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 33,
            "column": 6
          },
          "end": {
            "line": 35,
            "column": 6
          }
        },
        "moduleName": "students-records/templates/components/home-page.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        return morphs;
      },
      statements: [
        ["content","student-data-entry",["loc",[null,[34,8],[34,30]]],0,0,0,0]
      ],
      locals: [],
      templates: []
    };
  }());
  var child2 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 36,
            "column": 6
          },
          "end": {
            "line": 38,
            "column": 6
          }
        },
        "moduleName": "students-records/templates/components/home-page.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        return morphs;
      },
      statements: [
        ["content","about-us",["loc",[null,[37,8],[37,20]]],0,0,0,0]
      ],
      locals: [],
      templates: []
    };
  }());
  var child3 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 39,
            "column": 6
          },
          "end": {
            "line": 41,
            "column": 6
          }
        },
        "moduleName": "students-records/templates/components/home-page.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        return morphs;
      },
      statements: [
        ["content","help-info",["loc",[null,[40,8],[40,21]]],0,0,0,0]
      ],
      locals: [],
      templates: []
    };
  }());
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
          "line": 44,
          "column": 6
        }
      },
      "moduleName": "students-records/templates/components/home-page.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","ui grid");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","three wide column");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","ui violet vertical pointing menu");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"class","item active");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("i");
      dom.setAttribute(el5,"class","large home icon");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        Home\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"class","item");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("i");
      dom.setAttribute(el5,"class","large leanpub icon");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        Students Records\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","item");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("br");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("br");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"class","item ");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("i");
      dom.setAttribute(el5,"class","large user icon");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        About\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"class","item ");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("i");
      dom.setAttribute(el5,"class","large help icon");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        Help\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","thirteen wide column ");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","ui segment container");
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(element0, [1, 1]);
      var element2 = dom.childAt(element1, [1]);
      var element3 = dom.childAt(element1, [3]);
      var element4 = dom.childAt(element1, [7]);
      var element5 = dom.childAt(element1, [9]);
      var element6 = dom.childAt(element0, [3, 1]);
      var morphs = new Array(8);
      morphs[0] = dom.createElementMorph(element2);
      morphs[1] = dom.createElementMorph(element3);
      morphs[2] = dom.createElementMorph(element4);
      morphs[3] = dom.createElementMorph(element5);
      morphs[4] = dom.createMorphAt(element6,1,1);
      morphs[5] = dom.createMorphAt(element6,2,2);
      morphs[6] = dom.createMorphAt(element6,3,3);
      morphs[7] = dom.createMorphAt(element6,4,4);
      return morphs;
    },
    statements: [
      ["element","action",["home"],[],["loc",[null,[4,29],[4,46]]],0,0],
      ["element","action",["studentsDataEntry"],[],["loc",[null,[8,22],[8,52]]],0,0],
      ["element","action",["about"],[],["loc",[null,[16,23],[16,41]]],0,0],
      ["element","action",["help"],[],["loc",[null,[21,23],[21,40]]],0,0],
      ["block","if",[["get","isHomeShowing",["loc",[null,[30,12],[30,25]]],0,0,0,0]],[],0,null,["loc",[null,[30,6],[32,13]]]],
      ["block","if",[["get","isStudentsRecordsDataEntry",["loc",[null,[33,12],[33,38]]],0,0,0,0]],[],1,null,["loc",[null,[33,6],[35,13]]]],
      ["block","if",[["get","isAboutShowing",["loc",[null,[36,12],[36,26]]],0,0,0,0]],[],2,null,["loc",[null,[36,6],[38,13]]]],
      ["block","if",[["get","isHelpShowing",["loc",[null,[39,12],[39,25]]],0,0,0,0]],[],3,null,["loc",[null,[39,6],[41,13]]]]
    ],
    locals: [],
    templates: [child0, child1, child2, child3]
  };
}()));