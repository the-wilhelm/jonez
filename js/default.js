$(document).ready(function(){
    var w;
    var strength1 = 50;
    
    $('body').flowtype({
        minFont:9,
        maxFont:16,
        fontRatio:30
    });
    
    $('h2').flowtype({
       minFont:12,
        maxFont:35
    });
    
    $('html, body, *').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });
    
    $('.holder[data-type="background"]').each(function(){
       var $bgobj = $(this); 
    
        $(window).scroll(function(){
            var xPos = -($(window).scrollLeft()/$bgobj.data('speed')); 
            
            var coords = xPos+'px 50%';
            
            $bgobj.css({backgroundPosition: coords});
        });
    });
    
    $('.view-port').click(function(){
        if($(this).data('view') != 'form'){
            var active = false;
            var column;

            var elementArray = document.getElementsByClassName("view-port");

            for(var i = 0; i<elementArray.length; i++){
               if($(elementArray[i]).data('state') == 'active' && this != elementArray[i]){
                    $('.'+$(elementArray[i]).data('view')).animate({width: "-=75%"}, 500);
                    $('.backbar').animate({width:"-=75%"},500);

                    $('.content-container').animate({top:'120%'}, 800);

                    for(var j = 1; j<5; j++){
                        if(j==$(elementArray[i]).data('column')){
                            ($(this).data('state')=='inactive') ? $(this).data('state','active') : $(this).data('state','inactive');
                            $('html, body').animate({scrollLeft: $('.section[data-column="'+j+'"]').offset().left}, 800);
                        }

                        if(j>$(elementArray[i]).data('column')){
                            $('.section[data-column="'+j+'"]').animate({left: w}, 500);
                        }
                    }
               }
            }

            ($(this).data('state')=='inactive') ? w = "+=75%" : w = "-=75%";

            $('.'+$(this).data('view')).animate({width: w}, 500);
            $('.backbar').animate({width:w},500);

            $('.'+$(this).data('view')+' .holder').load('../pages/'+$(this).data('view')+'.html');

            if(w == "+=75%"){
                setTimeout(function(){
                    $('.content-container').animate({top:'.5%'}, 400);
                }, 800);
            }else{
                $('.content-container').animate({top:'120%'}, 800);  
            }

            for(var i = 1; i<5; i++){
                if(i==$(this).data('column')){
                    ($(this).data('state')=='inactive') ? $(this).data('state','active') : $(this).data('state','inactive');
                    $('html, body').animate({scrollLeft: $('.section[data-column="'+i+'"]').offset().left}, 800);
                }

                if(i>$(this).data('column')){
                    $('.section[data-column="'+i+'"]').animate({left: w}, 500);
                }
            }
        }
    });
});