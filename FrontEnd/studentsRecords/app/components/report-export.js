import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service(),
    terms:null,
    critTerm: null,
    crit:null,
    haveReport:null,
    pdf:null,
    reportJSON:null,

    students:null,
    reports:null,

    // Ouda Auth stuff for student data entry
  REP01IsPermitted: Ember.computed(function(){ //Manage system roles
    var authentication = this.get('oudaAuth');
    if (authentication.getName === "Root") {
      return true;
    } else {
      return (authentication.get('userCList').indexOf("REP01") >= 0);
    }
  }),

    init(){
        this._super(...arguments);
        var self = this;
        this.get('store').findAll('term').then(function (records) {
            self.set('terms', records);
        });
 /*       var myStore = self.get('store');
        var oneTerm = myStore.peekRecord('term', '58afb789576e752010d2339a');
        var onePlan = myStore.peekRecord('plan', '58afb77d576e752010d23399');
        var oneStudent = myStore.peekRecord('student', '585df32e0bf2ba5ea6951587');
        var oneProgram = myStore.peekRecord('program', '58afb4d3576e752010d23389');
   
          var myAdjudication = myStore.createRecord("adjudication", {
          date: new Date(),
          termAVG: 45,
          unitPassed: 5,
          unitTotal: 5,
          note: 'This is a sample note',
          program: oneProgram,
          plan: onePlan,
          term: oneTerm,
          student: oneStudent,

  
      });
//myAdjudication.save();

var myStore = self.get('store');
var oneComment = myStore.peekRecord('comment', '58dc07154e1409348019cf0d'); 
var oneAdjudication = myStore.peekRecord('adjudication', '58e2ce6f8171eb2ffccf7acb');


   var myAdjudicationComment = myStore.createRecord("adjcomment", {
            comment: oneComment,
            adjudciation: oneAdjudication,
    
  
      });
//myAdjudicationComment.save();
*/
    },


actions:{
    updateTerms: function(){
        this.set('terms', this.get('store').findall('term')); 
    },
    
    test:function(){
        console.log(this.get('crit'));
        console.log(this.get('critTerm'));
    },
    
    displayReport:function(){

            var reportjson=this.get('reportJSON');

            //currently configured for test JSON. change when have correct json
            var lines=["Adjudication Report"];
            lines[1] ="Student Number :: First Name :: Last Name :: Program :: Faculty :: Adjudication Comment" 
            for(var i=2;i<reportjson.students.length+2;i++){
                lines[i]=reportjson.students[i-2].number + " " + reportjson.students[i-2].firstName + " ";
                lines[i]+=reportjson.students[i-2].lastName + " " + reportjson.students[i-2].program + " ";
                lines[i]+=reportjson.students[i-2].faculty + " " + reportjson.students[i-2].comment + " ";
            }

            //var doc = new jsPDF();
            var doc = new jsPDF();
            doc.setFont("times","normal");
            doc.setFontSize(10);
            doc.text(lines,10,10);
            doc.output('dataurlnewwindow');
            //doc.save('test.pdf');
    },

    downloadReport:function(){
 //var XLSX = require('xlsx');
/*
function sheet_from_array_of_arrays(data, opts) {
	var ws = {};
	var range = {s: {c:10000000, r:10000000}, e: {c:0, r:0 }};
	for(var R = 0; R < data.length; ++R) {

		//for(var C = 0; C < 6; ++C) {
       //       console.log('C '+C);


//should get student number, student firstname, student lastname, program, faculty, comment code
            var v1=data[R].number;
            var v2=data[R].firstName;
            var v3=data[R].lastName;
            var v4=data[R].program;
            var v5=data[R].faculty;
            var v6=data[R].code;

			//if(range.s.r > R) {range.s.r = R;}
			//if(range.s.c > C) {range.s.c = C;}
			//if(range.e.r < R) {range.e.r = R;}
			//if(range.e.c < C) {range.e.c = C;}


			var cell1 = {v: v1 };
			if(cell1.v !== null) {
			    var cell_ref1 = XLSX.utils.encode_cell({c:0,r:R});
            }			
			if(typeof cell1.v === 'number') {cell1.t = 'n';}
			else {cell1.t = 's';}
			ws[cell_ref1] = cell1;

            var cell2 = {v: v2 };
			if(cell2.v !== null) {
			    var cell_ref2 = XLSX.utils.encode_cell({c:1,r:R});
            }			
			if(typeof cell2.v === 'number') {cell2.t = 'n';}
			else {cell2.t = 's';}			
			ws[cell_ref2] = cell2;

            var cell3 = {v: v3 };
			if(cell3.v !== null) {
			    var cell_ref3 = XLSX.utils.encode_cell({c:2,r:R});
            }			
			if(typeof cell3.v === 'number') {cell3.t = 'n';}
			else {cell3.t = 's';}			
			ws[cell_ref3] = cell3;

            var cell4 = {v: v4 };
			if(cell4.v !== null) {
			    var cell_ref4 = XLSX.utils.encode_cell({c:3,r:R});
            }			
			if(typeof cell4.v === 'number') {cell4.t = 'n';}
			else {cell4.t = 's';}			
			ws[cell_ref4] = cell4;

            var cell5 = {v: v5 };
			if(cell5.v !== null) {
			    var cell_ref5 = XLSX.utils.encode_cell({c:4,r:R});
            }			
			if(typeof cell5.v === 'number') {cell5.t = 'n';}
			else {cell5.t = 's';}			
			ws[cell_ref5] = cell5;

            var cell6 = {v: v6 };
			if(cell6.v !== null) {
			    var cell_ref6 = XLSX.utils.encode_cell({c:5,r:R});
            }			
			if(typeof cell6.v === 'number') {cell6.t = 'n';}
			else {cell6.t = 's';}			
			ws[cell_ref6] = cell6;
		//}
	}
	if(range.s.c < 10000000) {ws['!ref'] = XLSX.utils.encode_range(range);}
	return ws;
}

// original data 
var data = this.get('reportJSON').students;//[[1,2,3],[true, false, null, "sheetjs"],["foo","bar", "0.3"], ["baz", null, "qux"]]
var ws_name = "SheetJS";

function Workbook() {
	if(!(this instanceof Workbook)) {return new Workbook();}
	this.SheetNames = [];
	this.Sheets = {};
}

var wb = new Workbook(), ws = sheet_from_array_of_arrays(data);

// add worksheet to workbook 
wb.SheetNames.push(ws_name);

wb.Sheets[ws_name] = ws;

var wbout = XLSX.write(wb, {bookType:'xlsx', bookSST:false, type: 'binary'});


function s2ab(s) {
	var buf = new ArrayBuffer(s.length);
	var view = new Uint8Array(buf);
	for (var i=0; i!=s.length; ++i) {view[i] = s.charCodeAt(i) & 0xFF;}
	return buf;
}
saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), "report.xlsx");

*/
/*var data = { term: this.get('critTerm'), criteria: this.get('crit'), download:true},
            host = this.get('store').adapterFor('application').get('host'),
            //namespace = this.store.adapterFor('application').namespace,
            getURL = [ host, 'reports'].join('/'); 
            
            Ember.$.get(getURL, data).then(
                function (response) {



                    //displayDownloadOption();    
            });*/

        
var CSV = '';    
    //Set Report title in first row or line
    var arrData=this.get('reportJSON');

    CSV += 'Adjudication Report' + '\r\n\n';
    

    //1st loop is to extract each row
    for (var i = 0; i < arrData.students.length; i++) {
        var row = "";

    //2nd loop will extract each column and convert it in string comma-seprated
    //for (var index in arrData[i]) {

            var v1=arrData.students[i].number;
            var v2=arrData.students[i].firstName;
            var v3=arrData.students[i].lastName;
            var v4=arrData.students[i].program;
            var v5=arrData.students[i].faculty;
            var v6=arrData.students[i].comment;

        row += '"' + v1 + '",';
        row += '"' + v2 + '",';
        row += '"' + v3 + '",';
        row += '"' + v4 + '",';
        row += '"' + v5 + '",';
        row += '"' + v6 + '",';
    //}

    row.slice(0, row.length - 1);

    //add a line break after each row
    CSV += row + '\r\n';
    }



    //Generate a file name
    var fileName = "report";
    //this will remove the blank-spaces from the title and replace it with an underscore
    //fileName += ReportTitle.replace(/ /g,"_");   

    //Initialize file format you want csv or xls
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

    // Now the little tricky part.
    // you can use either>> window.open(uri);
    // but this will not work in some browsers
    // or you will not get the correct file extension    

    //this trick will generate a temp <a /> tag
    var link = document.createElement("a");    
    link.href = uri;

    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";

    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    },

    setTerm: function(term){
        this.set('critTerm', term);
    },

    setCrit: function(criteria){
        this.set('crit', criteria);
    },
    //this method by-passes Ember Data
    getReport: function(){

    //uncommet this for actual use
        if(this.get('critTerm')===null||this.get('crit')===null||this.get('critTerm')==="Null"){

            /*this.get('store').findAll('adjcomment')
                .then(function(adjcomment) { 
                    console.log(adjcomment);
                });
            */

        }else{
        

            //this.get('store').find('student')
            self=this;

            self.get('store').find('adjcomment')
            .then(function(adjcomment) { 

            var entries=[""];

            if(self.get('crit')==="program"){            
                //function insertionSort(arr){
                var i, len = adjcomment.length, el, j;

                for(i = 1; i<len; i++){
                    el = adjcomment[i].adjudication.program.name;
                    j = i;

                    while(j>0 && entries[j-1].adjudication.program.name>el){
                        entries[j] = entries[j-1];
                        j--;
                    }

                    entries[j] = adjcomment[i];  
                }
            }
            else if(self.get('crit')==="faculty"){
                //adjcomment[i].adjudication.plan.faculty.name;
                 var i, len = adjcomment.length, el, j;

                for(i = 1; i<len; i++){
                    el = adjcomment[i].adjudication.plan.faculty.name;
                    j = i;

                    while(j>0 && entries[j-1].adjudication.plan.faculty.name>el){
                        entries[j] = entries[j-1];
                        j--;
                    }

                    entries[j] = adjcomment[i];  
                }
            }


            //return arr;
            //}
    

            var text = '{ "employees" : [';// +
//'{ "firstName":"John" , "lastName":"Doe" },' +
//'{ "firstName":"Anna" , "lastName":"Smith" },' +
//'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

/*
            var v1=arrData.students[i].number;
            var v2=arrData.students[i].firstName;
            var v3=arrData.students[i].lastName;
            var v4=arrData.students[i].program;
            var v5=arrData.students[i].faculty;
            var v6=arrData.students[i].comment;
*/

            for(i=0;i<entries.length;i++){
                text+='{ "number":'+entries[i].adjudication.student.number +' , '+
                '{ "firstName":'+entries[i].adjudication.student.firstName +' , '+
                '{ "lastName":'+entries[i].adjudication.student.lastName +' , '+
                '{ "program":'+entries[i].adjudication.program.name +' , '+
                '{ "faculty":'+entries[i].adjudication.plan.faculty.name +' , '+
                '{ "comment":'+entries[i].comment +' , ';
//do this for all things to be in the json
            }        
            text+=']}';
            var obj = JSON.parse(text);

            });
            

            

            /*var data = { term: this.get('critTerm'), criteria: this.get('crit') },
            host = this.get('store').adapterFor('application').get('host'),
            //namespace = this.store.adapterFor('application').namespace,
            getURL = [ host, 'reports'].join('/'); 
            
            Ember.$.get(getURL, data).then(
                function (response) {
                    try{
                this.set('reportJSON',response);
                this.set("haveReport",true); 
                }
                catch(err){  }
                      
            }); */


            /*this.set("haveReport",true);
   //should get student number, student firstname, student lastname, program, faculty, comment code

           //remove test for actual use// test is test value for JSON. once we have real JSON replace test
            var test={"students":[
                    {"number":1,"firstName":"John", "lastName":"Doe","program":"Software","faculty":"engineering","code":"GG"}, 
                    {"number":2,"firstName":"Anna", "lastName":"Smith","program":"Civel","faculty":"engineering","code":"FF"},
                    {"number":3,"firstName":"Peter", "lastName":"Jones","program":"Lit","faculty":"English","code":"EE"}
                ]
            };

            this.set('reportJSON',test);

        }*/
        //}
            //console.log('3');

        }


        /*var report = $.getJSON(this.store.adapterFor('application').get('')).then(
            function (response) {}
        )*/
    }
}

 /* model: function(params) {
      return $.getJSON
      //this.store.find(user, params.user_id);
  }*/

  
});
