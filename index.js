
      var code = "src";
      var userinput = "";
      var position = code[userinput]

      var CodePosition = 0;

      document.addEventListener('keydown', function(e) {

        var key = e.key;
        var userinput = code[CodePosition];
         key === userinput ? CodePosition++ CodePosition === code.length ?  alert() : CodePosition = 0 : CodePosition = 0
        // ((key == userinput ? CodePosition++
        //   if (samCodePosition == code.length){
        //     alert()}
        //
        //   : CodePosition = 0)


      });

      // var code = "src";
      // var userinput = "";
      // var position = code[userinput]
      // var samCodePosition = 0;
      // document.addEventListener('keydown', function(e) {
      //   var key = e.key;
      //
      //   var userinput = code[samCodePosition];
      //
      //   if (key == userinput) {
      //
      //     samCodePosition++;
      //
      //     if (samCodePosition == code.length)
      //       alert();
      //       // if(alert()){
      //       //   samCodePosition = 0;
      //       //
      //       // }
      //   } else
      //     samCodePosition = 0;
      // });
