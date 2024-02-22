const initPayment = async (data, bookingData, successCallback) => {
  console.log("Inside initPayment function");
  console.log(process.env.REACT_APP_API_KEY);
  console.log(data.id);
  const amount_to_pay = bookingData.book_cost * 100;
  console.log(amount_to_pay);
  await fetchData();

  const options = {
    key: process.env.REACT_APP_API_KEY,
    amount: amount_to_pay,
    currency: data.currency,
    name: `Package : ${packageName}`,
    description: "Testing",
    image: packImage,
    order_id: data.id,
    handler: async (response) => {
      try {
        console.log("Inside handler function");
        console.log(response);

        const newResponse = {
          response,
          bookingData,
        };
        console.log(newResponse);

        const apiResponse = await fetch("http://localhost:5000/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newResponse),
        });

        const responseData = await apiResponse.json();
        console.log(responseData.message);

        if (apiResponse.status === 200) {
          successCallback();
          window.alert("Your Bookings Are Confirmed");
          navigate("/Home");
        } else {
          throw new Error("Booking Failed");
        }
      } catch (error) {
        console.error("Error in handler function:", error);
      }
    },
  };
  console.log(packages);
  console.log("Name ", options.name);
  const rzp1 = new window.Razorpay(options);
  rzp1.open();
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const successCallback = () => {
    var mem = parseInt(bookingData.book_adult, 10);
    mem = mem + parseInt(bookingData.book_child, 10);
    packageData.rem_book = packageData.rem_book - mem;
    updatepack(packageData);
  };

  if (!agreedToTerms) {
    alert("Please agree to the terms before booking.");
    return;
  }

  bookingData.book_travellers = [...adultTravelers, ...childTravelers];
  console.log(bookingData);
  try {
    const response = await fetch("http://localhost:5000/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (response.status === 200) {
      const resData = await response.json();
      console.log("Booking created:", resData.savedBooking);
      console.log("Order details:", resData.data);
      initPayment(resData.data, resData.savedBooking, successCallback);
    } else {
      console.error("Error creating booking");
    }
  } catch (error) {
    console.error("Error sending booking data:", error);
  }
};
