function randomstring(L) {
    var s = '';
    var randomchar = function() {
      var n = Math.floor(Math.random() * 62);
      if (n < 10) return n; //1-10
      if (n < 36) return String.fromCharCode(n + 55); //A-Z
      return String.fromCharCode(n + 61); //a-z
    }
    while (s.length < L) s += randomchar();
    return s;
  }

  function makeEmail() { 
      var strValues="abcdefg12345"; 
      var strEmail = ""; 
      var strTmp; 
      for (var i=0;i<10;i++) { 
      strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
      strEmail = strEmail + strTmp; 
      } 
      strTmp = ""; 
      strEmail = strEmail + "@"; 
      for (var j=0;j<8;j++) { 
      strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
      strEmail = strEmail + strTmp; 
      } 
      strEmail = strEmail + ".com" 
      return strEmail; 
      }

      export default {makeEmail, randomstring}