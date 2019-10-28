function myForm() {
  var birthday = (document.getElementById("birthday").value);
  var gender =document.getElementsByName("Gender");
  var d = new Date(birthday);
  var dd = parseInt(d.getDate());
  var mm = parseInt(d.getMonth());
  var yy = (d.getFullYear());



  var c = yy.toString().split('');
  var cv = c.map(String);
  var cy =parseInt(cv[0].concat(cv[1]));
  var y =parseInt(cv[2].concat(cv[3]));

//var weekday = Math.trunc((((cy/4) - 2 * cy - 1) + ((5 * y/4)) + ((26 * mm + 1)/10)) + dd ) %7;

  var df = d.getDay();

  //alert(df);
  //var wd = weekday.toFixed(0);
  var sd = df.toString();
  var result = sd;



  var mname = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var fname = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

for(x=0;x<gender.length;x++){
  if(gender[x].checked){
    var genders = gender[x].value;
  }
}

//alert(genders);

  if(genders==="male" && sd==="0"){var out = document.getElementById("result").value=mname[0];
  //alert(out);
}
else if(genders==="male" && sd==="1"){var out = document.getElementById("result").value=mname[1];
}
else if(genders==="male" && sd==="2"){var out = document.getElementById("result").value=mname[2];
}
else if(genders==="male" && sd==="3"){var out = document.getElementById("result").value=mname[3];
}
else if(genders==="male" && sd==="4"){var out = document.getElementById("result").value=mname[4];
}
else if(genders==="male" && sd==="5"){var out = document.getElementById("result").value=mname[5];
}
 else if(genders==="male" && sd==="6"){var out = document.getElementById("result").value=mname[6];
}

else if (genders==="female" && sd==="0"){var out = document.getElementById("result").value=fname[0];
}
else if(genders==="female" && sd==="1"){var out = document.getElementById("result").value=fname[1];
}
else if(genders==="female" && sd==="2"){var out = document.getElementById("result").value=fname[2];
}
else if(genders==="female" && sd==="3"){var out = document.getElementById("result").value=fname[3];
}
else if(genders==="female" && sd==="4"){var out = document.getElementById("result").value=fname[4];
}
 else if(genders==="female" && sd==="5"){var out = document.getElementById("result").value=fname[5];
}
else if(genders==="female" && sd==="6"){var out = document.getElementById("result").value=fname[6];
}
}
