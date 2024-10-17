import * as React from "react";

type checkBoxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

export default function Checkbox({ label, checked, onChange }: checkBoxProps) {
  // const [ischecked, setChecked] = React.useState(checked);
  return (
    <div className=" flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange ={onChange}
      ></input>
      <label>{label}</label>
    </div>
  );
}
