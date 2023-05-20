import React from "react";
import SecondatyGradientButton from "../secondaryGrandientButton";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
export default function CreateAccountButton() {
  return (
    <SecondatyGradientButton text="Criar conta" icon={<AddBoxOutlinedIcon />} />
  );
}
