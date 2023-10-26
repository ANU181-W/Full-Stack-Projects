import Booking from "../models/Booking.js";
import Movies from "../models/Movies.js";
import User from "../models/User.js";
export const Add_New_Booking = async (req, res) => {
  const { movie, date, seatnumber, user } = req.body;
  let existingMovie;
  let existingUser;
  try {
    existingMovie = await Movies.findById(movie);
    existingUser = await User.findById(user);
  } catch (err) {
    return console.log(err);
  }
  if (!existingMovie) {
    return res.status(404).json({ message: "Movie Not Found With Given ID" });
  }
  if (!user) {
    return res.status(404).json({ message: "User not found with given ID " });
  }
  let booking;
  try {
    booking = new Booking({
      movie,
      date: new Date(`${date}`),
      seatnumber,
      user,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!booking) {
    return res.status(500).json({ message: "Unable to create a booking" });
  }

  return res.status(201).json({ booking });
};
