import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import {
  FormLabel,
  FormControlLabel,
  Slider,
} from "@mui/material";

export const FormSideBarLeft = styled(Box)({
  display: "flex",
  color: "#3D5278",
  // borderRight: "1px solid rgba(195, 212, 233, 0.4)",
  backgroundColor: "#FFFFFF",
  minWidth: "160px",
});

export const FormContent = styled(FormLabel)({
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "12px",
  color: "#94A7CB",
  lineHeight: "150%",
});

export const FormControlLabelCheckBox = styled(FormControlLabel)({
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "150%",
});
export const FormSlider = styled(Slider)({
  width: "100%",
});
