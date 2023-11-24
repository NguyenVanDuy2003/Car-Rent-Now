import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import {
  FormLabel,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export const Item = styled(Box)({
  background: "#ffff",
  padding: "16px",
  borderRadius: "10px",
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  color: "#1A202C",
  flex: "none",
  order: 1,
  flexGrow: 0,
});

export const FormTitle = styled(Box)({
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  color: "#1A202C",
  flex: "none",
  order: 1,
  flexGrow: 0,
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "120%",
  display: "flex",
  alignItems: "center",
});

export const FormOption = styled(MenuItem)({
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  color: "#90A3BF",
  flex: "none",
  order: 1,
  flexGrow: 0,
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "200%",
  display: "flex",
  alignItems: "center",
});

export const FormSelect = styled(Select)({
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  color: "#90A3BF",
  flex: "none",
  order: 1,
  flexGrow: 0,
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "200%",
  display: "flex",
  alignItems: "center",
});
export const FormBg = styled(Box)({
  display: "flex",
  width: "100%",
  position: "relative",
  flexWrap: "wrap",
});
export const FormBgLeft = styled(Grid)({
  padding: "16px 0 0 16px",
  zIndex: 2,
});
export const FormBgRight = styled(Grid)({
  padding: "16px 0 0 16px",
  zIndex: 2,
});
export const FormSwap = styled(Grid)({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  width: "-webkit-fill-available",
  padding: "16px 0 0 16px",
  height: "100%",
  alignItems: "center",
});

export const ButtonICon = styled(IconButton)({
  background: "#3563E9",
  borderRadius: "10px",
  padding: "10px",
  position: "relative",
});
export const FromButton = styled(Grid)({
  display: "flex",
});
export const FromImage = styled(Grid)({
  margin: "52px 0",
});

export const FromIconContent = styled(FormLabel)({
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  color: "#90A3BF",
  flex: "none",
  order: 1,
  flexGrow: 0,
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "200%",
  display: "flex",
  alignItems: "center",
});

export const FormControlPrice = styled(Grid)({
  display: "flex",
  alignItems: "center",
});
export const FormButton = styled(Grid)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const FormPriceContent = styled(FormLabel)({
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  color: "#1A202C",
  flex: "none",
  order: 1,
  flexGrow: 0,
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "25px",
  display: "flex",
  alignItems: "center",
});
export const FromDivider = styled(Grid)({
  display: "flex",
  justifyContent: "center",
});
export const FormCar = styled(Box)({
  background: "#ffff",
  padding: "16px",
  borderRadius: "10px",
  display: "flex",
  alignSelf: "stretch",
});

export const FormDel = styled(Typography)({
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  color: "#90A3BF",
  flex: "none",
  order: 1,
  flexGrow: 0,
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "25px",
  display: "flex",
  alignItems: "center",
  textDecorationLine: "line-through",
});

export const FormNameCar = styled(Typography)({
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  color: "#1A202C",
  flex: "none",
  order: 1,
  flexGrow: 0,
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "25px",
  display: "flex",
  alignItems: "center",
});
export const FormtypeCar = styled(Typography)({
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  color: "#90A3BF",
  flex: "none",
  order: 1,
  flexGrow: 0,
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "25px",
  display: "flex",
  alignItems: "center",
});
