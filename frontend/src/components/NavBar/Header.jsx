import React, { useEffect, useState } from "react";
import { GetUser, getallmovies } from "../Data/Data";
import {
  AppBar,
  Toolbar,
  Autocomplete,
  TextField,
  Tabs,
  Tab,
} from "@mui/material";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const dummyArray = ["robin", "krish", "mr.x"];
function Header() {
  const [value, setvalue] = useState(0);

  const changeHandler = (e, value) => {
    setvalue(value);
  };
  useEffect(() => {
    getallmovies()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    GetUser()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#2b2d42" }}>
      <Toolbar className="nav">
        <Box width={"20%"}>
          <MovieFilterIcon />
        </Box>
        <Box width={"30%"} margin={"auto"}>
          <Autocomplete
            freeSolo
            options={dummyArray.map((option) => option)}
            renderInput={(params) => (
              <TextField
                sx={{
                  input: { color: "white" },
                }}
                variant="standard"
                {...params}
                placeholder="Search Movies"
              />
            )}
          />
        </Box>
        <Box display={"flex"}>
          <Tabs
            textColor="white"
            indicatorColor="secondary"
            value={value}
            onChange={changeHandler}
          >
            <Tab LinkComponent={Link} to="/admin" label="Admin" />
            <Tab LinkComponent={Link} to="/auth" label="Sign UP" />
            <Tab LinkComponent={Link} to="/movies" label="Movies" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
