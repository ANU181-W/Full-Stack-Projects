import axios from "axios";
export const getallmovies = async () => {
  const res = await axios
    .get("http://localhost:5000/movie/getmovies")
    .catch((err) => console.log(err));
  if (res.status !== 201) {
    console.log("No Data Found");
  }
  const data = await res.data;
  return data;
};

export const GetUser = async () => {
  const res = await axios
    .get("http://localhost:5000/user")
    .catch((err) => console.log(err));
  if (res.status !== 200) {
    console.log("No Data Found");
  }
  const data = await res.data;
  return data;
};
