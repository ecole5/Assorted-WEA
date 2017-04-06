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
            lines[1] ="Student Number :: First Name :: Last Name :: Program :: Faculty :: Adjudication Comment";
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
    getReport: function(){

        if(this.get('critTerm')===null||this.get('crit')===null||this.get('critTerm')==="Null"){

        }else{
var text = "";

var self = this;
self.get('store').findAll('adjcomment').then(function (adjcomment){
self.get('store').findAll('comment').then(function (commentF){
self.get('store').query('student', {all: 'true',}).then(function (studentF){
self.get('store').findAll('plan').then(function (records) {
self.get('store').findAll('program').then(function (records) {
self.get('store').findAll('faculty').then(function (records) {
self.get('store').findAll('adjudication').then(function(Adjudication){


    var entries=[];
    for(var u=0;u<Adjudication.get('length');u++){
        

        if(Adjudication.objectAt(u).get('note')!=='could not complete'){ 
                
            if(Adjudication.objectAt(u).get('term').get('name')===self.get('critTerm')){

            var i, el, j;

            if(self.get('crit')==="Program"){            


                    el = Adjudication.objectAt(u).get('program').get('name');
                    j = entries.length; 
                    if(entries.length===0){
                        entries[0]=Adjudication.objectAt(u);
                    }
                    else{
                        while(j>0 && entries[j-1].get('program').get('name')>el){
                            entries[j] = entries[j-1];
                            j--;
                        }

                        entries[j] = Adjudication.objectAt(u);  
                    }
            
            }
            else if(self.get('crit')==="Faculty"){



                    el = Adjudication.objectAt(u).get('plan').get('faculty').get('name');

                    j = entries.length;  
                    if(entries.length===0){
                        entries[0]=Adjudication.objectAt(u);
                    }
                    else{


                        while(j>0 && entries[j-1].get('plan').get('faculty').get('name')>el){
                            entries[j] = entries[j-1];
                            j--;
                        }
                    
                        entries[j] = Adjudication.objectAt(u);  
                    }
             
            }

            text = '{ "students" : [';

             for(i=0;i<entries.length;i++){

                var f = true;


                for(var n=0;n<adjcomment.get('length');n++){

                    if(adjcomment.objectAt(n).get('adjudication').get('id')===entries[i].get('id')){
                        //com[c] = adjcomment[n].comment;
                        //c++;
                        f=false;

                        text+='{ "number":"'+entries[i].get('student').get('number') +'" , '+
                        ' "firstName":"'+entries[i].get('student').get('firstName') +'" , '+
                        ' "lastName":"'+entries[i].get('student').get('lastName') +'" , '+
                        ' "program":"'+entries[i].get('program').get('name') +'" , '+
                        ' "faculty":"'+entries[i].get('plan').get('faculty').get('name') +'" , ';
                        text+=' "comment":"'+adjcomment.objectAt(n).get('comment').get('code') +'" }, ';

                    }
                }
                
                if(f){
                        
                    text+='{ "number":"'+entries[i].get('student').get('number') +'" , '+
                    ' "firstName":"'+entries[i].get('student').get('firstName') +'" , '+
                    ' "lastName":"'+entries[i].get('student').get('lastName') +'" , '+
                    ' "program":"'+entries[i].get('program').get('name') +'" , '+
                    ' "faculty":"'+entries[i].get('plan').get('faculty').get('name') +'" , ';
                    text+=' "comment": "" }, ';

                }

            }        
            

        }
        }
    }
    console.log('9');
            
            //var str = "12345.00";
    text = text.substring(0, text.length - 2);
    text+=' ]}';
    var obj = JSON.parse(text);
    self.set('reportJSON',obj);
    self.set("haveReport",true); 

});
});
});
});
});
});
});
    }
    }

    

           /* var text = '{ "employees" : [';// +
//'{ "firstName":"John" , "lastName":"Doe" },' +
//'{ "firstName":"Anna" , "lastName":"Smith" },' +
//'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

           //remove test for actual use// test is test value for JSON. once we have real JSON replace test
            var test={"students":[
                    {"number":1,"firstName":"John", "lastName":"Doe","program":"Software","faculty":"engineering","code":"GG"}, 
                    {"number":2,"firstName":"Anna", "lastName":"Smith","program":"Civel","faculty":"engineering","code":"FF"},
                    {"number":3,"firstName":"Peter", "lastName":"Jones","program":"Lit","faculty":"English","code":"EE"}
                ]
            };

            this.set('reportJSON',test);

        }*/
        

        }
    });
