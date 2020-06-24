
// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/ 
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers 
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    // var filter = /^(\([-+]?[0-9]+)\)$/;
    var filter = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im ;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCredit(credit) {
    var a = document.getElementById(credit).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    // var filter = /^(\([-+]?[0-9]+)\)$/;
    var filter = /^[0-9][0-9]{12}(?:[0-9]{3})?$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/ 
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
// var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"]
// var unavailableDates = {
//                         Andre: [0,1,6],
//                         Obi: [0.1,2,4],
//                         Jose: [0,3,5]
// }
var unavailableDates = [ [0,1,6] , [0,1,2,4], [0,3,5] ]


const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    
    // Sunday is Day 0, disable all Sundays
    // if (date.getDay() == 0)
    //     return [false];
    // for (let i=0; i<unavailableDates.andre.length; i+=1) {
    //     if (date.getDay()== unavailableDates.andre[i]){
    //         return [false];
    //     }
    // }
    // var string = jQuery.datepicker.formatDate(setDateFormat, date);
    // return [ unavailableDates.indexOf(string) == -1 ]

    var stylist = $("#stylist :selected").text();
    var index = 0;
    console.log(typeof(stylist));
    if(stylist =="Andre"){
        index = 0;
    }
    else if(stylist == "Jose"){
        index = 1 ;
    }
    else{
        index = 2
    }

    var day = date.getDay();
    if(stylist){
        return [ unavailableDates[index].indexOf(day) == -1 ];
    }
   

}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for phone");
            $("#phone").val("(xxx) xxx xxxx");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    $("#credit").on("change", function(){
        if (!validateCredit("credit")){
            alert("Wrong format for Credit Card");
            $("#credit").val("xxxx xxxx xxxx xxxx");
            $("#credit").addClass("error");
        }
        else {
            $("#credit").removeClass("error");
        }
    });

    // $('#phone').mask("0000 0000 0000 0000");

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery 
    // You can try different themes (the names are under the calendars) / This is Excite Bike 
    // To use a different theme you must include its css in your HTML file. 
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/ 
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/ 
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date(),  
            maxDate: '+12M',
            // used to disable some datesd
            // beforeShowDay: $.datepicker.noSundays,
            beforeShowDay: disableDates
        }   
    );

   


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put 
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });
  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#credit").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });


});