function vowels(str1) {
    var vowels = 'аяуюоеёэиыАЯУЮОЕЁЭИЫ';
    var vcount = 0;
    
    for(var x = 0; x < str1.length ; x++) {
      if (vowels.indexOf(str1[x]) !== -1) {
        vcount += 1;
      }
    
    }
    return vcount;
  }

  console.log(vowels); 