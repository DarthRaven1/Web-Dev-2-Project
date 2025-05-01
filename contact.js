document.addEventListener('DOMContentLoaded', function() {
    const qotdContainer = document.getElementById('question-of-day-container');
    const qotdLabel = document.getElementById('question-of-day-label');
    const emailForm = document.getElementById('email-form');

    const questionsOfTheDay = [
        "What's the most interesting thing you learned recently?",
        "If you could have any superpower, what would it be and why?",
        "What's a small thing that made you smile today?",
        "What's your favorite book or movie and why?",
        "If you could travel anywhere in the world right now, where would you go?"
    ];

    function displayQuestionOfDay() {
        if (qotdContainer && qotdLabel) {
            const randomIndex = Math.floor(Math.random() * questionsOfTheDay.length);
            qotdLabel.textContent = questionsOfTheDay[randomIndex];
        }
    }

    displayQuestionOfDay();

    emailForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission


        alert("Your message has been sent! Thank you for your feedback!");
        emailForm.reset();
        displayQuestionOfDay(); // Display a new question after submission
    });
});