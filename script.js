document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll('.step');
    let currentStep = 1;

    function showStep(stepNumber) {
        steps.forEach(step => {
            step.style.display = 'none';
        });

        if (stepNumber <= steps.length) {
            document.getElementById(`step${stepNumber}`).style.display = 'block';

            const countdownElement = document.querySelector(`#step${stepNumber} .countdown`);
            const countdownTime = parseInt(countdownElement.getAttribute('data-time'));
            
            let secondsRemaining = countdownTime;

            const countdownInterval = setInterval(() => {
                secondsRemaining--;

                if (secondsRemaining <= 0) {
                    clearInterval(countdownInterval);
                    showStep(stepNumber + 1);
                } else {
                    countdownElement.innerHTML = `Please wait for ${secondsRemaining} seconds...`;
                }
            }, 1000);
        } else {
            // Redirect to Telegram or perform other actions
            window.location.href = 'YOUR_TELEGRAM_BOT_LINK';
        }
    }

    showStep(currentStep);
});
