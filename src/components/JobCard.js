import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
  border: "1px solid #0000",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

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

function JobCard({ job, islogined = true, setIslogined }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const datalogin = { username: "DatNguyen", password: "12345" };
  const [username, setUsername] = useState("DatNguyen");
  const [password, setPassword] = useState("12345");

  const handlesubmitLog = () => {
    username === datalogin.username && password === datalogin.password
      ? setIslogined(true)
      : console.log(username, password);
  };

  return (
    <Card sx={{ maxWidth: 290, minHeight: 200, mt: 2 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 12, fontWeight: "bold" }}
          color="white"
          borderBottom={1}
          borderColor="grey"
          gutterBottom
        >
          {job.title}
        </Typography>
        <Typography sx={{ justifyContent: "center" }} component="div">
          {job.skills.slice(0, 4).map((skill) => (
            <Typography
              sx={{
                fontSize: 10,
                backgroundColor: "red",
                color: "white",
                borderRadius: 1.5,
                padding: 0.5,
                margin: 0.2,
              }}
              key={skill}
              component="span"
            >
              {skill}
            </Typography>
          ))}
        </Typography>
        <Typography
          noWrap={true}
          sx={{
            fontSize: 11,
            color: "white",
            mt: 2,
            lineHeight: 1.5,
            display: "block",
          }}
        >
          {job.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleOpen} size="small">
          Learn More
        </Button>
        {islogined ? (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h4"
                component="h2"
                color="white"
                borderBottom={1}
                borderColor="grey"
                textAlign={"center"}
              >
                {job.title}
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, mb: 2 }}
                textAlign={"center"}
              >
                {job.description}
              </Typography>
              <Typography
                id="modal-modal-skill-title"
                sx={{ mt: 2 }}
                textAlign={"center"}
                variant="h5"
              >
                Skill:
              </Typography>
              <Typography sx={{ mb: 2 }} component="div" textAlign={"center"}>
                {job.skills.map((skill) => (
                  <Typography
                    sx={{
                      display: "inline-block",
                      fontSize: 13,
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: 1.5,
                      padding: 0.5,
                      margin: 0.2,
                    }}
                    key={skill}
                    component="span"
                  >
                    {skill}
                  </Typography>
                ))}
              </Typography>
              <Typography
                id="modal-modal-skill-title"
                sx={{ mt: 2 }}
                textAlign={"center"}
                variant="h5"
              >
                {`City: ${job.city}`}
              </Typography>
            </Box>
          </Modal>
        ) : (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
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
                      setUsername(e.target.value);
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
                        setPassword(e.target.value);
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
                  onClick={handlesubmitLog}
                  size="small"
                  sx={{ m: "auto", mt: 3, width: "100%" }}
                >
                  Sign In
                </Button>
              </Box>
            </form>
          </Modal>
        )}
      </CardActions>
    </Card>
  );
}

export default JobCard;
