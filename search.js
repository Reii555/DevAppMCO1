const flights = [
  {
    airline: "Philippine Airlines",
    flightNumber: "PR 102",
    origin: "Manila (MNL)",
    destination: "Cebu (CEB)",
    departureTime: "06:00 AM",
    arrivalTime: "07:20 AM",
    duration: "1h 20m",
    layovers: 0,
    seats: 42,
    price: 5200,
    baggage: {
      checked: "20kg",
      carryOn: "7kg"
    },
    fareRules: ["Free Rebooking"],
    layoverInfo: "Direct Flight"
  },
  {
    airline: "Cebu Pacific",
    flightNumber: "5J 315",
    origin: "Cebu (CEB)",
    destination: "Manila (MNL)",
    departureTime: "09:15 AM",
    arrivalTime: "10:45 AM",
    duration: "1h 30m",
    layovers: 0,
    seats: 18,
    price: 4100,
    baggage: {
      checked: "20kg",
      carryOn: "7kg"
    },
    fareRules: ["Rebooking with fee"],
    layoverInfo: "Direct Flight"
  },
  {
    airline: "AirAsia",
    flightNumber: "Z2 224",
    origin: "Manila (MNL)",
    destination: "Cebu (CEB)",
    departureTime: "12:30 PM",
    arrivalTime: "02:00 PM",
    duration: "1h 30m",
    layovers: 0,
    seats: 55,
    price: 3800,
    baggage: {
      checked: "15kg",
      carryOn: "7kg"
    },
    fareRules: ["Non-refundable"],
    layoverInfo: "Direct Flight"
  },
  {
    airline: "Philippine Airlines",
    flightNumber: "PR 208",
    origin: "Cebu (CEB)",
    destination: "Manila (MNL)",
    departureTime: "03:00 PM",
    arrivalTime: "05:10 PM",
    duration: "2h 10m",
    layovers: 1,
    seats: 25,
    price: 6100,
    baggage: {
      checked: "20kg",
      carryOn: "7kg"
    },
    fareRules: ["Free Rebooking", "Refundable"],
    layoverInfo: "1 Stop (Davao)"
  },
  {
    airline: "Cebu Pacific",
    flightNumber: "5J 401",
    origin: "Manila (MNL)",
    destination: "Cebu (CEB)",
    departureTime: "07:45 PM",
    arrivalTime: "09:15 PM",
    duration: "1h 30m",
    layovers: 0,
    seats: 12,
    price: 4500,
    baggage: {
      checked: "20kg",
      carryOn: "7kg"
    },
    fareRules: ["Rebooking with fee"],
    layoverInfo: "Direct Flight"
  },
  {
    airline: "AirAsia",
    flightNumber: "Z2 510",
    origin: "Cebu (CEB)",
    destination: "Manila (MNL)",
    departureTime: "05:20 AM",
    arrivalTime: "06:50 AM",
    duration: "1h 30m",
    layovers: 0,
    seats: 33,
    price: 3500,
    baggage: {
      checked: "15kg",
      carryOn: "7kg"
    },
    fareRules: ["Non-refundable"],
    layoverInfo: "Direct Flight"
  },
  {
    airline: "Philippine Airlines",
    flightNumber: "PR 330",
    origin: "Manila (MNL)",
    destination: "Cebu (CEB)",
    departureTime: "10:00 AM",
    arrivalTime: "01:00 PM",
    duration: "3h 00m",
    layovers: 1,
    seats: 20,
    price: 7800,
    baggage: {
      checked: "30kg",
      carryOn: "7kg"
    },
    fareRules: ["Free Rebooking", "Refundable"],
    layoverInfo: "1 Stop (Clark)"
  },
  {
    airline: "Cebu Pacific",
    flightNumber: "5J 888",
    origin: "Manila (MNL)",
    destination: "Cebu (CEB)",
    departureTime: "11:50 PM",
    arrivalTime: "01:20 AM",
    duration: "1h 30m",
    layovers: 0,
    seats: 60,
    price: 3999,
    baggage: {
      checked: "20kg",
      carryOn: "7kg"
    },
    fareRules: ["Promo Fare", "Non-refundable"],
    layoverInfo: "Direct Flight"
  }
];

function renderFlights(data) {

    let container = $("#flightResults");

    container.empty();

    if (data.length === 0) {
        container.html("<p>No flights found.</p>");
        return;
    }

    data.forEach((flight, index) => {

        let card = `
        <div class="card shadow border-0 p-3 mb-3">
            <div class="row align-items-center mx-2">

                <div class="col-md-12 mb-3">
                    <img class="airline_logo"
                        src="https://files01.pna.gov.ph/category-list/2025/09/03/pal.jpeg"
                        alt="${flight.airline}">
                    <strong>${flight.flightNumber}</strong> - ${flight.airline}
                </div>

                <div class="col-md-6">
                    <label class="form-label">Departure: ${flight.departureTime}</label>
                </div>

                <div class="col-md-6">
                    <label class="form-label">Arrival: ${flight.arrivalTime}</label>
                </div>

                <div class="col-md-6">
                    <label class="form-label">Duration: ${flight.duration}</label>
                </div>

                <div class="col-md-6">
                    <label class="form-label">Layovers: ${flight.layovers}</label>
                </div>

                <div class="col-md-12">
                    <label class="form-label">Seats Available: ${flight.seats}</label>
                </div>

                <div class="col-md-12">
                    <label class="form-label"><strong>₱${flight.price.toLocaleString()}</strong></label>
                </div>

                <!-- Unique ID for each collapse -->
                <div class="collapse mt-3" id="details-${index}">
                    <hr>
                    <h5>Flight Details</h5>

                    <label class="form-label">Baggage:</label>
                    <ul>
                        <li>${flight.baggage.checked} Checked-in</li>
                        <li>${flight.baggage.carryOn} Carry-On</li>
                    </ul>

                    <label class="form-label">Fare Rules:</label>
                    <ul>
                        ${flight.fareRules.map(rule => `<li>${rule}</li>`).join('')}
                    </ul>

                    <label class="form-label">Layover Information:</label>
                    <ul>
                        <li>${flight.layoverInfo}</li>
                    </ul>
                </div>

                <div class="col-md-6">
                    <a href="booking.html" class="btn btn-success w-100 mt-3">Book Flight</a>
                </div>

                <div class="col-md-6">
                    <!-- data-bs-target matches the collapse ID -->
                    <button class="btn btn-outline-success w-100 mt-3" data-bs-toggle="collapse" data-bs-target="#details-${index}">
                        View Details
                    </button>
                </div>

            </div>
        </div>
        `;

        container.append(card);

    });
}

$(document).ready(function(){

    $("#searchBtn").click(function () {
        console.log("clicked");

        renderFlights(flights);
    });

});