define("students-records/templates/components/student-data-entry", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 41,
              "column": 0
            },
            "end": {
              "line": 45,
              "column": 0
            }
          },
          "moduleName": "students-records/templates/components/student-data-entry.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "find-student", [], ["notDONE", ["subexpr", "@mut", [["get", "showFindStudent", ["loc", [null, [43, 26], [43, 41]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [43, 1], [43, 44]]], 0, 0]],
        locals: [],
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
              "line": 47,
              "column": 0
            },
            "end": {
              "line": 50,
              "column": 0
            }
          },
          "moduleName": "students-records/templates/components/student-data-entry.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" Note that offset is an \"in\" and \"out\" parameter !");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["inline", "all-students", [], ["INDEX", ["subexpr", "@mut", [["get", "currentIndex", ["loc", [null, [49, 24], [49, 36]]], 0, 0, 0, 0]], [], [], 0, 0], "notDONE", ["subexpr", "@mut", [["get", "showAllStudents", ["loc", [null, [49, 47], [49, 62]]], 0, 0, 0, 0]], [], [], 0, 0], "offset", ["subexpr", "@mut", [["get", "offset", ["loc", [null, [49, 72], [49, 78]]], 0, 0, 0, 0]], [], [], 0, 0], "studentsModel", ["subexpr", "@mut", [["get", "studentsRecords", ["loc", [null, [49, 95], [49, 110]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [49, 1], [49, 112]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.9.1",
            "loc": {
              "source": null,
              "start": {
                "line": 89,
                "column": 14
              },
              "end": {
                "line": 92,
                "column": 14
              }
            },
            "moduleName": "students-records/templates/components/student-data-entry.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("option");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element4 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element4, 'value');
            morphs[1] = dom.createAttrMorph(element4, 'selected');
            morphs[2] = dom.createMorphAt(element4, 0, 0);
            return morphs;
          },
          statements: [["attribute", "value", ["get", "genderChoice.id", ["loc", [null, [90, 32], [90, 47]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "selected", ["subexpr", "eq", [["get", "currentStudent.genInfo.id", ["loc", [null, [90, 64], [90, 89]]], 0, 0, 0, 0], ["get", "genderChoice.id", ["loc", [null, [91, 67], [91, 82]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [91, 84]]], 0, 0], 0, 0, 0, 0], ["content", "genderChoice.name", ["loc", [null, [91, 85], [91, 106]]], 0, 0, 0, 0]],
          locals: ["genderChoice"],
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
                "line": 102,
                "column": 14
              },
              "end": {
                "line": 105,
                "column": 14
              }
            },
            "moduleName": "students-records/templates/components/student-data-entry.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("option");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element3 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element3, 'value');
            morphs[1] = dom.createAttrMorph(element3, 'selected');
            morphs[2] = dom.createMorphAt(element3, 0, 0);
            return morphs;
          },
          statements: [["attribute", "value", ["get", "residencyChoice.id", ["loc", [null, [103, 32], [103, 50]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "selected", ["subexpr", "eq", [["get", "currentStudent.resInfo.id", ["loc", [null, [103, 67], [103, 92]]], 0, 0, 0, 0], ["get", "residencyChoice.id", ["loc", [null, [104, 67], [104, 85]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [104, 87]]], 0, 0], 0, 0, 0, 0], ["content", "residencyChoice.name", ["loc", [null, [104, 88], [104, 112]]], 0, 0, 0, 0]],
          locals: ["residencyChoice"],
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
                "line": 141,
                "column": 4
              },
              "end": {
                "line": 155,
                "column": 4
              }
            },
            "moduleName": "students-records/templates/components/student-data-entry.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" Name:\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("          \n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" note:\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("input");
            dom.setAttribute(el1, "type", "text");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("input");
            dom.setAttribute(el1, "type", "text");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      \n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            var el2 = dom.createTextNode("Delete scholarship");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [15]);
            var element1 = dom.childAt(fragment, [17]);
            var element2 = dom.childAt(fragment, [19]);
            var morphs = new Array(9);
            morphs[0] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 11, 11, contextualElement);
            morphs[2] = dom.createAttrMorph(element0, 'value');
            morphs[3] = dom.createAttrMorph(element0, 'onclick');
            morphs[4] = dom.createAttrMorph(element0, 'onchange');
            morphs[5] = dom.createAttrMorph(element1, 'value');
            morphs[6] = dom.createAttrMorph(element1, 'onclick');
            morphs[7] = dom.createAttrMorph(element1, 'onchange');
            morphs[8] = dom.createElementMorph(element2);
            return morphs;
          },
          statements: [["content", "scholarship.scholarshipID", ["loc", [null, [143, 11], [143, 40]]], 0, 0, 0, 0], ["content", "scholarship.note", ["loc", [null, [145, 11], [145, 31]]], 0, 0, 0, 0], ["attribute", "value", ["get", "scholarship.scholarshipID", ["loc", [null, [148, 33], [148, 58]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["setCurrentInputScholarship", ["get", "scholarship", ["loc", [null, [148, 107], [148, 118]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [148, 120]]], 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editScholarshipID"], ["value", "target.value"], ["loc", [null, [null, null], [149, 66]]], 0, 0], 0, 0, 0, 0], ["attribute", "value", ["get", "scholarship.note", ["loc", [null, [151, 33], [151, 49]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["setCurrentInputScholarship", ["get", "scholarship", ["loc", [null, [151, 98], [151, 109]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [151, 111]]], 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editScholarshipNote"], ["value", "target.value"], ["loc", [null, [null, null], [152, 68]]], 0, 0], 0, 0, 0, 0], ["element", "action", ["deleteScholarship", ["get", "scholarship", ["loc", [null, [154, 43], [154, 54]]], 0, 0, 0, 0]], [], ["loc", [null, [154, 14], [154, 56]]], 0, 0]],
          locals: ["scholarship"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 50,
              "column": 0
            },
            "end": {
              "line": 221,
              "column": 0
            }
          },
          "moduleName": "students-records/templates/components/student-data-entry.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" Show data entry form ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" This makes all the tabs visiable, this is not where they become clickable !");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui top attached tabular menu");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "active item");
          dom.setAttribute(el2, "data-tab", "basics");
          var el3 = dom.createTextNode("Basic Info");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "item");
          dom.setAttribute(el2, "data-tab", "advanceStanding");
          var el3 = dom.createTextNode("Advance Standing");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "item");
          dom.setAttribute(el2, "data-tab", "scholarshipsAwards");
          var el3 = dom.createTextNode("Scholarships And Awards");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "item");
          dom.setAttribute(el2, "data-tab", "registrationInfo");
          var el3 = dom.createTextNode("Registration Info");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "item");
          dom.setAttribute(el2, "data-tab", "systemCode");
          var el3 = dom.createTextNode("Manage System Code");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    \n\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui bottom attached active tab segment");
          dom.setAttribute(el1, "data-tab", "basics");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment(" student basic information !");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui grid");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "ui right aligned  seven wide column");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "ui form");
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "inline field");
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("label");
          var el7 = dom.createTextNode("Student Number");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "inline field");
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("label");
          var el7 = dom.createTextNode("First Name");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "inline field");
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("label");
          var el7 = dom.createTextNode("Last Name");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "inline field");
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("label");
          var el7 = dom.createTextNode("Gender");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n             ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("select");
          var el7 = dom.createTextNode("\n");
          dom.appendChild(el6, el7);
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("            ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "inline field");
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("label");
          var el7 = dom.createTextNode("Date of Birth");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("input");
          dom.setAttribute(el6, "type", "date");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "inline field");
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("label");
          var el7 = dom.createTextNode("Residency");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("      \n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("select");
          var el7 = dom.createTextNode("\n");
          dom.appendChild(el6, el7);
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("            ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment(" Show student photo ");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "ui center aligned  seven wide column segment");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("img");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui tab");
          dom.setAttribute(el1, "data-tab", "advanceStanding");
          var el2 = dom.createTextNode(" \n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h2");
          var el3 = dom.createTextNode("Information for Advance Standing");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("\n      Course\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      Description\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      Units\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      Grade\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      From\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui tab");
          dom.setAttribute(el1, "data-tab", "scholarshipsAwards");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h2");
          var el3 = dom.createTextNode("Information for Scholarships and Awards");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          var el3 = dom.createTextNode("Create new scholarship");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui tab");
          dom.setAttribute(el1, "data-tab", "registrationInfo");
          var el2 = dom.createTextNode("\n     ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("\n      Registration Comments:  \n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n       ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("input");
          dom.setAttribute(el3, "type", "text");
          dom.setAttribute(el3, "class", "form-control");
          dom.setAttribute(el3, "placeholder", "Registration comments");
          dom.setAttribute(el3, "autofocus", "autofocus");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      Basis Of Admission: \n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("input");
          dom.setAttribute(el3, "type", "text");
          dom.setAttribute(el3, "class", "form-control");
          dom.setAttribute(el3, "placeholder", "Basis of admission");
          dom.setAttribute(el3, "autofocus", "autofocus");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("    \n      Admission average\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("input");
          dom.setAttribute(el3, "type", "number");
          dom.setAttribute(el3, "class", "form-control");
          dom.setAttribute(el3, "placeholder", "Admission average");
          dom.setAttribute(el3, "autofocus", "autofocus");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      Admission Comments\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("  \n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("input");
          dom.setAttribute(el3, "type", "text");
          dom.setAttribute(el3, "class", "form-control");
          dom.setAttribute(el3, "placeholder", "Admission comments");
          dom.setAttribute(el3, "autofocus", "autofocus");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" OLD TABS THAT WE ARE KEEPING FOR THE TIME BEING, probably wont need!");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui tab");
          dom.setAttribute(el1, "data-tab", "program");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment(" Program records, courses and grades !");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h2");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui tab");
          dom.setAttribute(el1, "data-tab", "others");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment(" Others !");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h2");
          var el3 = dom.createTextNode("Other data");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" OLD TABS THAT WE ARE KEEPING FOR THE TIME BEING, probably wont need and isnt showing right now!");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n\n   ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui tab");
          dom.setAttribute(el1, "data-tab", "systemCode");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment(" Manage System Code !");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    \n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element5 = dom.childAt(fragment, [7, 3]);
          var element6 = dom.childAt(element5, [1, 1]);
          var element7 = dom.childAt(element6, [7, 3]);
          var element8 = dom.childAt(element6, [9, 3]);
          var element9 = dom.childAt(element6, [11, 3]);
          var element10 = dom.childAt(element5, [5, 1]);
          var element11 = dom.childAt(fragment, [12]);
          var element12 = dom.childAt(element11, [7]);
          var element13 = dom.childAt(fragment, [14, 4]);
          var element14 = dom.childAt(element13, [7]);
          var element15 = dom.childAt(element13, [17]);
          var element16 = dom.childAt(element13, [27]);
          var element17 = dom.childAt(element13, [37]);
          var element18 = dom.childAt(fragment, [18]);
          var element19 = dom.childAt(element18, [7]);
          var morphs = new Array(28);
          morphs[0] = dom.createMorphAt(dom.childAt(element6, [1]), 3, 3);
          morphs[1] = dom.createMorphAt(dom.childAt(element6, [3]), 3, 3);
          morphs[2] = dom.createMorphAt(dom.childAt(element6, [5]), 3, 3);
          morphs[3] = dom.createAttrMorph(element7, 'onchange');
          morphs[4] = dom.createMorphAt(element7, 1, 1);
          morphs[5] = dom.createAttrMorph(element8, 'value');
          morphs[6] = dom.createAttrMorph(element8, 'onchange');
          morphs[7] = dom.createAttrMorph(element9, 'onchange');
          morphs[8] = dom.createMorphAt(element9, 1, 1);
          morphs[9] = dom.createAttrMorph(element10, 'src');
          morphs[10] = dom.createMorphAt(element11, 3, 3);
          morphs[11] = dom.createElementMorph(element12);
          morphs[12] = dom.createMorphAt(element13, 3, 3);
          morphs[13] = dom.createAttrMorph(element14, 'value');
          morphs[14] = dom.createAttrMorph(element14, 'onchange');
          morphs[15] = dom.createMorphAt(element13, 13, 13);
          morphs[16] = dom.createAttrMorph(element15, 'value');
          morphs[17] = dom.createAttrMorph(element15, 'onchange');
          morphs[18] = dom.createMorphAt(element13, 23, 23);
          morphs[19] = dom.createAttrMorph(element16, 'value');
          morphs[20] = dom.createAttrMorph(element16, 'onchange');
          morphs[21] = dom.createMorphAt(element13, 33, 33);
          morphs[22] = dom.createAttrMorph(element17, 'value');
          morphs[23] = dom.createAttrMorph(element17, 'onchange');
          morphs[24] = dom.createMorphAt(dom.childAt(element18, [5]), 0, 0);
          morphs[25] = dom.createMorphAt(element19, 1, 1);
          morphs[26] = dom.createMorphAt(element19, 3, 3);
          morphs[27] = dom.createMorphAt(dom.childAt(fragment, [24]), 3, 3);
          return morphs;
        },
        statements: [["inline", "input", [], ["size", "10", "type", "text", "value", ["subexpr", "@mut", [["get", "currentStudent.number", ["loc", [null, [76, 51], [76, 72]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [76, 12], [76, 74]]], 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "currentStudent.firstName", ["loc", [null, [80, 41], [80, 65]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [80, 12], [80, 67]]], 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "currentStudent.lastName", ["loc", [null, [84, 40], [84, 63]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [84, 12], [84, 66]]], 0, 0], ["attribute", "onchange", ["subexpr", "action", ["selectGender"], ["value", "target.value"], ["loc", [null, [null, null], [88, 76]]], 0, 0], 0, 0, 0, 0], ["block", "each", [["get", "genderModel", ["loc", [null, [89, 22], [89, 33]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [89, 14], [92, 23]]]], ["attribute", "value", ["get", "selectedDate", ["loc", [null, [97, 27], [97, 39]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["assignDate"], ["value", "target.value"], ["loc", [null, [null, null], [97, 107]]], 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["selectResidency"], ["value", "target.value"], ["loc", [null, [null, null], [101, 78]]], 0, 0], 0, 0, 0, 0], ["block", "each", [["get", "residencyModel", ["loc", [null, [102, 22], [102, 36]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [102, 14], [105, 23]]]], ["attribute", "src", ["get", "studentPhoto", ["loc", [null, [112, 20], [112, 32]]], 0, 0, 0, 0], 0, 0, 0, 0], ["block", "each", [["get", "scholarshipRecords", ["loc", [null, [141, 12], [141, 30]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [141, 4], [155, 13]]]], ["element", "action", ["createNewScholarship"], [], ["loc", [null, [158, 12], [158, 45]]], 0, 0], ["content", "currentStudent.registrationComments", ["loc", [null, [167, 6], [167, 45]]], 0, 0, 0, 0], ["attribute", "value", ["get", "currentStudent.registrationComments", ["loc", [null, [169, 34], [169, 69]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editRegistrationComments"], ["value", "target.value"], ["loc", [null, [null, null], [170, 96]]], 0, 0], 0, 0, 0, 0], ["content", "currentStudent.basisOfAdmission", ["loc", [null, [174, 6], [174, 41]]], 0, 0, 0, 0], ["attribute", "value", ["get", "currentStudent.basisOfAdmission", ["loc", [null, [176, 33], [176, 64]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editBasisOfAdmission"], ["value", "target.value"], ["loc", [null, [null, null], [177, 91]]], 0, 0], 0, 0, 0, 0], ["content", "currentStudent.admissionAverage", ["loc", [null, [181, 6], [181, 41]]], 0, 0, 0, 0], ["attribute", "value", ["get", "currentStudent.admissionAverage", ["loc", [null, [183, 35], [183, 66]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editAdmissionAverage"], ["value", "target.value"], ["loc", [null, [null, null], [184, 91]]], 0, 0], 0, 0, 0, 0], ["content", "currentStudent.admissionComments", ["loc", [null, [188, 6], [188, 42]]], 0, 0, 0, 0], ["attribute", "value", ["get", "currentStudent.admissionComments", ["loc", [null, [190, 33], [190, 65]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editAdmissionComments"], ["value", "target.value"], ["loc", [null, [null, null], [191, 92]]], 0, 0], 0, 0, 0, 0], ["content", "currentStudent.number", ["loc", [null, [202, 8], [202, 33]]], 0, 0, 0, 0], ["content", "currentStudent.firstName", ["loc", [null, [203, 11], [203, 39]]], 0, 0, 0, 0], ["content", "currentStudent.lastName", ["loc", [null, [203, 40], [203, 67]]], 0, 0, 0, 0], ["inline", "manage-system-code", [], ["ResidencyModel", ["subexpr", "@mut", [["get", "residencyModel", ["loc", [null, [217, 42], [217, 56]]], 0, 0, 0, 0]], [], [], 0, 0], "GenderModel", ["subexpr", "@mut", [["get", "genderModel", ["loc", [null, [217, 71], [217, 82]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [217, 4], [217, 85]]], 0, 0]],
        locals: [],
        templates: [child0, child1, child2]
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
            "line": 223,
            "column": 0
          }
        },
        "moduleName": "students-records/templates/components/student-data-entry.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui center aligned header");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("Students Records Data Entry");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Show the menu bar");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui inverted menu");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "save icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    Save\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "undo icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    Undo\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "step backward icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    First\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "arrow left icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    Previous\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "arrow right icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    Next\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "step forward icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    Last\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "content icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    All Records\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "search icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    Find Record\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element20 = dom.childAt(fragment, [4]);
        var element21 = dom.childAt(element20, [1]);
        var element22 = dom.childAt(element20, [3]);
        var element23 = dom.childAt(element20, [5]);
        var element24 = dom.childAt(element20, [7]);
        var element25 = dom.childAt(element20, [9]);
        var element26 = dom.childAt(element20, [11]);
        var element27 = dom.childAt(element20, [13]);
        var element28 = dom.childAt(element20, [15]);
        var morphs = new Array(10);
        morphs[0] = dom.createElementMorph(element21);
        morphs[1] = dom.createElementMorph(element22);
        morphs[2] = dom.createElementMorph(element23);
        morphs[3] = dom.createElementMorph(element24);
        morphs[4] = dom.createElementMorph(element25);
        morphs[5] = dom.createElementMorph(element26);
        morphs[6] = dom.createElementMorph(element27);
        morphs[7] = dom.createElementMorph(element28);
        morphs[8] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        morphs[9] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        return morphs;
      },
      statements: [["element", "action", ["saveStudent"], [], ["loc", [null, [7, 18], [7, 42]]], 0, 0], ["element", "action", ["undoSave"], [], ["loc", [null, [11, 18], [11, 39]]], 0, 0], ["element", "action", ["firstStudent"], [], ["loc", [null, [15, 18], [15, 43]]], 0, 0], ["element", "action", ["previousStudent"], [], ["loc", [null, [19, 18], [19, 46]]], 0, 0], ["element", "action", ["nextStudent"], [], ["loc", [null, [23, 18], [23, 42]]], 0, 0], ["element", "action", ["lastStudent"], [], ["loc", [null, [27, 18], [27, 42]]], 0, 0], ["element", "action", ["allStudents"], [], ["loc", [null, [31, 18], [31, 42]]], 0, 0], ["element", "action", ["findStudent"], [], ["loc", [null, [35, 18], [35, 42]]], 0, 0], ["block", "if", [["get", "showFindStudent", ["loc", [null, [41, 6], [41, 21]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [41, 0], [45, 7]]]], ["block", "if", [["get", "showAllStudents", ["loc", [null, [47, 6], [47, 21]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [47, 0], [221, 7]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});