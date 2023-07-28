/* eslint-disable react-hooks/rules-of-hooks */
import { Button, FormLabel, Grid, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { dataUsers } from "../../api/api";

interface userAccount {
  username: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<any>();
  const [account, setAccount] = useState<userAccount>({
    username: "",
    password: "",
  });
  if (localStorage.getItem("accessToken")) {
    return <Navigate to="/" />;
  }

  const handleAccount = (e: any) => {
    setAccount({ ...account, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    dataUsers().then((e) => {
      setUsers(e.users);
    });
  }, []);

  const handleLogin = () => {
    const user = users.find((e: any) => {
      return e.username === account.username;
    });

    if (user && user.password === account.password) {
      localStorage.setItem("accessToken", user?.accessToken);
      localStorage.setItem("uid", user?.id);
      navigate("/");
      return <Navigate to="/" />;
    }
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ background: "#e0e0e0", padding: " 24px", maxWidth: "400px" }}
      >
        <Grid item xs={12}>
          <Grid>
            <FormLabel sx={{ color: "black", fontWeight: "700" }}>
              Log In
            </FormLabel>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid>
            <TextField
              placeholder="Username"
              onChange={handleAccount}
              type="text"
              id="username"
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid>
            <TextField
              type="password"
              placeholder="Password"
              onChange={handleAccount}
              id="password"
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" onClick={handleLogin}>
              Login
            </Button>
            <Link to="/signup">
              <Button variant="contained">Signup</Button>
            </Link>
          </Grid>
        </Grid>
        {/* <Grid item xs={12}>
          <Grid>
            <Button variant="outlined">Login with Google</Button>
          </Grid>
        </Grid> */}
      </Grid>
    </>
  );
};

export default Login;
