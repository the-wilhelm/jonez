$(document).ready(function(){
    var w;
    var t;
    var strength1 = 50;
    var answers = new Object();
    var gone = false;
    
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
    
    $('button[type="submit"]').click(function(event){
        if($('#datetimepicker1').val().length > 0){
            answers = {pdate: $('#datetimepicker1').val(), pstart: $('#datetimepicker2').val(), pend: $('#datetimepicker3').val()};
            
            $('#rootwizard').bootstrapWizard({onNext: function(tab, navigation, index) {
			if(index==1) {
				// Make sure we entered the name
				if(!$('#datetimepicker4').val()) {
					alert('You must enter the date you want to reserve');
					$('#nadatetimepicker4me').focus();
					return false;
				}
                
                if(!$('#datetimepicker5').val()) {
					alert('You must enter when your reservation will start');
					$('#datetimepicker5').focus();
					return false;
				}
                
                if(!$('#datetimepicker6').val()) {
					alert('You must enter when your reservation will end');
					$('#datetimepicker6').focus();
					return false;
				}
			}else if(index==2){
                if (!$("input[name='bus']:checked").val()) {
                    alert('You must select which bus you want');
                    
                    return false;
                }
            }else{
                 if(!$('input[name="first"]').val()) {
					alert('You must enter your first name');
					$('input[name="first"]').focus();
					return false;
				}
                
                if(!$('input[name="last"]').val()) {
					alert('You must enter your last name');
					$('input[name="last"]').focus();
					return false;
				}
                
                if(!$('input[name="phone"]').val()) {
					alert('You must enter your phone number');
					$('input[name="phone"]').focus();
					return false;
				}  
                
                if(!$('input[name="email"]').val()) {
					alert('You must enter your email');
					$('input[name="email"]').focus();
					return false;
				}  
                
                if(!$('input[name="add1"]').val()) {
					alert('You must enter your address');
					$('input[name="add1"]').focus();
					return false;
				}
                
                if(!$('input[name="city"]').val()) {
					alert('You must enter your city');
					$('input[name="city"]').focus();
					return false;
				}
                
                if(!$('select[name="state"]').val()) {
					alert('You must choose your state');
					$('select[name="state"]').focus();
					return false;
				}
                
                if(!$('input[name="zip"]').val()) {
					alert('You must enter your zip');
					$('input[name="zip"]').focus();
					return false;
				}
                
                if(!$('select[name="type"]').val()) {
					alert('You must choose your party type');
					$('select[name="type"]').focus();
					return false;
				}  
                
                if(!$('select[name="aprox"]').val()) {
					alert('You must choose the approximate number of people in your party');
					$('select[name="aprox"]').focus();
					return false;
				}  
            }
                
			
            }, onTabShow: function(tab, navigation, index) {
                var $total = 3;
                var $current = index+1;
                var $percent = ($current/$total) * 100;
                $('#rootwizard').find('.bar').css({width:$percent+'%'});
                
                if($current >= $total) {
                    $('#rootwizard').find('.pager .next').hide();
                    $('#rootwizard').find('.pager .finish').show();
                    $('#rootwizard').find('.pager .finish').removeClass('disabled');
                } else {
                    $('#rootwizard').find('.pager .next').show();
                    $('#rootwizard').find('.pager .finish').hide();
                }
            }});
            
            $('#datetimepicker4').val(answers.pdate);
            $('#datetimepicker5').val(answers.pstart);
            $('#datetimepicker6').val(answers.pend);
            
            if(!gone){
                $('#tab1').removeClass('active');
                $('#nav1').removeClass('active');
                $('.previous').removeClass('disabled');
                $('#tab2').addClass('active');
                $('#nav2').addClass('active');
            
                gone = true;
            }
                
            $('#formModal').modal();
        }else{
            alert("Please choose a date, a start time, and an end time for your reservation.");  
            $('#datetimepicker1').focus();
			return false; 
        }

        event.preventDefault();
    });

    $('#datetimepicker1').datetimepicker({
        pickTime:false,
        useStrict:true
    });
    $('#datetimepicker2').datetimepicker({
        pickDate: false,
        minuteStepping: 30,
        useSeconds: false,
        defaultDate: moment({hour: 12, minute:0}),
        useStrict:true
    });
    $('#datetimepicker3').datetimepicker({
        pickDate: false,
        minuteStepping: 30,
        useSeconds: false,
        defaultDate: moment({hour: 3, minute:0}),
        useStrict:true
    });
    
    $('#datetimepicker4').datetimepicker({
        pickTime:false,
        useStrict:true
    });
    $('#datetimepicker5').datetimepicker({
        pickDate: false,
        minuteStepping: 30,
        useSeconds: false,
        defaultDate: moment({hour: 12, minute:0}),
        useStrict:true
    });
    $('#datetimepicker6').datetimepicker({
        pickDate: false,
        minuteStepping: 30,
        useSeconds: false,
        defaultDate: moment({hour: 3, minute:0}),
        useStrict:true
    });
    
    $('.tab-bus').click(function(){
        var ele = '#'+$(this).data('val');
        
        $('#'+$(this).data('val')).prop('checked', true);
        $(this).addClass('tab-active');
        
        if(t){
            $(t).removeClass('tab-active'); 
        }
            
        t = this;
    });
});