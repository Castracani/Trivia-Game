//Global Variables//
var correct = 0;
var incorrect = 0;
var unanswered = 0;



//Starts on clicking the button initially displayed//
$("#triviaStart").on("click", function() {

    $("#triviaStart").hide();    
    //makes it so the results function is exectued 30 seconds after the intial button is clicked
    //setTimeout(results, 1000 * 30);//

    //creates a new h2 element which will be unique to this question//
    var question1 = $("<h2>");

    //gives this h2 an ID and a class//
    $(question1).attr('id', 'question1', 'class', 'question')

    //Adding the question to be answered, using HTML notation from now on//
    $(question1).text("Roughly, what was the percentage of public support for the United States of America entering World War II before Pearl Harbor, and what was it afterwards?");

   //appending the question to the #main-section div//
    $("#main-section").append(question1);

    //Now the form for the buttons is created//
    var form1 = $("<form></form>");
    
    //adding an ID and class to the form//
    $(form1).attr('id', 'form1', 'class', 'form');

    //adding the buttons to the form//
    $(form1).append('<input type="radio" name="public-support" value="wrong" /> 60% before, 99% afterwards',
                    '<input type="radio" name="public-support" value="wrong" /> 80% before, 99% afterwards',
                    '<input type="radio" name="public-support" value="right" /> 20% before, 99% afterwards',
                    '<input type="radio" name="public-support" value="wrong" /> 20% before, 80% afterwards');

    //appending the form to the <h2> div//
    $(form1).insertAfter(question1);

    //this will repeat for... quite a bit. There HAS to be someway of making this DRY. I'll ruminate on it after I get something to turn in.//

    //creates a new h2 element which will be unique to this question//
    var question2 = $("<h2>");

    //gives this h2 an ID and a class//
    $(question2).attr('id', 'question2', 'class', 'question')

    //Adding the question to be answered, using HTML notation from now on//
    $(question2).text("How old were the ships that were bombed in Pearl Harbor? How long since they had been commissioned?");

   //appending the question to the #main-section div//
    $("#main-section").append(question2);

    //Now the form for the buttons is created//
    var form2 = $("<form></form>");
    
    //adding an ID and class to the form//
    $(form2).attr('id', 'form2', 'class', 'form');

    //adding the buttons to the form//
    $(form2).append('<input type="radio" name="fleet-age" value="wrong" /> 2 years or newer',
                    '<input type="radio" name="fleet-age" value="wrong" /> 2 - 5 years old',
                    '<input type="radio" name="fleet-age" value="wrong" /> 5 - 20 years old',
                    '<input type="radio" name="fleet-age" value="right" /> 20 years or older');

    //appending the form to the <h2> div//
    $(form2).insertAfter(question2);

    //-----------------------------------------------------------------------------------------------------//

    //creates a new h2 element which will be unique to this question//
    var question3 = $("<h2>");

    //gives this h2 an ID and a class//
    $(question3).attr('id', 'question3', 'class', 'question')

    //Adding the question to be answered, using HTML notation from now on//
    $(question3).text("Which leading power had been vying to be the prime authority of a newly-envisioned world government 25 years before the culmination of World War II?");

   //appending the question to the #main-section div//
    $("#main-section").append(question3);

    //Now the form for the buttons is created//
    var form3 = $("<form></form>");
    
    //adding an ID and class to the form//
    $(form3).attr('id', 'form3', 'class', 'form');

    //adding the buttons to the form//
    $(form3).append('<input type="radio" name="world-power" value="wrong" /> Japan',
                    '<input type="radio" name="world-power" value="wrong" /> Russia',
                    '<input type="radio" name="world-power" value="wrong" /> Germany',
                    '<input type="radio" name="world-power" value="right" /> U.S.A.');

    //appending the form to the <h2> div//
    $(form3).insertAfter(question3);

    //--------------------------------------------------------------------------------------------------------//

    //creates a new h2 element which will be unique to this question//
    var question4 = $("<h2>");

    //gives this h2 an ID and a class//
    $(question4).attr('id', 'question4', 'class', 'question')

    //Adding the question to be answered, using HTML notation from now on//
    $(question4).text("How often did the major actors of the Axis fight together with each other?");

   //appending the question to the #main-section div//
    $("#main-section").append(question4);

    //Now the form for the buttons is created//
    var form4 = $("<form></form>");
    
    //adding an ID and class to the form//
    $(form4).attr('id', 'form4', 'class', 'form');

    //adding the buttons to the form//
    $(form4).append('<input type="radio" name="axis-in-name" value="right" /> Never',
                    '<input type="radio" name="axis-in-name" value="wrong" /> Rarely',
                    '<input type="radio" name="axis-in-name" value="wrong" /> Often',
                    '<input type="radio" name="axis-in-name" value="wrong" /> All of the time');

    //appending the form to the <h2> div//
    $(form4).insertAfter(question4);

    //------------------------------------------------------------------------------------------------------//

    //creates a new h2 element which will be unique to this question//
    var question5 = $("<h2>");

    //gives this h2 an ID and a class//
    $(question5).attr('id', 'question5', 'class', 'question')

    //Adding the question to be answered, using HTML notation from now on//
    $(question5).text("Which leader of the primary powers in World War II committed the most numerous human atrocities?");

   //appending the question to the #main-section div//
    $("#main-section").append(question5);

    //Now the form for the buttons is created//
    var form5 = $("<form></form>");
    
    //adding an ID and class to the form//
    $(form5).attr('id', 'form5', 'class', 'form');

    //adding the buttons to the form//
    $(form5).append('<input type="radio" name="leader" value="wrong" /> Franklin D. Roosevelt',
                    '<input type="radio" name="leader" value="right" /> Joseph Stalin',
                    '<input type="radio" name="leader" value="wrong" /> Winston Churchill',
                    '<input type="radio" name="leader" value="wrong" /> Hideki Tojo',
                    '<input type="radio" name="leader" value="wrong" /> Adolf Hitler',
                    '<input type="radio" name="leader" value="wrong" /> Benito Mussolini');

    //appending the form to the <h2> div//
    $(form5).insertAfter(question5);

    //----------------------------------------------------------------------------------------------------------//

    //creates a new h2 element which will be unique to this question//
    var question6 = $("<h2>");

    //gives this h2 an ID and a class//
    $(question6).attr('id', 'question6', 'class', 'question')

    //Adding the question to be answered, using HTML notation from now on//
    $(question6).text("Which major denomination created and spread the influence of the United Nations during and after World War II?");

   //appending the question to the #main-section div//
    $("#main-section").append(question6);

    //Now the form for the buttons is created//
    var form6 = $("<form></form>");
    
    //adding an ID and class to the form//
    $(form6).attr('id', 'form6', 'class', 'form');

    //adding the buttons to the form//
    $(form6).append('<input type="radio" name="religious-influence value="right" /> Non-Denominational Protestantism',
                    '<input type="radio" name="religious-influence value="wrong" /> Baptism',
                    '<input type="radio" name="religious-influence value="wrong" /> Pentecostalism',
                    '<input type="radio" name="religious-influence value="wrong" /> Methodism',
                    '<input type="radio" name="religious-influence value="wrong" /> Catholicism');

    //appending the form to the <h2> div//
    $(form6).insertAfter(question6);

    //-----------------------------------------------------------------------------------------------------------------//

    //Finally done! definitely needs to be DRY though.//

    //Creating the "Submit button"
    var submitForm = $("<form></form>");
    $(submitForm).append('<input type="submit" value="How did you do?" id="submitBtn"  />');
    $(submitForm).insertAfter(form6);

    //Conditional statements//

    console.log("Is this working?");
});

//On-click Function for the Submit button//
$(".form").on("submit", function(finish) {

    finish.preventDefault();

    console.log("please work");

    /*if no button is selected for a field, the unanswered score increases by one.
    "this" here ought to be referencing whichever form was chosen.*/
    if ((!this['public-support'].value) || (!this['fleet-age'].value) || (!this['world-power'].value) ||
        (!this['axis-in-name'].value) || (!this['leader'].value) || (!this['religious-influence'].value)) {

        //increments unanswered variable by 1; not displaying here yet!//
        unanswered++;
    }

    //if a button with the value of "wrong" is checked on submission, the incorrect score increases by one.//
    else if ($('input[value=wrong]').prop("checked")) {
        incorrect++;
    }

    //if a button with the value of "right" is checked on submission, correct score increases by one.
    else if ($('input[value=right]').prop("checked")) {
        correct++;
    }


    /*all of the above values are to be displayed on the Web browser now.
    First off, we clear the main section of all text.*/

    //Then we create a new H3 div telling the person they're done.
    var finalDiv = $("<h3>");

    //give this div a unique ID//
    finalDiv.attr('id', 'finalDiv')

    //Add text to the H3 about how they're done taking the quiz.//
    $(finalDiv).text("Now, let's see how well you know you're World War II trivia...");

    //Appends this to the #main-section div//
    $("#main-section").append(finalDiv);

    //create a variable holding the final results//
    var finalHTML = 
        "<p>Correct Answers: " + correct + "</p>" +
        "<p>Incorrect Answers: " + incorrect + "</p>" +
        "<p>Unanswered: " + unanswered + "</p>";
    
    //Append the results to the #finalDiv//
    $(finalDiv).append(finalHTML);

});

//Conditional statements//

