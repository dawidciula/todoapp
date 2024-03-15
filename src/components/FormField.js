import { Textarea } from "@material-tailwind/react";
import React from "react";

function FormField({ label, value, onChange }) {
    return (
        <div className="my-10">
            <label className="text-xl">{label}</label>
            <Textarea
            className="w-96"
                // type="text"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default FormField;
