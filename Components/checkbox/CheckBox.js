import { useEffect, useState } from "react";

import { Radio } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import classes from "./Checkbox.module.css";

export default function RadioButtonsGroup({ hanldeLanguage }) {
  const [choosedLanguage, setChoosedLanguage] = useState("");

  useEffect(() => {
    setChoosedLanguage(localStorage.getItem("choosed_language"));
  }, []);

  return (
    <FormControl
      component="fieldset"
      className={classes.formControl}
      onChange={hanldeLanguage}
    >
      {/* <FormLabel component="legend">ენა</FormLabel> */}
      <RadioGroup
        className={classes.radioGrooup}
        aria-label=""
        name="radio-buttons-group"
        value={choosedLanguage ? choosedLanguage : "ka"}
        defaultChecked={choosedLanguage ? choosedLanguage : "ka"}
        defaultValue={choosedLanguage ? choosedLanguage : "ka"}
      >
        <FormControlLabel
          value="ka"
          control={<Radio />}
          label="ქართული"
          className={classes.checkbox}
        />

        <FormControlLabel
          value="en"
          control={<Radio />}
          label="English"
          className={classes.checkbox}
        />
        <FormControlLabel
          value="rus"
          control={<Radio />}
          label="Russia"
          className={classes.checkbox}
        />
      </RadioGroup>
    </FormControl>
  );
}
