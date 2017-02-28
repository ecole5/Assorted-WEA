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
            var element10 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element10, 'value');
            morphs[1] = dom.createAttrMorph(element10, 'selected');
            morphs[2] = dom.createMorphAt(element10, 0, 0);
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
            var element9 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element9, 'value');
            morphs[1] = dom.createAttrMorph(element9, 'selected');
            morphs[2] = dom.createMorphAt(element9, 0, 0);
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
                "line": 124,
                "column": 4
              },
              "end": {
                "line": 162,
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
            var el1 = dom.createTextNode("      Course\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("input");
            dom.setAttribute(el1, "type", "text");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      Description\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n       ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("input");
            dom.setAttribute(el1, "type", "text");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      Units\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("input");
            dom.setAttribute(el1, "type", "text");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      Grade\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("input");
            dom.setAttribute(el1, "type", "text");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      From\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n       ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("input");
            dom.setAttribute(el1, "type", "text");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("br");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            var el2 = dom.createTextNode("Delete advance standing");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element3 = dom.childAt(fragment, [7]);
            var element4 = dom.childAt(fragment, [17]);
            var element5 = dom.childAt(fragment, [27]);
            var element6 = dom.childAt(fragment, [37]);
            var element7 = dom.childAt(fragment, [47]);
            var element8 = dom.childAt(fragment, [51]);
            var morphs = new Array(21);
            morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[1] = dom.createAttrMorph(element3, 'value');
            morphs[2] = dom.createAttrMorph(element3, 'onclick');
            morphs[3] = dom.createAttrMorph(element3, 'onchange');
            morphs[4] = dom.createMorphAt(fragment, 13, 13, contextualElement);
            morphs[5] = dom.createAttrMorph(element4, 'value');
            morphs[6] = dom.createAttrMorph(element4, 'onclick');
            morphs[7] = dom.createAttrMorph(element4, 'onchange');
            morphs[8] = dom.createMorphAt(fragment, 23, 23, contextualElement);
            morphs[9] = dom.createAttrMorph(element5, 'value');
            morphs[10] = dom.createAttrMorph(element5, 'onclick');
            morphs[11] = dom.createAttrMorph(element5, 'onchange');
            morphs[12] = dom.createMorphAt(fragment, 33, 33, contextualElement);
            morphs[13] = dom.createAttrMorph(element6, 'value');
            morphs[14] = dom.createAttrMorph(element6, 'onclick');
            morphs[15] = dom.createAttrMorph(element6, 'onchange');
            morphs[16] = dom.createMorphAt(fragment, 43, 43, contextualElement);
            morphs[17] = dom.createAttrMorph(element7, 'value');
            morphs[18] = dom.createAttrMorph(element7, 'onclick');
            morphs[19] = dom.createAttrMorph(element7, 'onchange');
            morphs[20] = dom.createElementMorph(element8);
            return morphs;
          },
          statements: [["content", "advanceStanding.course", ["loc", [null, [128, 6], [128, 32]]], 0, 0, 0, 0], ["attribute", "value", ["get", "advanceStanding.course", ["loc", [null, [130, 33], [130, 55]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["setCurrentAdvanceStanding", ["get", "advanceStanding", ["loc", [null, [130, 103], [130, 118]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [130, 120]]], 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editAdvanceStandingCourse"], ["value", "target.value"], ["loc", [null, [null, null], [131, 74]]], 0, 0], 0, 0, 0, 0], ["content", "advanceStanding.description", ["loc", [null, [135, 6], [135, 37]]], 0, 0, 0, 0], ["attribute", "value", ["get", "advanceStanding.description", ["loc", [null, [137, 34], [137, 61]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["setCurrentAdvanceStanding", ["get", "advanceStanding", ["loc", [null, [137, 109], [137, 124]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [137, 126]]], 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editAdvanceStandingDescription"], ["value", "target.value"], ["loc", [null, [null, null], [138, 79]]], 0, 0], 0, 0, 0, 0], ["content", "advanceStanding.units", ["loc", [null, [142, 6], [142, 31]]], 0, 0, 0, 0], ["attribute", "value", ["get", "advanceStanding.units", ["loc", [null, [144, 33], [144, 54]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["setCurrentAdvanceStanding", ["get", "advanceStanding", ["loc", [null, [144, 102], [144, 117]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [144, 119]]], 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editAdvanceStandingUnits"], ["value", "target.value"], ["loc", [null, [null, null], [145, 73]]], 0, 0], 0, 0, 0, 0], ["content", "advanceStanding.grade", ["loc", [null, [149, 6], [149, 31]]], 0, 0, 0, 0], ["attribute", "value", ["get", "advanceStanding.grade", ["loc", [null, [151, 33], [151, 54]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["setCurrentAdvanceStanding", ["get", "advanceStanding", ["loc", [null, [151, 102], [151, 117]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [151, 119]]], 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editAdvanceStandingGrade"], ["value", "target.value"], ["loc", [null, [null, null], [152, 73]]], 0, 0], 0, 0, 0, 0], ["content", "advanceStanding.from", ["loc", [null, [156, 6], [156, 30]]], 0, 0, 0, 0], ["attribute", "value", ["get", "advanceStanding.from", ["loc", [null, [158, 34], [158, 54]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["setCurrentAdvanceStanding", ["get", "advanceStanding", ["loc", [null, [158, 102], [158, 117]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [158, 119]]], 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editAdvanceStandingFrom"], ["value", "target.value"], ["loc", [null, [null, null], [159, 72]]], 0, 0], 0, 0, 0, 0], ["element", "action", ["deleteAdvanceStanding", ["get", "advanceStanding", ["loc", [null, [161, 45], [161, 60]]], 0, 0, 0, 0]], [], ["loc", [null, [161, 12], [161, 62]]], 0, 0]],
          locals: ["advanceStanding"],
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
                "line": 169,
                "column": 4
              },
              "end": {
                "line": 183,
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
          statements: [["content", "scholarship.scholarshipID", ["loc", [null, [171, 11], [171, 40]]], 0, 0, 0, 0], ["content", "scholarship.note", ["loc", [null, [173, 11], [173, 31]]], 0, 0, 0, 0], ["attribute", "value", ["get", "scholarship.scholarshipID", ["loc", [null, [176, 33], [176, 58]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["setCurrentInputScholarship", ["get", "scholarship", ["loc", [null, [176, 107], [176, 118]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [176, 120]]], 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editScholarshipID"], ["value", "target.value"], ["loc", [null, [null, null], [177, 66]]], 0, 0], 0, 0, 0, 0], ["attribute", "value", ["get", "scholarship.note", ["loc", [null, [179, 33], [179, 49]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["setCurrentInputScholarship", ["get", "scholarship", ["loc", [null, [179, 98], [179, 109]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [179, 111]]], 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editScholarshipNote"], ["value", "target.value"], ["loc", [null, [null, null], [180, 68]]], 0, 0], 0, 0, 0, 0], ["element", "action", ["deleteScholarship", ["get", "scholarship", ["loc", [null, [182, 43], [182, 54]]], 0, 0, 0, 0]], [], ["loc", [null, [182, 14], [182, 56]]], 0, 0]],
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
              "line": 246,
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
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          var el3 = dom.createTextNode("Create new advance standing");
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
          var el2 = dom.createTextNode("      Registration Comments:  \n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n       ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("input");
          dom.setAttribute(el2, "type", "text");
          dom.setAttribute(el2, "class", "form-control");
          dom.setAttribute(el2, "placeholder", "Registration comments");
          dom.setAttribute(el2, "autofocus", "autofocus");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      Basis Of Admission: \n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("input");
          dom.setAttribute(el2, "type", "text");
          dom.setAttribute(el2, "class", "form-control");
          dom.setAttribute(el2, "placeholder", "Basis of admission");
          dom.setAttribute(el2, "autofocus", "autofocus");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    \n      Admission average\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("input");
          dom.setAttribute(el2, "type", "number");
          dom.setAttribute(el2, "class", "form-control");
          dom.setAttribute(el2, "placeholder", "Admission average");
          dom.setAttribute(el2, "autofocus", "autofocus");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      Admission Comments\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  \n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("input");
          dom.setAttribute(el2, "type", "text");
          dom.setAttribute(el2, "class", "form-control");
          dom.setAttribute(el2, "placeholder", "Admission comments");
          dom.setAttribute(el2, "autofocus", "autofocus");
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
          var element11 = dom.childAt(fragment, [7, 3]);
          var element12 = dom.childAt(element11, [1, 1]);
          var element13 = dom.childAt(element12, [7, 3]);
          var element14 = dom.childAt(element12, [9, 3]);
          var element15 = dom.childAt(element12, [11, 3]);
          var element16 = dom.childAt(element11, [5, 1]);
          var element17 = dom.childAt(fragment, [10]);
          var element18 = dom.childAt(element17, [7]);
          var element19 = dom.childAt(fragment, [12]);
          var element20 = dom.childAt(element19, [7]);
          var element21 = dom.childAt(fragment, [14]);
          var element22 = dom.childAt(element21, [10]);
          var element23 = dom.childAt(element21, [20]);
          var element24 = dom.childAt(element21, [30]);
          var element25 = dom.childAt(element21, [40]);
          var element26 = dom.childAt(fragment, [18]);
          var element27 = dom.childAt(element26, [7]);
          var morphs = new Array(30);
          morphs[0] = dom.createMorphAt(dom.childAt(element12, [1]), 3, 3);
          morphs[1] = dom.createMorphAt(dom.childAt(element12, [3]), 3, 3);
          morphs[2] = dom.createMorphAt(dom.childAt(element12, [5]), 3, 3);
          morphs[3] = dom.createAttrMorph(element13, 'onchange');
          morphs[4] = dom.createMorphAt(element13, 1, 1);
          morphs[5] = dom.createAttrMorph(element14, 'value');
          morphs[6] = dom.createAttrMorph(element14, 'onchange');
          morphs[7] = dom.createAttrMorph(element15, 'onchange');
          morphs[8] = dom.createMorphAt(element15, 1, 1);
          morphs[9] = dom.createAttrMorph(element16, 'src');
          morphs[10] = dom.createMorphAt(element17, 5, 5);
          morphs[11] = dom.createElementMorph(element18);
          morphs[12] = dom.createMorphAt(element19, 3, 3);
          morphs[13] = dom.createElementMorph(element20);
          morphs[14] = dom.createMorphAt(element21, 6, 6);
          morphs[15] = dom.createAttrMorph(element22, 'value');
          morphs[16] = dom.createAttrMorph(element22, 'onchange');
          morphs[17] = dom.createMorphAt(element21, 16, 16);
          morphs[18] = dom.createAttrMorph(element23, 'value');
          morphs[19] = dom.createAttrMorph(element23, 'onchange');
          morphs[20] = dom.createMorphAt(element21, 26, 26);
          morphs[21] = dom.createAttrMorph(element24, 'value');
          morphs[22] = dom.createAttrMorph(element24, 'onchange');
          morphs[23] = dom.createMorphAt(element21, 36, 36);
          morphs[24] = dom.createAttrMorph(element25, 'value');
          morphs[25] = dom.createAttrMorph(element25, 'onchange');
          morphs[26] = dom.createMorphAt(dom.childAt(element26, [5]), 0, 0);
          morphs[27] = dom.createMorphAt(element27, 1, 1);
          morphs[28] = dom.createMorphAt(element27, 3, 3);
          morphs[29] = dom.createMorphAt(dom.childAt(fragment, [24]), 3, 3);
          return morphs;
        },
        statements: [["inline", "input", [], ["size", "10", "type", "text", "value", ["subexpr", "@mut", [["get", "currentStudent.number", ["loc", [null, [76, 51], [76, 72]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [76, 12], [76, 74]]], 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "currentStudent.firstName", ["loc", [null, [80, 41], [80, 65]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [80, 12], [80, 67]]], 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "currentStudent.lastName", ["loc", [null, [84, 40], [84, 63]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [84, 12], [84, 66]]], 0, 0], ["attribute", "onchange", ["subexpr", "action", ["selectGender"], ["value", "target.value"], ["loc", [null, [null, null], [88, 76]]], 0, 0], 0, 0, 0, 0], ["block", "each", [["get", "genderModel", ["loc", [null, [89, 22], [89, 33]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [89, 14], [92, 23]]]], ["attribute", "value", ["get", "selectedDate", ["loc", [null, [97, 27], [97, 39]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["assignDate"], ["value", "target.value"], ["loc", [null, [null, null], [97, 107]]], 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["selectResidency"], ["value", "target.value"], ["loc", [null, [null, null], [101, 78]]], 0, 0], 0, 0, 0, 0], ["block", "each", [["get", "residencyModel", ["loc", [null, [102, 22], [102, 36]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [102, 14], [105, 23]]]], ["attribute", "src", ["get", "studentPhoto", ["loc", [null, [112, 20], [112, 32]]], 0, 0, 0, 0], 0, 0, 0, 0], ["block", "each", [["get", "advanceStandingRecords", ["loc", [null, [124, 12], [124, 34]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [124, 4], [162, 13]]]], ["element", "action", ["createNewAdvanceStanding"], [], ["loc", [null, [163, 12], [163, 49]]], 0, 0], ["block", "each", [["get", "scholarshipRecords", ["loc", [null, [169, 12], [169, 30]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [169, 4], [183, 13]]]], ["element", "action", ["createNewScholarship"], [], ["loc", [null, [186, 12], [186, 45]]], 0, 0], ["content", "currentStudent.registrationComments", ["loc", [null, [194, 6], [194, 45]]], 0, 0, 0, 0], ["attribute", "value", ["get", "currentStudent.registrationComments", ["loc", [null, [196, 34], [196, 69]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editRegistrationComments"], ["value", "target.value"], ["loc", [null, [null, null], [197, 96]]], 0, 0], 0, 0, 0, 0], ["content", "currentStudent.basisOfAdmission", ["loc", [null, [201, 6], [201, 41]]], 0, 0, 0, 0], ["attribute", "value", ["get", "currentStudent.basisOfAdmission", ["loc", [null, [203, 33], [203, 64]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editBasisOfAdmission"], ["value", "target.value"], ["loc", [null, [null, null], [204, 91]]], 0, 0], 0, 0, 0, 0], ["content", "currentStudent.admissionAverage", ["loc", [null, [208, 6], [208, 41]]], 0, 0, 0, 0], ["attribute", "value", ["get", "currentStudent.admissionAverage", ["loc", [null, [210, 35], [210, 66]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editAdmissionAverage"], ["value", "target.value"], ["loc", [null, [null, null], [211, 91]]], 0, 0], 0, 0, 0, 0], ["content", "currentStudent.admissionComments", ["loc", [null, [215, 6], [215, 42]]], 0, 0, 0, 0], ["attribute", "value", ["get", "currentStudent.admissionComments", ["loc", [null, [217, 33], [217, 65]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "onchange", ["subexpr", "action", ["editAdmissionComments"], ["value", "target.value"], ["loc", [null, [null, null], [218, 92]]], 0, 0], 0, 0, 0, 0], ["content", "currentStudent.number", ["loc", [null, [227, 8], [227, 33]]], 0, 0, 0, 0], ["content", "currentStudent.firstName", ["loc", [null, [228, 11], [228, 39]]], 0, 0, 0, 0], ["content", "currentStudent.lastName", ["loc", [null, [228, 40], [228, 67]]], 0, 0, 0, 0], ["inline", "manage-system-code", [], ["ResidencyModel", ["subexpr", "@mut", [["get", "residencyModel", ["loc", [null, [242, 42], [242, 56]]], 0, 0, 0, 0]], [], [], 0, 0], "GenderModel", ["subexpr", "@mut", [["get", "genderModel", ["loc", [null, [242, 71], [242, 82]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [242, 4], [242, 85]]], 0, 0]],
        locals: [],
        templates: [child0, child1, child2, child3]
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
            "line": 248,
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
        var element28 = dom.childAt(fragment, [4]);
        var element29 = dom.childAt(element28, [1]);
        var element30 = dom.childAt(element28, [3]);
        var element31 = dom.childAt(element28, [5]);
        var element32 = dom.childAt(element28, [7]);
        var element33 = dom.childAt(element28, [9]);
        var element34 = dom.childAt(element28, [11]);
        var element35 = dom.childAt(element28, [13]);
        var element36 = dom.childAt(element28, [15]);
        var morphs = new Array(10);
        morphs[0] = dom.createElementMorph(element29);
        morphs[1] = dom.createElementMorph(element30);
        morphs[2] = dom.createElementMorph(element31);
        morphs[3] = dom.createElementMorph(element32);
        morphs[4] = dom.createElementMorph(element33);
        morphs[5] = dom.createElementMorph(element34);
        morphs[6] = dom.createElementMorph(element35);
        morphs[7] = dom.createElementMorph(element36);
        morphs[8] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        morphs[9] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        return morphs;
      },
      statements: [["element", "action", ["saveStudent"], [], ["loc", [null, [7, 18], [7, 42]]], 0, 0], ["element", "action", ["undoSave"], [], ["loc", [null, [11, 18], [11, 39]]], 0, 0], ["element", "action", ["firstStudent"], [], ["loc", [null, [15, 18], [15, 43]]], 0, 0], ["element", "action", ["previousStudent"], [], ["loc", [null, [19, 18], [19, 46]]], 0, 0], ["element", "action", ["nextStudent"], [], ["loc", [null, [23, 18], [23, 42]]], 0, 0], ["element", "action", ["lastStudent"], [], ["loc", [null, [27, 18], [27, 42]]], 0, 0], ["element", "action", ["allStudents"], [], ["loc", [null, [31, 18], [31, 42]]], 0, 0], ["element", "action", ["findStudent"], [], ["loc", [null, [35, 18], [35, 42]]], 0, 0], ["block", "if", [["get", "showFindStudent", ["loc", [null, [41, 6], [41, 21]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [41, 0], [45, 7]]]], ["block", "if", [["get", "showAllStudents", ["loc", [null, [47, 6], [47, 21]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [47, 0], [246, 7]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});