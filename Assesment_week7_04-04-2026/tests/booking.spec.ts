import { test, expect } from "@playwright/test";
import bookingData from "../test_data/booking.json";

test("herokuapp", async ({ request }) => {

  //  TOKEN 
  let createtoken = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: {
        username: "admin",
        password: "password123"
      }
    }
  );

  expect(createtoken.status()).toBe(200);

  let tokenRes = await createtoken.json();
  let token = tokenRes.token;
  console.log("Token:", token);


  // GET BOOKING 
  let getBooking = await request.get(
    "https://restful-booker.herokuapp.com/booking"
  );

  expect(getBooking.status()).toBe(200);

  let bookingList = await getBooking.json();
  let bookingid = bookingList[0].bookingid;
  console.log("Existing Booking ID:", bookingid);


  //  CREATE BOOKING 
  let createBooking = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      data: bookingData.createBooking
    }
  );

  expect(createBooking.status()).toBe(200);

  let newBooking = await createBooking.json();
  let bookingid1 = newBooking.bookingid;

  console.log("New Booking:", newBooking);


  // UPDATE BOOKING 
  let updatebooking = await request.put(
    `https://restful-booker.herokuapp.com/booking/${bookingid1}`,   // ✅ FIXED
    {
      data: bookingData.updateBooking,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Cookie": `token=${token}`
      }
    }
  );

  expect(updatebooking.status()).toBe(200);   // FIXED

  let updatedBooking = await updatebooking.json();

  expect(updatedBooking.firstname).toBe(bookingData.updateBooking.firstname);
  expect(updatedBooking.lastname).toBe(bookingData.updateBooking.lastname);
  expect(updatedBooking.totalprice).toBe(bookingData.updateBooking.totalprice);

  console.log("Updated Booking:", updatedBooking);


  //  PARTIAL UPDATE 
  let updatepartialbooking = await request.patch(
    `https://restful-booker.herokuapp.com/booking/${bookingid1}`,   
    {
      data: bookingData.partialUpdate,
      headers: {
        "Content-Type": "application/json",
        "Cookie": `token=${token}`
      }
    }
  );

  expect(updatepartialbooking.status()).toBe(200);

  let partialupdatedBooking = await updatepartialbooking.json();

  expect(partialupdatedBooking.firstname).toBe(bookingData.partialUpdate.firstname);

  console.log("Partial Updated Booking:", partialupdatedBooking);


  //  DELETE BOOKING 
  let deleteBooking = await request.delete(
    `https://restful-booker.herokuapp.com/booking/${bookingid1}`,
    {
      headers: {
        "Cookie": `token=${token}`
      }
    }
  );

  expect(deleteBooking.status()).toBe(201);

  console.log("Booking Deleted Successfully");

});