import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TuneIcon from "@mui/icons-material/Tune";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import Logo from "../../../assets/images/logo/Logo.png";
import {
  FormHeader,
  FormLogo,
  FormSearch,
} from "../../../styles/styleHeader/styleComponents";
import { FormButton } from "../../../styles/styleDashBoard/styleComponents";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { createNewCar } from "../../../api/api";

function Header({ user }: any) {
  const navigate = useNavigate();
  const [openNewCar, setOpenNewCar] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutAccount = () => {
    localStorage.clear();
    navigate("/login");
    return <Navigate to="/login" />;
  };

  const handleClickOpenNewCar = () => {
    setOpenNewCar(true);
  };
  const handleCloseNewCar = (value: string) => {
    setOpenNewCar(false);
  };

  return (
    <>
      <FormHeader
        container
        sx={{
          padding: {
            xs: "12px 12px",
            sm: "12px 24px",
            md: "12px 24px",
            lg: "12px 24px",
            xl: "12px 24px",
          },
        }}
      >
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <FormLogo item xs={2} sm={4} md={4} lg={2.5} xl={2}>
              <Link to="/">
                <img src={Logo} width="100%" />
              </Link>
            </FormLogo>
            <Grid item xs={12} sm={8} md={8} lg={6} xl={6}>
              <FormSearch>
                <IconButton type="button">
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{
                    width: "100%",
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "18px",
                      xl: "18px",
                    },
                  }}
                  placeholder="Search something here"
                />
                <IconButton type="button">
                  <TuneIcon />
                </IconButton>
              </FormSearch>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item xs={5} sm={6} md={7.5} lg={8}></Grid>
            <Grid item xs={7} sm={6} md={4.5} lg={4}>
              <Grid container>
                <FormButton item xs={3}>
                  <IconButton type="button">
                    <FavoriteIcon />
                  </IconButton>
                </FormButton>
                <FormButton item xs={3}>
                  <IconButton type="button">
                    <NotificationsIcon />
                  </IconButton>
                </FormButton>
                <FormButton item xs={3}>
                  <IconButton type="button">
                    <SettingsIcon />
                  </IconButton>
                </FormButton>

                <FormButton item xs={3}>
                  <Avatar
                    onClick={handleClickMenu}
                    alt="Error Avatar"
                    src={user?.user?.image}
                  />
                </FormButton>
                <FormButton item xs={12}>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem disabled>{user?.user?.name}</MenuItem>
                    <MenuItem onClick={handleClickOpenNewCar}>
                      Create Car
                    </MenuItem>
                    <MenuItem onClick={handleLogoutAccount}>Logout</MenuItem>
                  </Menu>
                </FormButton>
                <Grid item xs={12}>
                  <SimpleDialog
                    open={openNewCar}
                    userID={user?.user?.id}
                    setOpen={setOpenNewCar}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </FormHeader>
    </>
  );
}

function SimpleDialog(props: any) {
  const { open, setOpen, userID } = props;
  const navigate = useNavigate();
  const [value, setValue] = useState({
    nameCar: "",
    properties: "",
    image: "",
    fuel: "",
    driving_mode: "",
    seats: "",
    cost: "",
    price: "",
    userId: userID,
  });
  const inputBase = [
    {
      placeholder: "Name car",
      id: "nameCar",
    },
    {
      placeholder: "Properties",
      id: "properties",
    },
    {
      placeholder: "Image",
      id: "image",
    },
    {
      placeholder: "Fuel",
      id: "fuel",
    },
    {
      placeholder: "Driving mode",
      id: "driving_mode",
    },
    {
      placeholder: "Seats",
      id: "seats",
    },
    {
      placeholder: "Cost",
      id: "cost",
    },
    {
      placeholder: "Price",
      id: "price",
    },
  ];
  const handleValue = (e: any) => {
    setValue({ ...value, [e.target.id]: e.target.value });
  };
  const handleCreate = async () => {
    await createNewCar(value, userID);
    setOpen(false);
    navigate(-1);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open}>
      <Grid container sx={{ padding: "20px" }} spacing={2}>
        <Grid item xs={12}>
          <Grid
            sx={{ textAlign: "center", fontWeight: "bold", fontSize: "40px" }}
          >
            Create Car
          </Grid>
        </Grid>
        {inputBase.map((e) => (
          <Grid item xs={12}>
            <Grid>
              <InputBase
                id={e.id}
                placeholder={e.placeholder}
                type="text"
                sx={{
                  border: "1px solid black",
                  paddingLeft: "10px",
                  borderRadius: "10px",
                  width: "100%",
                }}
                onChange={handleValue}
              />
            </Grid>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" onClick={handleCreate}>
              create
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              back
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default Header;
