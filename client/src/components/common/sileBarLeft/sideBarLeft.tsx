import {
  Box,
  Checkbox,
  FormControl,
  FormGroup,
  FormLabel,
  Slider,
} from "@mui/material";
import { useState } from "react";
import {
  FormContent,
  FormSideBarLeft,
  FormControlLabelCheckBox,
  FormSlider,
} from "../../../styles/stylesSideBarLeft/stylesComponents";

function SideBarLeft() {
  const [state, setState] = useState({
    sport: false,
    suv: false,
    mpv: false,
    sedan: false,
    coupe: false,
    hatchback: false,
  });

  const [capacity, setCapacity] = useState({
    person_2: false,
    person_4: false,
    person_6: false,
    person_8: false,
  });
  const [price, setPrice] = useState(0);

  const handleChange = (event: any) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChangeCapacity = (event: any) => {
    setCapacity({
      ...capacity,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangePrice = (event: any) => {
    setPrice(event.target.value);
  };

  const { sport, suv, mpv, sedan, coupe, hatchback } = state;
  const { person_2, person_4, person_6, person_8 } = capacity;
  // setTypes.setTypes(state);
  // setTypes.setCapacity(capacity);
  // setTypes.setPrice(price);
  return (
    <>
      <FormSideBarLeft>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormContent>TYPE</FormContent>
          <FormGroup>
            <FormControlLabelCheckBox
              control={
                <Checkbox
                  checked={sport}
                  onChange={handleChange}
                  name="sport"
                />
              }
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
              label="Sport"
            />
            <FormControlLabelCheckBox
              control={
                <Checkbox checked={suv} onChange={handleChange} name="suv" />
              }
              label="SUV"
            />
            <FormControlLabelCheckBox
              control={
                <Checkbox checked={mpv} onChange={handleChange} name="mpv" />
              }
              label="MPV"
            />
            <FormControlLabelCheckBox
              control={
                <Checkbox
                  checked={sedan}
                  onChange={handleChange}
                  name="sedan"
                />
              }
              label="Sedan"
            />
            <FormControlLabelCheckBox
              control={
                <Checkbox
                  checked={coupe}
                  onChange={handleChange}
                  name="coupe"
                />
              }
              label="Coupe"
            />
            <FormControlLabelCheckBox
              control={
                <Checkbox
                  checked={hatchback}
                  onChange={handleChange}
                  name="hatchback"
                />
              }
              label="Hatchback"
            />
          </FormGroup>
        </FormControl>
      </FormSideBarLeft>

      <FormSideBarLeft>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormContent>CAPACITY</FormContent>
          <FormGroup>
            <FormControlLabelCheckBox
              control={
                <Checkbox
                  checked={person_2}
                  onChange={handleChangeCapacity}
                  name="person_2"
                />
              }
              label="2Person"
            />
            <FormControlLabelCheckBox
              control={
                <Checkbox
                  checked={person_4}
                  onChange={handleChangeCapacity}
                  name="person_4"
                />
              }
              label="4Person"
            />
            <FormControlLabelCheckBox
              control={
                <Checkbox
                  checked={person_6}
                  onChange={handleChangeCapacity}
                  name="person_6"
                />
              }
              label="6Person"
            />
            <FormControlLabelCheckBox
              control={
                <Checkbox
                  checked={person_8}
                  onChange={handleChangeCapacity}
                  name="person_8"
                />
              }
              label="8Person"
            />
          </FormGroup>
        </FormControl>
      </FormSideBarLeft>
      <FormSideBarLeft>
        <FormControl
          sx={{ m: 3 }}
          component="fieldset"
          variant="standard"
          style={{ width: "100%" }}
        >
          <FormContent>PRICE</FormContent>
          <FormSlider
            defaultValue={0}
            max={10000}
            onChange={handleChangePrice}
            valueLabelDisplay="auto"
          />
          <FormLabel>Max. $100.00</FormLabel>
        </FormControl>
      </FormSideBarLeft>
    </>
  );
}
export default SideBarLeft;
