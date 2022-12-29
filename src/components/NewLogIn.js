import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useNavigate } from "react-router";

const styleLogIn = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "1px solid #0000",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

function NewLogIn({ setUsername, setPassword, islogined }) {
  const navigate = useNavigate();
  const [user, setUser] = useState("DatNguyen");
  const [pass, setPass] = useState("12345");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(user);
    setPassword(pass);
    islogined ? navigate(`/`) : console.log("notlogin");
  };

  useEffect(() => {
    islogined ? navigate(`/`) : console.log("notlogin");
  }, [islogined, navigate]);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form action="">
      <Box sx={styleLogIn}>
        <Typography
          id="modal-modal-title"
          variant="h4"
          component="h2"
          color="white"
          borderBottom={1}
          borderColor="grey"
          textAlign={"center"}
        >
          Log in
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: "auto", mt: 3, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="DatNguyen"
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />

          <FormControl
            sx={{ m: "auto", mt: 3, width: "100%" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              defaultValue="12345"
              onChange={(e) => {
                setPass(e.target.value);
              }}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>
        <Button
          onClick={handleSubmit}
          size="small"
          sx={{ m: "auto", mt: 3, width: "100%" }}
        >
          Sign In
        </Button>
      </Box>
    </form>
  );
}

export default NewLogIn;
