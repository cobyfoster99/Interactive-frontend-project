function sendMail(contactForm) {
    emailjs.send("gmail", "travel", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "desired_location": contactForm.destination.value,
            "phone_number": contactForm.phone.value,
            "enquiry_details": contactForm.projectsummary.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}
