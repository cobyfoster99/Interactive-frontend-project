function sendMail(contactForm) {
    emailjs.send("gmail", "sdw_travel", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "desired_location": contactForm.destination.value,
            "phone_number": contactForm.phone.value,
            "discuss": contactForm.discussform.value
        })
        .then(
            function(response) {
                document.getElementById("sucessForm").style.display = "block";
            },
            
            function(error) {
                document.getElementById("failedForm").style.display = "block";
            }
        );
    return false; // To block from loading a new page
}