import React, { useContext } from "react";
import AddItem from "../AddItem";
import AlertContext from "../../context/AlertContext";

const SwitchBoard = () => {
  const [getAlertType, setAlertType] = useContext(AlertContext);
  console.log(getAlertType);

  const toast = event => {
    event.preventDefault();
    setAlertType("toaster");
  };

  return (
    <div className="buttons">
      <AddItem clicked={toast}>Toast</AddItem>
      <AddItem>Bar</AddItem>
      <AddItem>Push</AddItem>
      <AddItem>Banner</AddItem>
    </div>
  );
};

export default SwitchBoard;
