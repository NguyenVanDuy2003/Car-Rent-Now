import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

export const FormHeader = styled(Grid)({
  background: "#ffffff",
  borderBottom: "1px solid rgba(195, 212, 233, 0.4)",
  
});

export const FormSearch = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "100%",
  border: "1px solid rgba(195, 212, 233, 0.4)",
  borderRadius: "70px",
  minWidth:"160px",
  maxWidth:"500px"
});

export const FormLogo = styled(Grid)({
  alignSelf: "center",
});

export const FormButton = styled(Grid)({
  display:"flex",
  justifyContent:"center"
});

