$(document).ready(function(){
    //main container style
    $('#Container').css({
        "background-color":"f2f2f2",
        "width":"20%",
        "height":"60%",
        "position":"relative",
        "top":"15%",
        "margin":"auto"
    });   

    //display container
    $('#Container').append("<div id='DisplayBox'><span id='innerBox'></span></div>");
    $('#DisplayBox').css({
        "background-color":"dbdbdb",
        "width":"100%",
        "height":"35%",
        "position":"relative",
        "top":"0%",
        "text-align":"right",
        "overflow": "hidden"
    });
    $('#innerBox').css({
        "position":"absolute",
        "display":"block",
        "bottom":"2%",
        "right":"5%",
        "color":"black",
        "font-size":"200%",
        "font-weight":"bold"
    });

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 4; j++) {
            $('#Container').append("<div class='Button row"+i+"' id='Button."+i+"."+j+"'><span class='innerText'>"+i+"</span></div>");
       }
    }

    $('.Button').css({
        "display":"inline-block",
        "width":"24.4%",
        "height":"12.3%",
        "position":"relative",
        "border":"solid 1px #dbdbdb",
        "border-radius":"3px",
        "cursor": "pointer"
    });

    $('.Button').height((($('#Container').height()-$('#DisplayBox').height())/5)-2+"px");
    $('.Button').width(($('#Container').width()/4)-2+"px");
    $( window ).resize(function() {
        $('.Button').height((($('#Container').height()-$('#DisplayBox').height())/5)-2+"px");
        $('.Button').width(($('#Container').width()/4)-2+"px");
    });
    
    $('.innerText').css({
        "position":"absolute",
        "bottom":"0",
        "right":"0",
        "left":"0",
        "top":"0",
        "color":"black",
        "font-size":"1vw",
        "font-weight":"500",
        "display": "flex",
        "justify-content": "center", /* align horizontal */
        "align-items": "center",
    });
    $('#Button\\.0\\.0 span').html("%").addClass("ActiveB Operator");
    $('#Button\\.0\\.1 span').html("CE").addClass("ClearLast");
    $('#Button\\.0\\.2 span').html("C").addClass("ClearAll");
    $('#Button\\.0\\.3 span').html("/").addClass("ActiveB Operator");

    $('#Button\\.1\\.0 span').html("7").addClass("ActiveB");
    $('#Button\\.1\\.1 span').html("8").addClass("ActiveB");
    $('#Button\\.1\\.2 span').html("9").addClass("ActiveB");
    $('#Button\\.1\\.3 span').html("*").addClass("ActiveB Operator");

    $('#Button\\.2\\.0 span').html("4").addClass("ActiveB");
    $('#Button\\.2\\.1 span').html("5").addClass("ActiveB");
    $('#Button\\.2\\.2 span').html("6").addClass("ActiveB");
    $('#Button\\.2\\.3 span').html("-").addClass("ActiveB Operator");
    
    $('#Button\\.3\\.0 span').html("1").addClass("ActiveB");
    $('#Button\\.3\\.1 span').html("2").addClass("ActiveB");
    $('#Button\\.3\\.2 span').html("3").addClass("ActiveB");
    $('#Button\\.3\\.3 span').html("+").addClass("ActiveB Operator");

    $('#Button\\.4\\.0 span').html(".").addClass("ActiveB");
    $('#Button\\.4\\.1 span').html("0").addClass("ActiveB");
    $('#Button\\.4\\.2 span').html(".").addClass("ActiveB");
    $('#Button\\.4\\.3 span').html("=").addClass("EndIt");

    var expression1="";
    var expression2="";
    var operator1="";
    var temp=1;

    $('.ActiveB').click(function(){
        
        if ($(this).hasClass("Operator")) {
            if (expression1=="") {
                expression1=$('#innerBox').html();
            }
            operator1=$(this).html();
            temp=2
            $('#innerBox').html($('#innerBox').html()+$(this).html());
            console.log(operator1);
        }else{
            if (temp==1) {
                if (expression1=="") {
                    $('#innerBox').html("");
                }
                if (expression1.indexOf(".")!=-1 && $(this).html() == ".") {
                }else{
                    expression1+=$(this).html();
                    $('#innerBox').html($('#innerBox').html()+$(this).html());
                }
                console.log(expression1);
            }else{
                if (expression2.indexOf(".")!=-1 && $(this).html() == ".") {
                }else{
                    expression2+=$(this).html();
                    $('#innerBox').html($('#innerBox').html()+$(this).html());
                }
                console.log(expression2);
            }
        }
        
    })
    $('.ClearAll').click(function(){
        $('#innerBox').html("");
        expression1="";
        expression2="";
        operator1="";
        temp=1;
    })
    $('.ClearLast').click(function(){
        $('#innerBox').html($('#innerBox').html().slice(0,-1));
    })
    $('.EndIt').click(function(){
        if (expression1!='' && expression2!='') {
            $('#innerBox').html(eval(expression1+operator1+expression2));
            expression1="";
            expression2="";
            operator1="";
            temp=1;
        }
    })


});