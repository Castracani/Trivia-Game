
//Starts on clicking the button initially displayed//
$("#triviaStart").on("click", function() {
    
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
    $(form1).append('<input type="radio" name="high" /> 60% before, 99% afterwards',
                    '<input type="radio" name="extreme" /> 80% before, 99% afterwards',
                    '<input type="radio" name="correct" /> 20% before, 99% afterwards',
                    '<input type="radio" name="low" /> 20% before, 80% afterwards');

    //appending the form to the <h2> div//
    $(form1).insertAfter(question1);

})