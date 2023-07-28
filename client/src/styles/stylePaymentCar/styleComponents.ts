import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import { FormControlLabel, InputBase, Typography } from "@mui/material";

export const FormPayment = styled(Box)({
  background: "#FFFF",
  padding: "16px",
  borderRadius: "10px",
  marginBottom: "16px",
});
export const FormContent = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export const FormTitlePayment = styled(Typography)({
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  color: "#1A202C",
  flex: "none",
  order: 0,
  flexGrow: 0,
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "25px",
  display: "flex",
  alignItems: "center",
});

export const FormContentPayment = styled(Typography)({
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  color: "#90A3BF",
  flex: "none",
  order: 1,
  flexGrow: 0,
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "18px",
  display: "flex",
  alignItems: "center",
  textAlign: "start",
});

export const FormTitleInput = styled(Typography)({
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  color: "#1A202C",
  flex: "none",
  order: 0,
  flexGrow: 0,
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "120%",
  display: "flex",
  alignItems: "center",
});

export const FormInput = styled(InputBase)({
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  color: "#1A202C",
  border: "none",
  padding: "16px 32px",
  background: "#F6F7F9",
  borderRadius: "10px",
  width: "100%",
});

export const FormTitleRadio = styled(FormControlLabel)({
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  color: "#1A202C",
  flex: "none",
  order: 0,
  flexGrow: 0,
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "20px",
  letterSpacing: "-0.02em",
  display: "flex",
  alignItems: "center",
});

export const FormLabelCheckbox = styled(Typography)({
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  color: "#1F2544",
  flex: "none",
  order: 0,
  flexGrow: 0,
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "120%",
  display: "flex",
  alignItems: "center",
});

export const NameCar = styled(Typography)({
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  color: "#1A202C",
  flex: "none",
  order: 0,
  flexGrow: 0,
  fontWeight: 700,
  fontSize: "32px",
  lineHeight: "140%",
  display: "flex",
  alignItems: "center",
});

export const PricePayment = styled(Typography)({
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  color: "#1A202C",
  flex: "none",
  order: 1,
  flexGrow: 0,
  fontWeight: 700,
  fontSize: "32px",
  lineHeight: "40px",
  display: "flex",
  alignItems: "center",
  textAlign: "right",
  height: "100%",
  justifyContent: "flex-end",
});
export const FormDiscountCode = styled(Box)({
  background: "#F6F7F9",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
