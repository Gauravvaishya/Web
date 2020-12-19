$(document).ready(function(){
var le=$('.im1').length;

    var m=$('.m2');
      
      var f=0;
      var d = 0,g = 0;
       
      $('#fg1').css('color','#ff00ff');
      $('#fg2').css('color','white');
      $('#fg3').css('color','white');
      $('#fg4').css('color','white');

      setInterval(function(){
            if(d == 3 && g==0){
            $('#fg1').css('color','#ff00ff');
            $('#fg2').css('color','white');
            $('#fg3').css('color','white');
            $('#fg4').css('color','white');
              d=0;
              g=1;
          }
          
          if(d == 2){
            $('#fg1').css('color','white');
            $('#fg2').css('color','white');
            $('#fg3').css('color','white');
            $('#fg4').css('color','#ff00ff');
            d++;
    
          }  
        if(d == 1){
            $('#fg1').css('color','white');
            $('#fg2').css('color','white');
            $('#fg3').css('color','#ff00ff');
            $('#fg4').css('color','white');
            d++;
           
          }
          if(d == 0&&g==0){
            $('#fg1').css('color','white');
            $('#fg2').css('color','#ff00ff');
            $('#fg3').css('color','white');
            $('#fg4').css('color','white');
          d++;
          }
          g=0;
         
         

          $(".c1").click(function(){
                var f=0;
                $('.m2').css(
                    "marginLeft",-f+'%'
                ,1000)
                $('.c1').css('color','#ff00ff');
                $('.c2').css('color','white');
                $('.c3').css('color','white');
                $('.c4').css('color','white');
            });

            $(".c2").click(function(){
                var f=100;
                $('.m2').css(
                    "marginLeft",-f+'%'
                ,1000)
                $('.c2').css('color','#ff00ff');
                $('.c1').css('color','white');
                $('.c3').css('color','white');
                $('.c4').css('color','white');
            });
            $(".c3").click(function(){
                var f=200;
                $('.m2').css(
                    "marginLeft",-f+'%'
                ,1000)
                $('.c3').css('color','#ff00ff');
                $('.c1').css('color','white');
                $('.c1').css('color','white');
                $('.c4').css('color','white');
            });
            $(".c4").click(function(){
                var f=300;
                $('.m2').css(
                    "marginLeft",-f+'%'
                ,1000);
                $('.c4').css('color','#ff00ff');
                $('.c1').css('color','white');
                $('.c3').css('color','white');
                $('.c1').css('color','white');
            });
          
          
        
        
          f++;
          
          if(f<=3){

              $(".m2").animate({marginLeft: "-=100%"});
          }
              
              if(f==le)
              {
                 
                $('.m2').css('marginLeft','0');
                  f=0;
                }
                
         

      },3000);



      
    // var p = $('.m2').find('img:first').width();
    // setInterval(function(){  
    //     var v=0;       
    //  $('.m2').animate( { marginLeft: -p }, function(){
    //      v++;
    //      console.log('hrll');
    //      if(v==le)
    //           {
                 
    //             $('.m2').css('marginLeft','0');
    //               v=0;
    //             }
    //  });
    // },2000);

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

            
      
    

    });    
   