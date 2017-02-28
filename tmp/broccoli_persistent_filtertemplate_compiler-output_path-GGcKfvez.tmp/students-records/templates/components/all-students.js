export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 10,
            "column": 16
          },
          "end": {
            "line": 20,
            "column": 16
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
        var el1 = dom.createTextNode(" ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" moved the #each start and end to reduce the vertical size of the list\n                                                             as long as the list isn't big enough to require scrolling, there is no bug ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n                ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","field");
        var el2 = dom.createTextNode("\n                  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","ui radio checkbox");
        var el3 = dom.createTextNode("\n                    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("input");
        dom.setAttribute(el3,"type","radio");
        dom.setAttribute(el3,"name","studentChoice");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [3, 1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element1, 'onchange');
        morphs[1] = dom.createMorphAt(element2,0,0);
        morphs[2] = dom.createMorphAt(element2,2,2);
        morphs[3] = dom.createMorphAt(element2,4,4);
        return morphs;
      },
      statements: [
        ["attribute","onchange",["subexpr","action",["getStudent",["get","oneStudent",["loc",[null,[15,58],[15,68]]],0,0,0,0]],[],["loc",[null,[null,null],[15,70]]],0,0],0,0,0,0],
        ["content","oneStudent.number",["loc",[null,[16,27],[16,48]]],0,0,0,0],
        ["content","oneStudent.firstName",["loc",[null,[16,49],[16,73]]],0,0,0,0],
        ["content","oneStudent.lastName",["loc",[null,[17,22],[17,45]]],0,0,0,0]
      ],
      locals: ["oneStudent"],
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
          "line": 47,
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
      dom.setAttribute(el1,"class","ui modal");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","header");
      var el3 = dom.createTextNode("List of 10 Students, click the arrow keys to get more students");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","content");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment(" original location of #each start ");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n      ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","ui grid");
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","ten wide column");
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","actions");
      var el6 = dom.createTextNode("\n            ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","ui form");
      var el7 = dom.createTextNode("\n              ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","grouped fields");
      var el8 = dom.createTextNode("\n                ");
      dom.appendChild(el7, el8);
      var el8 = dom.createComment("");
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("              ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n            ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","six wide column");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n      ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment(" original location of #each end ");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n\n\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","actions");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("hr");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","ui button");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("i");
      dom.setAttribute(el5,"class","arrow right icon");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","ui button");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("i");
      dom.setAttribute(el5,"class","arrow left icon");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","ui button");
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
      var element4 = dom.childAt(element3, [7]);
      var element5 = dom.childAt(element4, [3]);
      var element6 = dom.childAt(element4, [5]);
      var element7 = dom.childAt(element4, [7]);
      var morphs = new Array(4);
      morphs[0] = dom.createMorphAt(dom.childAt(element3, [3, 1, 1, 1, 1]),1,1);
      morphs[1] = dom.createElementMorph(element5);
      morphs[2] = dom.createElementMorph(element6);
      morphs[3] = dom.createElementMorph(element7);
      return morphs;
    },
    statements: [
      ["block","each",[["get","studentsModel",["loc",[null,[10,24],[10,37]]],0,0,0,0]],[],0,null,["loc",[null,[10,16],[20,25]]]],
      ["element","action",["loadNext"],[],["loc",[null,[35,29],[35,50]]],0,0],
      ["element","action",["loadPrevious"],[],["loc",[null,[38,29],[38,54]]],0,0],
      ["element","action",["exit"],[],["loc",[null,[41,29],[41,46]]],0,0]
    ],
    locals: [],
    templates: [child0]
  };
}()));