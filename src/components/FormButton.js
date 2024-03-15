import { Button } from "@material-tailwind/react";
import React from "react";

function FormButton({ value, inputValue, onClick }) {
  console.log(inputValue);
  return (
    <div>
      <Button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
        size="lg"
        type="button"
        value={value}
        onClick={onClick}
        children={undefined}
        placeholder={undefined}
      >
        {value}
      </Button>
    </div>
  );
}

export default FormButton;
