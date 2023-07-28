import { Box, Button, FormLabel, Grid, TextField } from "@mui/material";
// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addNewUser } from "../../api/api";

interface userAccount {
  username: string;
  password: string;
  name: string;
  image: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState<userAccount>({
    username: "",
    password: "",
    name: "",
    image: "",
  });

  const handleAccount = (e: any) => {
    if (e.target.id === "image") {
      setAccount({ ...account, [e.target.id]: e.target.files[0].name });
    } else {
      setAccount({ ...account, [e.target.id]: e.target.value });
    }
    console.log(account);
  };

  const handleSignup = async () => {
    await addNewUser({
      username: account.username,
      password: account.password,
      name: account.name,
      image: account.image,
    });
    navigate("/login");
  };

  return (
    <>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "100px",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            background: "#e0e0e0",
            padding: " 24px",
            maxWidth: "400px",
          }}
        >
          <Grid item xs={12}>
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
              <FormLabel sx={{ color: "black", fontWeight: "700" }}>
                Sign Up
              </FormLabel>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
              <TextField
                placeholder="Username"
                onChange={handleAccount}
                type="text"
                id="username"
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
              <TextField
                type="password"
                placeholder="Password"
                onChange={handleAccount}
                id="password"
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
              <TextField
                type="name"
                placeholder="name"
                onChange={handleAccount}
                id="name"
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                '[type="file"]': {
                  height: 0,
                  overflow: "hidden",
                  width: 0,
                },
                '[type="file"] + label': {
                  background: "#f15d22",
                  border: "none",
                  borderRadius: "5px",
                  color: "#fff",
                  cursor: "pointer",
                  display: "inline-block",
                  fontFamily: "'Rubik', sans-serif",
                  fontSize: "inherit",
                  fontWeight: "500",
                  marginBottom: "1rem",
                  outline: "none",
                  padding: "1rem 50px",
                  position: "relative",
                  transition: "all 0.3s",
                  verticalAlign: "middle",
                  "&.btn-2": {
                    backgroundColor: "#99c793",
                    borderRadius: "50px",
                    overflow: "hidden",

                    "&::before": {
                      color: "#fff",
                      fontFamily: "Font Awesome 5 Pro",
                      fontSize: "100%",
                      height: "100%",
                      right: "130%",
                      lineHeight: 3.3,
                      position: "absolute",
                      top: "0px",
                      transition: "all 0.3s",
                    },

                    " &:hover": {
                      backgroundColor: "darken(#99c793, 30%)",

                      "&::before": {
                        right: " 75%",
                      },
                    },
                  },
                },
              }}
            >
              <input type="file" onChange={handleAccount} id="image" />
              <label for="image" class="btn-2">
                Upload Avatar
              </label>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button variant="contained" onClick={handleSignup}>
                signup
              </Button>
              <Link to="/login">
                <Button variant="contained">Login</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SignUp;
