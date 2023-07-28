import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import { FormLabel, Grid } from "@mui/material";

export const FormFooter = styled(Box)({
  flexGrow: 1,
  margin: "40px 32px",
  backgroundColor: "#FFFFFF",
});

export const FormContent = styled(Grid)({
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "200%",
  color: "rgba(19, 19, 19, 0.6)",
});
export const FormTitle = styled(Grid)({
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "120%",
  display: "flex",
  alignItems: "center",
  color: "#131313",
  mixBlendMode: "normal",
});
export const FormContent2 = styled(Grid)({
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "200%",
  display: "flex",
  alignItems: "center",
  color: "#131313",
  mixBlendMode: "normal",
  letterSpacing: "-0.01em",
});
