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
    $('#Button\\.0\\.0 span').html("%");
    $('#Button\\.0\\.1 span').html("CE");
    $('#Button\\.0\\.2 span').html("C");
    $('#Button\\.0\\.3 span').html("/");

    $('#Button\\.1\\.0 span').html("7");
    $('#Button\\.1\\.1 span').html("8");
    $('#Button\\.1\\.2 span').html("9");
    $('#Button\\.1\\.3 span').html("*");

    $('#Button\\.2\\.0 span').html("4");
    $('#Button\\.2\\.1 span').html("5");
    $('#Button\\.2\\.2 span').html("6");
    $('#Button\\.2\\.3 span').html("-");
    
    $('#Button\\.3\\.0 span').html("1");
    $('#Button\\.3\\.1 span').html("2");
    $('#Button\\.3\\.2 span').html("3");
    $('#Button\\.3\\.3 span').html("+");

    $('#Button\\.4\\.0 span').html(".");
    $('#Button\\.4\\.1 span').html("0");
    $('#Button\\.4\\.2 span').html(".");
    $('#Button\\.4\\.3 span').html("=");

    
    $('.Button').click(function(){
        $('#innerBox').html($('#innerBox').html()+$(this).find("span").html());
    })


});