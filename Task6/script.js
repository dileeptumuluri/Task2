// Mini Projects using Date Methods in JavaScript


// ================= TASK 1 =================
// Employee Date Management System

{
    let employeeName = "Dileep";

    let joiningDate = new Date();

    // SET METHODS

    joiningDate.setFullYear(2024);
    joiningDate.setMonth(5);
    joiningDate.setDate(10);
    joiningDate.setHours(10);
    joiningDate.setMinutes(30);
    joiningDate.setSeconds(45);


    // GET METHODS

    let year = joiningDate.getFullYear();
    let month = joiningDate.getMonth() + 1;
    let date = joiningDate.getDate();
    let day = joiningDate.getDay();

    let hours = joiningDate.getHours();
    let minutes = joiningDate.getMinutes();
    let seconds = joiningDate.getSeconds();


    console.log("===== Employee Details =====");

    console.log("Employee Name : " + employeeName);

    console.log("Joining Year : " + year);
    console.log("Joining Month : " + month);
    console.log("Joining Date : " + date);
    console.log("Joining Day : " + day);

    console.log("Joining Hours : " + hours);
    console.log("Joining Minutes : " + minutes);
    console.log("Joining Seconds : " + seconds);

}



// ================= TASK 2 =================
// Movie Show Booking System

{
    let movieName = "Arjun Reddy";
    let ticketPrice = 180;
    let tickets = 3;


    let showDate = new Date();


    // SET METHODS

    showDate.setFullYear(2026);
    showDate.setMonth(7);
    showDate.setDate(15);

    showDate.setHours(18);
    showDate.setMinutes(30);
    showDate.setSeconds(0);



    // GET METHODS

    let year = showDate.getFullYear();
    let month = showDate.getMonth() + 1;
    let date = showDate.getDate();
    let day = showDate.getDay();

    let hours = showDate.getHours();
    let minutes = showDate.getMinutes();
    let seconds = showDate.getSeconds();



    let totalAmount = ticketPrice * tickets;


    console.log("\n===== Movie Booking Details =====");

    console.log("Movie : " + movieName);
    console.log("Ticket Price : " + ticketPrice);
    console.log("Tickets : " + tickets);
    console.log("Total Amount : " + totalAmount);


    console.log("Show Year : " + year);
    console.log("Show Month : " + month);
    console.log("Show Date : " + date);
    console.log("Show Day : " + day);

    console.log("Show Hours : " + hours);
    console.log("Show Minutes : " + minutes);
    console.log("Show Seconds : " + seconds);

}



// ================= TASK 3 =================
// Flight Ticket Booking System

{
    let passengerName = "Naveenraj";
    let flightName = "Air India";
    let ticketPrice = 5000;


    let travelDate = new Date();


    // SET METHODS

    travelDate.setFullYear(2026);
    travelDate.setMonth(8);
    travelDate.setDate(20);

    travelDate.setHours(14);
    travelDate.setMinutes(30);
    travelDate.setSeconds(0);



    // GET METHODS

    let year = travelDate.getFullYear();
    let month = travelDate.getMonth() + 1;
    let date = travelDate.getDate();
    let day = travelDate.getDay();

    let hours = travelDate.getHours();
    let minutes = travelDate.getMinutes();
    let seconds = travelDate.getSeconds();



    console.log("\n===== Flight Booking Details =====");

    console.log("Passenger Name : " + passengerName);
    console.log("Flight Name : " + flightName);
    console.log("Ticket Price : " + ticketPrice);


    console.log("Travel Year : " + year);
    console.log("Travel Month : " + month);
    console.log("Travel Date : " + date);
    console.log("Travel Day : " + day);

    console.log("Travel Hours : " + hours);
    console.log("Travel Minutes : " + minutes);
    console.log("Travel Seconds : " + seconds);

}
// ================= TASK 4 =================
// Hotel Booking System

{
    let customerName = "Dileep";
    let roomType = "Deluxe Room";
    let roomPrice = 3000;
    let rooms = 2;


    let bookingDate = new Date();


    // SET METHODS

    bookingDate.setFullYear(2026);
    bookingDate.setMonth(9);
    bookingDate.setDate(10);

    bookingDate.setHours(11);
    bookingDate.setMinutes(30);
    bookingDate.setSeconds(0);



    // GET METHODS

    let year = bookingDate.getFullYear();
    let month = bookingDate.getMonth() + 1;
    let date = bookingDate.getDate();
    let day = bookingDate.getDay();

    let hours = bookingDate.getHours();
    let minutes = bookingDate.getMinutes();
    let seconds = bookingDate.getSeconds();



    let totalBill = roomPrice * rooms;



    console.log("\n===== Hotel Booking Details =====");

    console.log("Customer Name : " + customerName);
    console.log("Room Type : " + roomType);
    console.log("Room Price : " + roomPrice);
    console.log("Number of Rooms : " + rooms);
    console.log("Total Bill : " + totalBill);


    console.log("Booking Year : " + year);
    console.log("Booking Month : " + month);
    console.log("Booking Date : " + date);
    console.log("Booking Day : " + day);

    console.log("Booking Hours : " + hours);
    console.log("Booking Minutes : " + minutes);
    console.log("Booking Seconds : " + seconds);

}



// ================= TASK 5 =================
// Food Delivery System

{
    let customerName = "Naveenraj";
    let foodName = "Biryani";
    let foodPrice = 250;
    let quantity = 2;


    let deliveryDate = new Date();


    // SET METHODS

    deliveryDate.setFullYear(2026);
    deliveryDate.setMonth(7);
    deliveryDate.setDate(8);

    deliveryDate.setHours(19);
    deliveryDate.setMinutes(30);
    deliveryDate.setSeconds(0);



    // GET METHODS

    let year = deliveryDate.getFullYear();
    let month = deliveryDate.getMonth() + 1;
    let date = deliveryDate.getDate();
    let day = deliveryDate.getDay();

    let hours = deliveryDate.getHours();
    let minutes = deliveryDate.getMinutes();
    let seconds = deliveryDate.getSeconds();



    let totalBill = foodPrice * quantity;



    console.log("\n===== Food Delivery Details =====");

    console.log("Customer Name : " + customerName);
    console.log("Food Name : " + foodName);
    console.log("Food Price : " + foodPrice);
    console.log("Quantity : " + quantity);
    console.log("Total Bill : " + totalBill);


    console.log("Delivery Year : " + year);
    console.log("Delivery Month : " + month);
    console.log("Delivery Date : " + date);
    console.log("Delivery Day : " + day);

    console.log("Delivery Hours : " + hours);
    console.log("Delivery Minutes : " + minutes);
    console.log("Delivery Seconds : " + seconds);

}



// ================= TASK 6 =================
// Hospital Appointment System

{
    let patientName = "Dileep";
    let doctorName = "Dr.Kiran";
    let consultationFee = 500;


    let appointmentDate = new Date();


    // SET METHODS

    appointmentDate.setFullYear(2026);
    appointmentDate.setMonth(7);
    appointmentDate.setDate(12);

    appointmentDate.setHours(10);
    appointmentDate.setMinutes(30);
    appointmentDate.setSeconds(0);



    // GET METHODS

    let year = appointmentDate.getFullYear();
    let month = appointmentDate.getMonth() + 1;
    let date = appointmentDate.getDate();
    let day = appointmentDate.getDay();

    let hours = appointmentDate.getHours();
    let minutes = appointmentDate.getMinutes();
    let seconds = appointmentDate.getSeconds();



    console.log("\n===== Hospital Appointment Details =====");

    console.log("Patient Name : " + patientName);
    console.log("Doctor Name : " + doctorName);
    console.log("Consultation Fee : " + consultationFee);


    console.log("Appointment Year : " + year);
    console.log("Appointment Month : " + month);
    console.log("Appointment Date : " + date);
    console.log("Appointment Day : " + day);

    console.log("Appointment Hours : " + hours);
    console.log("Appointment Minutes : " + minutes);
    console.log("Appointment Seconds : " + seconds);


    console.log("Appointment Confirmed");

}



// ================= TASK 7 =================
// Bus Ticket Booking System

{
    let passengerName = "Dileep";
    let busName = "SETC Express";
    let ticketPrice = 450;
    let seats = 2;


    let travelDate = new Date();


    // SET METHODS

    travelDate.setFullYear(2026);
    travelDate.setMonth(8);
    travelDate.setDate(25);

    travelDate.setHours(21);
    travelDate.setMinutes(30);
    travelDate.setSeconds(0);



    // GET METHODS

    let year = travelDate.getFullYear();
    let month = travelDate.getMonth() + 1;
    let date = travelDate.getDate();
    let day = travelDate.getDay();

    let hours = travelDate.getHours();
    let minutes = travelDate.getMinutes();
    let seconds = travelDate.getSeconds();



    let totalAmount = ticketPrice * seats;



    console.log("\n===== Bus Ticket Details =====");

    console.log("Passenger Name : " + passengerName);
    console.log("Bus Name : " + busName);
    console.log("Ticket Price : " + ticketPrice);
    console.log("Number of Seats : " + seats);
    console.log("Total Amount : " + totalAmount);


    console.log("Travel Year : " + year);
    console.log("Travel Month : " + month);
    console.log("Travel Date : " + date);
    console.log("Travel Day : " + day);

    console.log("Travel Hours : " + hours);
    console.log("Travel Minutes : " + minutes);
    console.log("Travel Seconds : " + seconds);


    console.log("Ticket Booking Successful");

}

// ================= TASK 8 =================
// Exam Hall Ticket System

{
    let studentName = "Dileep";
    let registerNumber = 101;
    let subject = "JavaScript";
    let examFee = 500;


    let examDate = new Date();


    // SET METHODS

    examDate.setFullYear(2025);
    examDate.setMonth(10);
    examDate.setDate(15);

    examDate.setHours(10);
    examDate.setMinutes(0);
    examDate.setSeconds(0);



    // GET METHODS

    let year = examDate.getFullYear();
    let month = examDate.getMonth() + 1;
    let date = examDate.getDate();
    let day = examDate.getDay();

    let hours = examDate.getHours();
    let minutes = examDate.getMinutes();
    let seconds = examDate.getSeconds();



    console.log("\n===== Exam Hall Ticket Details =====");

    console.log("Student Name : " + studentName);
    console.log("Register Number : " + registerNumber);
    console.log("Subject : " + subject);
    console.log("Exam Fee : " + examFee);


    console.log("Exam Year : " + year);
    console.log("Exam Month : " + month);
    console.log("Exam Date : " + date);
    console.log("Exam Day : " + day);

    console.log("Exam Hours : " + hours);
    console.log("Exam Minutes : " + minutes);
    console.log("Exam Seconds : " + seconds);


    console.log("Hall Ticket Generated");

}



// ================= TASK 9 =================
// Event Registration System

{
    let participantName = "Dileep";
    let eventName = "Tech Fest";
    let entryFee = 300;


    let eventDate = new Date();


    // SET METHODS

    eventDate.setFullYear(2026);
    eventDate.setMonth(11);
    eventDate.setDate(20);

    eventDate.setHours(9);
    eventDate.setMinutes(30);
    eventDate.setSeconds(0);



    // GET METHODS

    let year = eventDate.getFullYear();
    let month = eventDate.getMonth() + 1;
    let date = eventDate.getDate();
    let day = eventDate.getDay();

    let hours = eventDate.getHours();
    let minutes = eventDate.getMinutes();
    let seconds = eventDate.getSeconds();



    console.log("\n===== Event Registration Details =====");

    console.log("Participant Name : " + participantName);
    console.log("Event Name : " + eventName);
    console.log("Entry Fee : " + entryFee);


    console.log("Event Year : " + year);
    console.log("Event Month : " + month);
    console.log("Event Date : " + date);
    console.log("Event Day : " + day);

    console.log("Event Hours : " + hours);
    console.log("Event Minutes : " + minutes);
    console.log("Event Seconds : " + seconds);


    console.log("Registration Successful");

}



// ================= TASK 10 =================
// Library Book Return System

{
    let studentName = "Dileep";
    let bookName = "JavaScript Basics";
    let bookId = 101;


    let returnDate = new Date();


    // SET METHODS

    returnDate.setFullYear(2026);
    returnDate.setMonth(8);
    returnDate.setDate(30);

    returnDate.setHours(17);
    returnDate.setMinutes(30);
    returnDate.setSeconds(0);



    // GET METHODS

    let year = returnDate.getFullYear();
    let month = returnDate.getMonth() + 1;
    let date = returnDate.getDate();
    let day = returnDate.getDay();

    let hours = returnDate.getHours();
    let minutes = returnDate.getMinutes();
    let seconds = returnDate.getSeconds();



    console.log("\n===== Library Book Return Details =====");

    console.log("Student Name : " + studentName);
    console.log("Book Name : " + bookName);
    console.log("Book ID : " + bookId);


    console.log("Return Year : " + year);
    console.log("Return Month : " + month);
    console.log("Return Date : " + date);
    console.log("Return Day : " + day);

    console.log("Return Hours : " + hours);
    console.log("Return Minutes : " + minutes);
    console.log("Return Seconds : " + seconds);


    console.log("Book Return Date Confirmed");

}