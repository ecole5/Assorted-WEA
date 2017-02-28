export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
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
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        return morphs;
      },
      statements: [
        ["inline","find-student",[],["notDONE",["subexpr","@mut",[["get","showFindStudent",["loc",[null,[43,26],[43,41]]],0,0,0,0]],[],[],0,0]],["loc",[null,[43,1],[43,44]]],0,0]
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
        morphs[0] = dom.createMorphAt(fragment,3,3,contextualElement);
        return morphs;
      },
      statements: [
        ["inline","all-students",[],["INDEX",["subexpr","@mut",[["get","currentIndex",["loc",[null,[49,24],[49,36]]],0,0,0,0]],[],[],0,0],"notDONE",["subexpr","@mut",[["get","showAllStudents",["loc",[null,[49,47],[49,62]]],0,0,0,0]],[],[],0,0],"offset",["subexpr","@mut",[["get","offset",["loc",[null,[49,72],[49,78]]],0,0,0,0]],[],[],0,0],"studentsModel",["subexpr","@mut",[["get","studentsRecords",["loc",[null,[49,95],[49,110]]],0,0,0,0]],[],[],0,0]],["loc",[null,[49,1],[49,112]]],0,0]
      ],
      locals: [],
      templates: []
    };
  }());
  var child2 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 97,
              "column": 14
            },
            "end": {
              "line": 100,
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
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'value');
          morphs[1] = dom.createAttrMorph(element0, 'selected');
          morphs[2] = dom.createMorphAt(element0,0,0);
          return morphs;
        },
        statements: [
          ["attribute","value",["get","residencyChoice.id",["loc",[null,[98,32],[98,50]]],0,0,0,0],0,0,0,0],
          ["attribute","selected",["subexpr","eq",[["get","currentStudent.resInfo.id",["loc",[null,[98,67],[98,92]]],0,0,0,0],["get","residencyChoice.id",["loc",[null,[99,67],[99,85]]],0,0,0,0]],[],["loc",[null,[null,null],[99,87]]],0,0],0,0,0,0],
          ["content","residencyChoice.name",["loc",[null,[99,88],[99,112]]],0,0,0,0]
        ],
        locals: ["residencyChoice"],
        templates: []
      };
    }());
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
            "line": 182,
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
        dom.setAttribute(el1,"class","ui top attached tabular menu");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","active item");
        dom.setAttribute(el2,"data-tab","basics");
        var el3 = dom.createTextNode("Basic Info");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","item");
        dom.setAttribute(el2,"data-tab","advanceStanding");
        var el3 = dom.createTextNode("Advance Standing");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","item");
        dom.setAttribute(el2,"data-tab","scholarshipsAwards");
        var el3 = dom.createTextNode("Scholarships And Awards");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","item");
        dom.setAttribute(el2,"data-tab","registrationInfo");
        var el3 = dom.createTextNode("Registration Info");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","ui bottom attached active tab segment");
        dom.setAttribute(el1,"data-tab","basics");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" student basic information !");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","ui grid");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","ui right aligned  seven wide column");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","ui form");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","inline field");
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
        dom.setAttribute(el5,"class","inline field");
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
        dom.setAttribute(el5,"class","inline field");
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
        dom.setAttribute(el5,"class","inline field");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        var el7 = dom.createTextNode("Gender");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("select");
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("option");
        dom.setAttribute(el7,"value","1");
        var el8 = dom.createTextNode("Male");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("option");
        dom.setAttribute(el7,"value","2");
        var el8 = dom.createTextNode("Female");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","inline field");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        var el7 = dom.createTextNode("Date of Birth");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("input");
        dom.setAttribute(el6,"type","date");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","inline field");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("label");
        var el7 = dom.createTextNode("Residency");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
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
        dom.setAttribute(el3,"class","ui center aligned  seven wide column segment");
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
        dom.setAttribute(el1,"class","ui tab");
        dom.setAttribute(el1,"data-tab","advanceStanding");
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
        dom.setAttribute(el1,"class","ui tab");
        dom.setAttribute(el1,"data-tab","scholarshipsAwards");
        var el2 = dom.createTextNode("\n     ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("Information for Scholarships and Awards");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        var el3 = dom.createTextNode("\n      ID\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      Note\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","ui tab");
        dom.setAttribute(el1,"data-tab","registrationInfo");
        var el2 = dom.createTextNode("\n     ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("Information for registration Info");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        var el3 = dom.createTextNode("\n      Comments\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      Basis Of Admission\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      Admission average\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      Admission \n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" OLD TABS THAT WE ARE KEEPING FOR THE TIME BEING, probably wont need!");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","ui tab");
        dom.setAttribute(el1,"data-tab","program");
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
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","ui tab");
        dom.setAttribute(el1,"data-tab","others");
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
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" OLD TABS THAT WE ARE KEEPING FOR THE TIME BEING, probably wont need and isnt showing right now!");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  \n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  \n\n\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [7, 3]);
        var element2 = dom.childAt(element1, [1, 1]);
        var element3 = dom.childAt(element2, [7, 3]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element3, [3]);
        var element6 = dom.childAt(element2, [9, 3]);
        var element7 = dom.childAt(element2, [11, 3]);
        var element8 = dom.childAt(element1, [5, 1]);
        var element9 = dom.childAt(fragment, [18]);
        var element10 = dom.childAt(element9, [7]);
        var morphs = new Array(14);
        morphs[0] = dom.createMorphAt(dom.childAt(element2, [1]),3,3);
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [3]),3,3);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [5]),3,3);
        morphs[3] = dom.createAttrMorph(element3, 'onchange');
        morphs[4] = dom.createAttrMorph(element4, 'selected');
        morphs[5] = dom.createAttrMorph(element5, 'selected');
        morphs[6] = dom.createAttrMorph(element6, 'value');
        morphs[7] = dom.createAttrMorph(element6, 'onchange');
        morphs[8] = dom.createAttrMorph(element7, 'onchange');
        morphs[9] = dom.createMorphAt(element7,1,1);
        morphs[10] = dom.createAttrMorph(element8, 'src');
        morphs[11] = dom.createMorphAt(dom.childAt(element9, [5]),0,0);
        morphs[12] = dom.createMorphAt(element10,1,1);
        morphs[13] = dom.createMorphAt(element10,3,3);
        return morphs;
      },
      statements: [
        ["inline","input",[],["size","10","type","text","value",["subexpr","@mut",[["get","currentStudent.number",["loc",[null,[73,51],[73,72]]],0,0,0,0]],[],[],0,0]],["loc",[null,[73,12],[73,74]]],0,0],
        ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","currentStudent.firstName",["loc",[null,[77,41],[77,65]]],0,0,0,0]],[],[],0,0]],["loc",[null,[77,12],[77,67]]],0,0],
        ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","currentStudent.lastName",["loc",[null,[81,40],[81,63]]],0,0,0,0]],[],[],0,0]],["loc",[null,[81,12],[81,66]]],0,0],
        ["attribute","onchange",["subexpr","action",["selectGender"],["value","target.value"],["loc",[null,[null,null],[85,75]]],0,0],0,0,0,0],
        ["attribute","selected",["subexpr","eq",[1,["get","currentStudent.gender",["loc",[null,[86,46],[86,67]]],0,0,0,0]],[],["loc",[null,[null,null],[86,69]]],0,0],0,0,0,0],
        ["attribute","selected",["subexpr","eq",[2,["get","currentStudent.gender",["loc",[null,[87,46],[87,67]]],0,0,0,0]],[],["loc",[null,[null,null],[87,69]]],0,0],0,0,0,0],
        ["attribute","value",["get","selectedDate",["loc",[null,[92,27],[92,39]]],0,0,0,0],0,0,0,0],
        ["attribute","onchange",["subexpr","action",["assignDate"],["value","target.value"],["loc",[null,[null,null],[92,107]]],0,0],0,0,0,0],
        ["attribute","onchange",["subexpr","action",["selectResidency"],["value","target.value"],["loc",[null,[null,null],[96,78]]],0,0],0,0,0,0],
        ["block","each",[["get","residencyModel",["loc",[null,[97,22],[97,36]]],0,0,0,0]],[],0,null,["loc",[null,[97,14],[100,23]]]],
        ["attribute","src",["get","studentPhoto",["loc",[null,[107,20],[107,32]]],0,0,0,0],0,0,0,0],
        ["content","currentStudent.number",["loc",[null,[166,8],[166,33]]],0,0,0,0],
        ["content","currentStudent.firstName",["loc",[null,[167,11],[167,39]]],0,0,0,0],
        ["content","currentStudent.lastName",["loc",[null,[167,40],[167,67]]],0,0,0,0]
      ],
      locals: [],
      templates: [child0]
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
          "line": 184,
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
      dom.setAttribute(el1,"class","ui center aligned header");
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
      dom.setAttribute(el1,"class","ui inverted menu");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"class","item");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","save icon");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    Save\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"class","item");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","undo icon");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    Undo\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"class","item");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","step backward icon");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    First\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"class","item");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","arrow left icon");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    Previous\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"class","item");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","arrow right icon");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    Next\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"class","item");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","step forward icon");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    Last\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"class","item");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","content icon");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    All Records\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"class","item");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","search icon");
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
      var element11 = dom.childAt(fragment, [4]);
      var element12 = dom.childAt(element11, [1]);
      var element13 = dom.childAt(element11, [3]);
      var element14 = dom.childAt(element11, [5]);
      var element15 = dom.childAt(element11, [7]);
      var element16 = dom.childAt(element11, [9]);
      var element17 = dom.childAt(element11, [11]);
      var element18 = dom.childAt(element11, [13]);
      var element19 = dom.childAt(element11, [15]);
      var morphs = new Array(10);
      morphs[0] = dom.createElementMorph(element12);
      morphs[1] = dom.createElementMorph(element13);
      morphs[2] = dom.createElementMorph(element14);
      morphs[3] = dom.createElementMorph(element15);
      morphs[4] = dom.createElementMorph(element16);
      morphs[5] = dom.createElementMorph(element17);
      morphs[6] = dom.createElementMorph(element18);
      morphs[7] = dom.createElementMorph(element19);
      morphs[8] = dom.createMorphAt(fragment,6,6,contextualElement);
      morphs[9] = dom.createMorphAt(fragment,8,8,contextualElement);
      return morphs;
    },
    statements: [
      ["element","action",["saveStudent"],[],["loc",[null,[7,18],[7,42]]],0,0],
      ["element","action",["undoSave"],[],["loc",[null,[11,18],[11,39]]],0,0],
      ["element","action",["firstStudent"],[],["loc",[null,[15,18],[15,43]]],0,0],
      ["element","action",["previousStudent"],[],["loc",[null,[19,18],[19,46]]],0,0],
      ["element","action",["nextStudent"],[],["loc",[null,[23,18],[23,42]]],0,0],
      ["element","action",["lastStudent"],[],["loc",[null,[27,18],[27,42]]],0,0],
      ["element","action",["allStudents"],[],["loc",[null,[31,18],[31,42]]],0,0],
      ["element","action",["findStudent"],[],["loc",[null,[35,18],[35,42]]],0,0],
      ["block","if",[["get","showFindStudent",["loc",[null,[41,6],[41,21]]],0,0,0,0]],[],0,null,["loc",[null,[41,0],[45,7]]]],
      ["block","if",[["get","showAllStudents",["loc",[null,[47,6],[47,21]]],0,0,0,0]],[],1,2,["loc",[null,[47,0],[182,7]]]]
    ],
    locals: [],
    templates: [child0, child1, child2]
  };
}()));