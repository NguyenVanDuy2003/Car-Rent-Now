/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  Select,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

import {
  ButtonICon,
  FormBg,
  FormBgLeft,
  FormBgRight,
  FormButton,
  FormCar,
  FormControlPrice,
  FormDel,
  FormNameCar,
  FormOption,
  FormPriceContent,
  FormSelect,
  FormSwap,
  FormTitle,
  FormtypeCar,
  FromButton,
  FromDivider,
  FromIconContent,
  FromImage,
  Item,
} from "../../styles/styleDashBoard/styleComponents";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import JoinInnerIcon from "@mui/icons-material/JoinInner";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, useNavigate } from "react-router-dom";

import SideBarLeft from "../common/sileBarLeft/sideBarLeft";
import { removeCar, updateHeartCar } from "../../api/api";
import axios from "axios";

const DashBoard = ({ dataCars }: any) => {
  const navigate = useNavigate();
  const cars = dataCars?.cars;
  const [types, setTypes] = useState();
  const [capacity, setCapacity] = useState();
  const [price, setPirce] = useState(0);
  const [filter, setFilter] = useState();
  const [heart, setHeart] = useState<string>();

  //  radio
  const [radio, setRadio] = useState("a");

  const handleChange = (event: any) => {
    setRadio(event.target.value);
  };

  //   select
  const [city, setCity] = useState("");

  const handleChangeCity = (event: any) => {
    setCity(event.target.value);
  };

  const handleUpdateHeart = async (id: any) => {
    const car = cars?.find((e: any) => e.id === id);
    car.heart = !car.heart;

    await updateHeartCar({
      carId: car?.id,
      heart: car.heart,
    });
  };

  const handleRemoveCar = async (id: any) => {
    navigate(-1);
    await removeCar(id);
  };

  const data = axios
    .get("http://localhost:8000/users")
    .then((response) => {
      const data = response.data;
      console.log(data);
      // Xử lý dữ liệu nhận được từ server ở đây
    })
    .catch((error) => {
      // Xử lý lỗi ở đây
    });

  // //   filter car
  // const filterCar = () => {
  //   let myType = [];
  //   let myCapacity = [];
  //   for (let i in types) {
  //     if (types[i] === true) {
  //       myType.push(i);
  //     }
  //   }
  //   for (let i in capacity) {
  //     if (capacity[i] === true) {
  //       myCapacity.push(i);
  //     }
  //   }
  //   let myData = [];

  //   if (myType.length > 0 || myCapacity.length > 0 || price > 0) {
  //     filter?.map((e) => {
  //       if (
  //         e.type.indexOf(myType) === 0 &&
  //         e.capacity.indexOf(myCapacity) === 0 &&
  //         e.price > price
  //       ) {
  //         myData.push(e);
  //       }
  //     });
  //     setCars(myData);
  //   } else {
  //     setCars(filter);
  //   }
  // };
  // useEffect(() => {
  //   filterCar();
  // }, [types, capacity, price]);

  return (
    <>
      <Grid container>
        <Grid
          item
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
          sm={3}
          md={2.5}
          lg={2}
          xl={1.5}
        >
          <SideBarLeft
          // setTypes={setTypes}
          // setCapacity={setCapacity}
          // setPrice={setPirce}
          />
        </Grid>
        <Grid item xs={12} sm={9} md={9.5} lg={10} xl={10.5}>
          <Box
            sx={{ flexGrow: 1, padding: "16px", backgroundColor: "#F6F7F9" }}
          >
            <Grid container spacing={2}>
              <FormBg>
                <FormBgLeft item xs={12} sm={12} md={12} lg={6}>
                  <Item>
                    <Grid container>
                      <Grid item xs={4}>
                        <FormControlLabel
                          value="best"
                          control={
                            <Radio
                              value="a"
                              checked={radio === "a"}
                              onChange={handleChange}
                              name="radio-buttons"
                            />
                          }
                          label="Pick-Up"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container columns={14}>
                          <Grid item xs={4}>
                            <Grid container>
                              <Grid item xs={12}>
                                <FormTitle>Locations</FormTitle>
                              </Grid>
                              <Grid item xs={12}>
                                <Box>
                                  <FormControl variant="standard" fullWidth>
                                    <FormSelect
                                      value={city}
                                      onChange={handleChangeCity}
                                      displayEmpty
                                      IconComponent={KeyboardArrowDownIcon}
                                    >
                                      <FormOption value="">
                                        Select your city
                                      </FormOption>
                                      <FormOption value="hanoi">
                                        Ha Noi
                                      </FormOption>
                                      <FormOption value="haiduong">
                                        Hai Duong
                                      </FormOption>
                                    </FormSelect>
                                  </FormControl>
                                </Box>
                              </Grid>
                            </Grid>
                          </Grid>
                          <FromDivider item xs={1}>
                            <Divider
                              sx={{ height: "100%" }}
                              orientation="vertical"
                            />
                          </FromDivider>
                          <Grid item xs={4}>
                            <Grid container>
                              <Grid item xs={12}>
                                <FormTitle>Date</FormTitle>
                              </Grid>
                              <Grid item xs={12}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDayjs}
                                >
                                  <DatePicker
                                    defaultValue={dayjs}
                                    disablePast
                                    components={{
                                      OpenPickerIcon: KeyboardArrowDownIcon,
                                    }}
                                  />
                                </LocalizationProvider>
                              </Grid>
                            </Grid>
                          </Grid>
                          <FromDivider item xs={1}>
                            <Divider
                              sx={{ height: "100%" }}
                              orientation="vertical"
                            />
                          </FromDivider>
                          <Grid item xs={4}>
                            <Grid container>
                              <Grid item xs={12}>
                                <FormTitle>Time</FormTitle>
                              </Grid>
                              <Grid item xs={12}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDayjs}
                                >
                                  <TimePicker label="Select your time" />
                                </LocalizationProvider>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Item>
                </FormBgLeft>
                <FormBgRight item xs={12} sm={12} md={12} lg={6}>
                  <Item>
                    <Grid container>
                      <Grid item xs={4}>
                        <FormControlLabel
                          value="best"
                          control={
                            <Radio
                              value="b"
                              checked={radio === "b"}
                              onChange={handleChange}
                              name="radio-buttons"
                            />
                          }
                          label="Drop-Off"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container columns={14}>
                          <Grid item xs={4}>
                            <Grid container>
                              <Grid item xs={12}>
                                <FormTitle>Locations</FormTitle>
                              </Grid>
                              <Grid item xs={12}>
                                <Box>
                                  <FormControl variant="standard" fullWidth>
                                    <Select
                                      value={city}
                                      onChange={handleChangeCity}
                                      displayEmpty
                                    >
                                      <FormOption value="">
                                        Select your city
                                      </FormOption>
                                      <FormOption value="hanoi">
                                        Ha Noi
                                      </FormOption>
                                      <FormOption value="haiduong">
                                        Hai Duong
                                      </FormOption>
                                    </Select>
                                  </FormControl>
                                </Box>
                              </Grid>
                            </Grid>
                          </Grid>
                          <FromDivider item xs={1}>
                            <Divider
                              sx={{ height: "100%" }}
                              orientation="vertical"
                            />
                          </FromDivider>
                          <Grid item xs={4}>
                            <Grid container>
                              <Grid item xs={12}>
                                <FormTitle>Date</FormTitle>
                              </Grid>
                              <Grid item xs={12}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDayjs}
                                >
                                  <DatePicker
                                    defaultValue={dayjs}
                                    disablePast
                                    components={{
                                      OpenPickerIcon: KeyboardArrowDownIcon,
                                    }}
                                  />
                                </LocalizationProvider>
                              </Grid>
                            </Grid>
                          </Grid>
                          <FromDivider item xs={1}>
                            <Divider
                              sx={{ height: "100%" }}
                              orientation="vertical"
                            />
                          </FromDivider>
                          <Grid item xs={4}>
                            <Grid container>
                              <Grid item xs={12}>
                                <FormTitle>Time</FormTitle>
                              </Grid>
                              <Grid item xs={12}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDayjs}
                                >
                                  <TimePicker label="Select your time" />
                                </LocalizationProvider>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Item>
                </FormBgRight>
                <FormSwap item xs={12}>
                  <Box sx={{ zIndex: 3 }}>
                    <ButtonICon>
                      <SwapVertIcon />
                    </ButtonICon>
                  </Box>
                </FormSwap>
              </FormBg>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {cars &&
                    cars?.map((item: any) => {
                      return (
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={6}
                          lg={4}
                          xl={3}
                          sx={{ display: "flex" }}
                        >
                          <FormCar>
                            <Grid container>
                              <Grid item xs={8}>
                                <Grid container>
                                  <Grid item xs={12}>
                                    <FormNameCar
                                      sx={{
                                        fontSize: {
                                          xs: "22px",
                                          sm: "22px",
                                          md: "22px",
                                          lg: "22px",
                                          xl: "22px",
                                        },
                                      }}
                                    >
                                      {item?.name}
                                    </FormNameCar>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <FormtypeCar
                                      sx={{
                                        fontSize: {
                                          xs: "16px",
                                          sm: "16px",
                                          md: "16px",
                                          lg: "16px",
                                          xl: "16px",
                                        },
                                      }}
                                    >
                                      {item?.properties}
                                    </FormtypeCar>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item xs={4}>
                                <Grid container>
                                  <Grid item xs={8}></Grid>
                                  <Grid item xs={4}>
                                    <IconButton
                                      onClick={() => {
                                        setHeart(item.heart);
                                        handleUpdateHeart(item?.id);
                                      }}
                                    >
                                      {item.heart ? (
                                        <FavoriteIcon
                                          sx={{ color: "#ED3F3F" }}
                                        />
                                      ) : (
                                        <FavoriteBorderIcon />
                                      )}
                                    </IconButton>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <FromImage item xs={8} md={12}>
                                <img
                                  src={item?.image}
                                  alt="error"
                                  width="100%"
                                />
                              </FromImage>
                              <Grid
                                item
                                xs={4}
                                md={12}
                                sx={{
                                  display: "flex",
                                  paddingLeft: {
                                    xs: "24px",
                                    md: "0",
                                  },
                                }}
                              >
                                <Grid container>
                                  <FromButton item xs={12} md={4}>
                                    <LocalGasStationIcon
                                      sx={{
                                        color: "#90A3BF",
                                        alignSelf: "center",
                                        width: {
                                          xs: "20px",
                                          sm: "20px",
                                          md: "18px",
                                          lg: "18px",
                                          xl: "18px",
                                        },
                                      }}
                                    />
                                    <FromIconContent
                                      sx={{
                                        marginLeft: "5px",
                                        fontSize: {
                                          xs: "18px",
                                          sm: "18px",
                                          md: "16px",
                                          lg: "16px",
                                          xl: "16px",
                                        },
                                      }}
                                    >{`${item?.fuel}L`}</FromIconContent>
                                  </FromButton>
                                  <FromButton item xs={12} md={4}>
                                    <JoinInnerIcon
                                      sx={{
                                        color: "#90A3BF",
                                        alignSelf: "center",
                                        width: {
                                          xs: "20px",
                                          sm: "20px",
                                          md: "18px",
                                          lg: "18px",
                                          xl: "18px",
                                        },
                                      }}
                                    />
                                    <FromIconContent
                                      sx={{
                                        marginLeft: "5px",
                                        fontSize: {
                                          xs: "18px",
                                          sm: "18px",
                                          md: "16px",
                                          lg: "16px",
                                          xl: "16px",
                                        },
                                      }}
                                    >
                                      {item?.driving_mode}
                                    </FromIconContent>
                                  </FromButton>
                                  <FromButton item xs={12} md={4}>
                                    <PeopleAltIcon
                                      sx={{
                                        color: "#90A3BF",
                                        alignSelf: "center",
                                        width: {
                                          xs: "20px",
                                          sm: "20px",
                                          md: "18px",
                                          lg: "18px",
                                          xl: "18px",
                                        },
                                      }}
                                    />
                                    <FromIconContent
                                      sx={{
                                        marginLeft: "5px",
                                        fontSize: {
                                          xs: "18px",
                                          sm: "18px",
                                          md: "16px",
                                          lg: "16px",
                                          xl: "16px",
                                        },
                                      }}
                                    >{`${item?.seats} People`}</FromIconContent>
                                  </FromButton>
                                </Grid>
                              </Grid>
                              <Grid item xs={12} sx={{ paddingTop: "16px" }}>
                                <Grid container>
                                  <FormControlPrice item xs={6}>
                                    <Grid container>
                                      <Grid
                                        item
                                        xs={12}
                                        sx={{ display: "flex" }}
                                      >
                                        <FormPriceContent
                                          sx={{
                                            fontSize: {
                                              xs: "24px",
                                              sm: "24px",
                                              md: "22px",
                                            },
                                          }}
                                        >
                                          {`$${item?.price}.00/`}
                                        </FormPriceContent>
                                        <FromIconContent
                                          sx={{
                                            fontSize: {
                                              xs: "20px",
                                              sm: "20px",
                                              md: "18px",
                                            },
                                          }}
                                        >
                                          day
                                        </FromIconContent>
                                      </Grid>
                                      {item?.cost > item?.price ? (
                                        <Grid item xs={12}>
                                          <FormDel
                                            sx={{
                                              fontSize: {
                                                xs: "24px",
                                                sm: "24px",
                                                md: "22px",
                                              },
                                            }}
                                          >
                                            {`${item?.cost}.00`}
                                          </FormDel>
                                        </Grid>
                                      ) : (
                                        <Grid></Grid>
                                      )}
                                    </Grid>
                                  </FormControlPrice>
                                  <FormButton item xs={6}>
                                    <Link to={`/details/${item.id}`}>
                                      <Button
                                        variant="contained"
                                        sx={{
                                          textTransform: "none",
                                          height: "fit-content",
                                        }}
                                      >
                                        Rent Now
                                      </Button>
                                    </Link>
                                  </FormButton>
                                  <FormButton
                                    item
                                    xs={12}
                                    sx={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Button
                                      sx={{
                                        textTransform: "none",
                                        height: "fit-content",
                                        color: "red",
                                      }}
                                      onClick={() => {
                                        handleRemoveCar(item.id);
                                      }}
                                    >
                                      remove
                                    </Button>
                                  </FormButton>
                                </Grid>
                              </Grid>
                            </Grid>
                          </FormCar>
                        </Grid>
                      );
                    })}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default DashBoard;
