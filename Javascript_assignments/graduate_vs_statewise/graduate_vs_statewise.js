var fs=require('fs')
var data=fs.readFileSync('India2011.csv','utf8').toString();
var data1=fs.readFileSync('IndiaSC2011.csv','utf8').toString();
var data2=fs.readFileSync('IndiaST2011.csv','utf8').toString();
var person;
 var result=[];
var maindata=data.concat(data1,data2);
 var statenames=["State - ANDAMAN & NICOBAR ISLANDS","State - ANDHRA PRADESH","State - ARUNACHAL PRADESH","State - ASSAM","State - BIHAR","State - CHHATTISGARH","State - DADRA & NAGAR HAVELI","State - DAMAN & DIU","State - GOA","State - GUJARAT","State - HIMACHAL PRADESH","State - JAMMU & KASHMIR","State - JHARKHAND","State - KARNATAKA","State - KERALA","State - LAKSHADWEEP","State - MADHYA PRADESH","State - MAHARASHTRA","State - MANIPUR","State - MEGHALAYA","State - MIZORAM","State - NAGALAND","State - ODISHA","State - RAJASTHAN","State - SIKKIM","State - TAMIL NADU","State - TRIPURA","State - UTTAR PRADESH","State - UTTARAKHAND","State - WEST BENGAL"];
 var ages="All ages";
 function csvdata(data)  {     
 var lines=data.split("\n");
 var headers=lines[0].split(",");    
for(var s=0;s<statenames.length;s++) {
  var obj={};
 for(var i=1;i<lines.length;i++) {
  var currentline=lines[i].split(",");
if(currentline[3]==statenames[s] && currentline[5]==ages && currentline[4]=="Total") {
  obj[headers[3]]=currentline[3];
  obj[headers[40]]=currentline[40];
  obj[headers[41]]=currentline[41];
  } 
}
 result.push(obj);
 }
}
csvdata(maindata);
fs.writeFile("graduate_vs_state.json",JSON.stringify(result));