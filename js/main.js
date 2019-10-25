function myForm() {
  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);
  var gender = (document.getElementById("gender").value);

  var c = parseInt(year.slice(0,2));
  var y = parseInt(year.slice(2,4));

  var weekday = ( ( (c/4) -2*c-1) + ((5*y/4) ) + ((26*(month+1)/10)) + day ) % 7;
  var wd = weekday.toFixed(0);


  var mname = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var fname = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

if(gender=="male" && wd=0) { return document.getElementById("result").innerHTML=mname[0];
}
else if(gender=="male" && wd=1){return document.getElementById("result").innerHTML=mname[1];
}
else if(gender=="male" && wd=2){return document.getElementById("result").innerHTML=mname[2];
}
else if(gender=="male" && wd=3){return document.getElementById("result").innerHTML=mname[3];
}
else if(gender=="male" && wd=4){return document.getElementById("result").innerHTML=mname[4];
 }
else if(gender=="male" && wd=5){return document.getElementById("result").innerHTML=mname[5];
 }
 else if(gender=="male" && wd=6){return document.getElementById("result").innerHTML=mname[6];
}

else if (gender=="female" && wd=0){return document.getElementById("result").innerHTML=fname[0];
  }
else if(gender=="female" && wd=1){return document.getElementById("result").innerHTML=fname[1];
}
else if(gender=="female" && wd=2){return document.getElementById("result").innerHTML=fname[2];
}
else if(gender=="female" && wd=3){return document.getElementById("result").innerHTML=fname[3];
 }
else if(gender=="female" && wd=4){return document.getElementById("result").innerHTML=fname[4];
 }
 else if(gender=="female" && wd=5){return document.getElementById("result").innerHTML=fname[5];
}
else if(gender=="female" && wd=6){return document.getElementById("result").innerHTML=fname[6]
}
}
