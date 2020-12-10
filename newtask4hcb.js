$(document).ready(function(){
var le=$('.im1').length;

    var m=$('.m2');
      
      var f=0;
      
    //   var k= 0;

      setInterval(function(){
         
        $('.m2').css(
            "marginLeft",'-=100%')
        
              f++;
              
              if(f==le)
              {
                 
                $('.m2').css('marginLeft','0');
                  f=0;
                }
                
          

      },3000);

    $(".frwdb").click(function(){
        $('.m2').css(
            "marginLeft",'-=100%'
        ,1000)
        f++;
           
            if(f>=le)
            {console.log("h")
                $('.m2').css('marginLeft','0%');
                f=0;
                
              
        
            };
        });

            $(".prevb").click(function(){
                $('.m2').css(
                    "marginLeft",'+=100%'
                ,1000)
                f--;
                    if(f<=0)
                    {
                        $('.m2').css('marginLeft','-300%');
                        f=3;
                        

                    }

            });

            $(".c1").click(function(){
                var f=0;
                $('.m2').css(
                    "marginLeft",-f+'%'
                ,1000)
            
            });

            $(".c2").click(function(){
                var f=100;
                $('.m2').css(
                    "marginLeft",-f+'%'
                ,1000)
            
            });
            $(".c3").click(function(){
                var f=200;
                $('.m2').css(
                    "marginLeft",-f+'%'
                ,1000)
            
            });
            $(".c4").click(function(){
                var f=300;
                $('.m2').css(
                    "marginLeft",-f+'%'
                ,1000)
              setInterval();
            });
      
    

    });    
   