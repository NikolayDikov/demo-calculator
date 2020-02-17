$(document).ready(function(){
    //main container style
    $('#Container').css({
        "background-color":"f2f2f2",
        "width":"20%",
        "height":"60%",
        "position":"relative",
        "top":"15%",
        "border-radius":"3px",
        "margin":"auto"
    });   

    //display container
    $('#Container').append("<div id='DisplayBox'><span id='innerBox'></span></div>");
    $('#DisplayBox').css({
        "background-color":"dbdbdb",
        "width":"100%",
        "height":"35%",
        "position":"relative",
        "border-radius":"3px",
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
        "opacity": "0.7",
        "cursor": "pointer"
    });

    $(".Button").hover(function() {
        $(this).css({"opacity": "1","border":"solid 1px #c4c4c4"});
    }, function() {
        $(this).css({"opacity": "0.7","border":"solid 1px #dbdbdb"});
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
    $('#Button\\.0\\.0 span').html("%").addClass("EndItPro");
    $('#Button\\.0\\.1 span').html("CE").addClass("ClearLast");
    $('#Button\\.0\\.2 span').html("C").addClass("ClearAll");
    $('#Button\\.0\\.3 span').html("/").addClass("ActiveB Operator");

    $('#Button\\.1\\.0 span').html("7").addClass("ActiveB Digit");
    $('#Button\\.1\\.1 span').html("8").addClass("ActiveB Digit");
    $('#Button\\.1\\.2 span').html("9").addClass("ActiveB Digit");
    $('#Button\\.1\\.3 span').html("*").addClass("ActiveB Operator");

    $('#Button\\.2\\.0 span').html("4").addClass("ActiveB Digit");
    $('#Button\\.2\\.1 span').html("5").addClass("ActiveB Digit");
    $('#Button\\.2\\.2 span').html("6").addClass("ActiveB Digit");
    $('#Button\\.2\\.3 span').html("-").addClass("ActiveB Operator");
    
    $('#Button\\.3\\.0 span').html("1").addClass("ActiveB Digit");
    $('#Button\\.3\\.1 span').html("2").addClass("ActiveB Digit");
    $('#Button\\.3\\.2 span').html("3").addClass("ActiveB Digit");
    $('#Button\\.3\\.3 span').html("+").addClass("ActiveB Operator");

    $('#Button\\.4\\.0 span').html(".").addClass("ActiveB Digit");
    $('#Button\\.4\\.1 span').html("0").addClass("ActiveB Digit");
    $('#Button\\.4\\.2 span').html(".").addClass("ActiveB Digit");
    $('#Button\\.4\\.3 span').html("=").addClass("EndIt");

    $('.Digit').css({"background-color":"fafafa"});

    var expression1="";
    var expression2="";
    var operator1="";
    var temp=1;

    $('.ActiveB').click(function(){
        
        if ($(this).hasClass("Operator")) {
            if (expression1=="") {
                if ($('#innerBox').html()=="") {
                    expression1="0";
                }else{
                    expression1=$('#innerBox').html();
                }
            }
            if (operator1!="" && expression2=="") {
                $('#innerBox').html($('#innerBox').html().slice(0,-1));
                operator1=$(this).html();
                $('#innerBox').html($('#innerBox').html()+$(this).html());
            }else if (operator1=="") {
                operator1=$(this).html();
                $('#innerBox').html($('#innerBox').html()+$(this).html());
            }else{

            }
            
            temp=2;
            
            console.log(operator1);
        }else{
            if (temp==1) {
                if (expression1=="") {
                    $('#innerBox').html("");
                }
                if (expression1.indexOf(".")!=-1 && $(this).html() == ".") {
                }else{
                    if (expression1=="0" && $(this).html() != ".") {
                        expression1="";
                        $('#innerBox').html($('#innerBox').html().slice(0,-1));
                    }
                    expression1+=$(this).html();
                    $('#innerBox').html($('#innerBox').html()+$(this).html());
                }
                console.log(expression1);
            }else{
                if (expression2.indexOf(".")!=-1 && $(this).html() == ".") {
                }else{
                    if (expression2=="0" && $(this).html() != ".") {
                        expression2="";
                        $('#innerBox').html($('#innerBox').html().slice(0,-1));
                    }
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
        if (expression2.length>0) {
            expression2=expression2.slice(0,-1);
            console.log(expression2);
        }else if (operator1.length>0) {
            operator1="";
            temp==1;
            console.log(operator1);
        }else{
            if (expression1=="" && $('#innerBox').html()!="") {
                expression1=$('#innerBox').html();
            }
            expression1=expression1.slice(0,-1);
            console.log(expression1);
        }
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
    $('.EndItPro').click(function(){
        var result="";
        var tempResult="";
        if (expression1!='' && expression2!='') {
            if (operator1=="*") {
                result = (parseInt(expression1)/100)*parseInt(expression2);
            }else if (operator1=="-") {
                tempResult = (parseInt(expression1)/100)*parseInt(expression2);
                result = parseInt(expression1)-tempResult;
            }else if (operator1=="+") {
                tempResult = (parseInt(expression1)/100)*parseInt(expression2);
                result = parseInt(expression1)+tempResult;
            }
            
            $('#innerBox').html(result);
            expression1="";
            expression2="";
            operator1="";
            temp=1;
        }
    })


});