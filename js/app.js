$(document).ready(function() {
    /*--- Declaring variables ---*/
    var count = 0;
    $count = $('#count');
    guessList = $('#guessList');
    random = randomNum();
    feedback = $('#feedback');
    userGuess = $('#userGuess');
    guessButton = $('#guessButton');
    diff = diff();

    /*--- newGame Function---*/
    $('.new').click(function () {
        count = 0;
        $count.text(count);
        randomNum();
        feedback.text('Make your Guess!');
        guessList.empty();
        guessButton.prop('disabled',false);
        guessList.prop('disabled', false);

    });
    /*--- Generate Random Number ---*/
    function randomNum() {
        return Math.floor((Math.random() * 100) + 1);
    }

    function diff()
    {
      var user_guess=$('#userGuess').val();
      var diff= Math.abs(random-user_guess);
      return diff;
    }

    /*--- Track Guesses ---*/
    function guessTrack () {
            count++;
            $count.text(count);
            guessList.append('<li>' + userGuess.val() + '</li>');


    }
    /*--- Determining Feedback---*/
    guessButton.click(function () {
        if(userGuess.val() >= 1 && userGuess.val() <= 100) {
            feedback.text((giveFeedback(Math.abs(userGuess.val() - random))));
            guessTrack();
        }
        else{
            alert('Please supply a number from 1 to 100');
        }
        return false;
    });

    function giveFeedback(diff) {
        if (diff === 0) {
            feedback.text('You are Correct!');
            guessButton.prop('disabled',true);
            guessList.prop('disabled', true);

        }
        else if (diff < 10) {
            feedback.text('Boiling Hot');
        }
        else if ((diff > 10) && (diff < 20)) {
            feedback.text ('Hot!');
        }
        else if ((diff > 20) && (diff < 30)) {
            feedback.text('Warm');
        }
        else if ((diff > 30) && (diff < 40)) {
            feedback.text('Cold');
        }
        else if (diff >40){
            feedback.text('Too Cold');
        }
    }

// Display information modal box
    $('.what').click(function () {
        $('.overlay').fadeIn(1000);
    });

    // Hide information modal box
    $('a.close').click(function () {
        $('.overlay').fadeOut(1000);
    });
});
