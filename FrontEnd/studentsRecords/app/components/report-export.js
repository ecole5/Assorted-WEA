import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service(),
    terms:null,
    critTerm: null,
    crit:null,
    haveReport:null,
    pdf:null,
    reportJSON:null,

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
            for(var i=1;i<reportjson.students.length+1;i++){
                lines[i]=reportjson.students[i-1].number + " " + reportjson.students[i-1].firstName + " ";
                lines[i]+=reportjson.students[i-1].lastName + " " + reportjson.students[i-1].program + " ";
                lines[i]+=reportjson.students[i-1].faculty + " " + reportjson.students[i-1].code + " ";
            }

            //var doc = new jsPDF();
            var doc = new jsPDF();
            doc.text(lines,10,10);
            doc.output('dataurlnewwindow');
            //doc.save('test.pdf');
    },

    downloadReport:function(){
 

function sheet_from_array_of_arrays(self, data, opts) {
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

			/*if(range.s.r > R) {range.s.r = R;}
			if(range.s.c > C) {range.s.c = C;}
			if(range.e.r < R) {range.e.r = R;}
			if(range.e.c < C) {range.e.c = C;}*/


			var cell1 = {v: v1 };
			if(cell1.v !== null) {
			    var cell_ref1 = XLSX.utils.encode_cell({c:0,r:R});
            }			
			if(typeof cell1.v === 'number') {cell1.t = 'n';}
			else {cell1.t = 's';}
			ws[cell_ref1] = cell1;
            console.log(cell_ref1);

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

/* original data */
var data = this.get('reportJSON').students;//[[1,2,3],[true, false, null, "sheetjs"],["foo","bar", "0.3"], ["baz", null, "qux"]]
var ws_name = "SheetJS";

function Workbook() {
	if(!(this instanceof Workbook)) {return new Workbook();}
	this.SheetNames = [];
	this.Sheets = {};
}

var wb = new Workbook(), ws = sheet_from_array_of_arrays(this,data);

/* add worksheet to workbook */
wb.SheetNames.push(ws_name);
console.log(ws);
wb.Sheets[ws_name] = ws;
var wbout = XLSX.write(wb, {bookType:'xlsx', bookSST:true, type: 'binary'});

function s2ab(s) {
	var buf = new ArrayBuffer(s.length);
	var view = new Uint8Array(buf);
	for (var i=0; i!=s.length; ++i) {view[i] = s.charCodeAt(i) & 0xFF;}
	return buf;
}
saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), "report.xlsx");


/*var data = { term: this.get('critTerm'), criteria: this.get('crit'), download:true},
            host = this.get('store').adapterFor('application').get('host'),
            //namespace = this.store.adapterFor('application').namespace,
            getURL = [ host, 'reports'].join('/'); 
            
            Ember.$.get(getURL, data).then(
                function (response) {



                    //displayDownloadOption();    
            });*/

     /*   
var CSV = '';    
    //Set Report title in first row or line
    var arrData=this.get('reportJSON');

    CSV += 'Adjudication Report' + '\r\n\n';
    


    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";

    //2nd loop will extract each column and convert it in string comma-seprated
    for (var index in arrData[i]) {
        row += '"' + arrData[i][index] + '",';
    }

    row.slice(0, row.length - 1);

    //add a line break after each row
    CSV += row + '\r\n';
    }



    //Generate a file name
    var fileName = "report";
    //this will remove the blank-spaces from the title and replace it with an underscore
    //fileName += ReportTitle.replace(/ /g,"_");   

    //Initialize file format you want csv or xls
    var uri = 'data:text/xlsx;charset=utf-8,' + escape(CSV);

    // Now the little tricky part.
    // you can use either>> window.open(uri);
    // but this will not work in some browsers
    // or you will not get the correct file extension    

    //this trick will generate a temp <a /> tag
    var link = document.createElement("a");    
    link.href = uri;

    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".xlsx";

    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  */
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
        if(this.get('critTerm')===null||this.get('crit')===null){

        }else{

            /*var data = { term: this.get('critTerm'), criteria: this.get('crit') },
            host = this.get('store').adapterFor('application').get('host'),
            //namespace = this.store.adapterFor('application').namespace,
            getURL = [ host, 'reports'].join('/'); 
            
            Ember.$.get(getURL, data).then(
                function (response) {

                this.set('reportJSON',response);

                    this.set("haveReport",true);   
            }); */


            this.set("haveReport",true);
   //should get student number, student firstname, student lastname, program, faculty, comment code

           //remove test for actual use// test is test value for JSON. once we have real JSON replace test
            var test={"students":[
                    {"number":1,"firstName":"John", "lastName":"Doe","program":"Software","faculty":"engineering","code":"GG"}, 
                    {"number":2,"firstName":"Anna", "lastName":"Smith","program":"Civel","faculty":"engineering","code":"FF"},
                    {"number":3,"firstName":"Peter", "lastName":"Jones","program":"Lit","faculty":"English","code":"EE"}
                ]
            };

            this.set('reportJSON',test);

            
        //}
            //console.log('3');

        //}


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
