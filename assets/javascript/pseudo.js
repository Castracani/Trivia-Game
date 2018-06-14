Creating a file that's purely pseudo code and referencing it throughout the project
helps me understand what I need to be doing.

on clicking the "start" button, the timer of 30 seconds begins to count down.
at the end of 30 seconds, the results page will show up. 

So, this project requires
two functions: one setTimeout() that showcases the results of the first on-click button function,
and the on-click button function itself.
We also need to display the time remaining to answer the questions on the HTML page.

//On-click function//
All of the questions are displayed.
Buttons are all radio buttons, making it so you can only select one answer.

In the jQuery, each question has both the question itself in an h2 / h3,
    and the list of answers.

create a function, $("#triviaStart").click(function () {
    ....
})

A new element needs to be created with <h2>
    var question1 = $("<h2>")
    an Id needs to be added, so something like $(h2).attr('id', 'question1' and 'class', 'question')
    insert this div into HTML,
    Text needs to be added to the element with the question, $("#question1").text("question here");
Below  that, the radio buttons need to be given var form1 = $("<form></form")
    add an ID to it, $(form1).attr('id', 'form1');
add the options to the form $("#form1").append("<input type='radio' name='location' value='value1'>" "Value1"
                                               "<input type='radio' name='location' value='value2'>" "Value2")


...and repeat that process for 8 steps it seems




        



