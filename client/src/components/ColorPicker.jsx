import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
        presetColors={[
          "#000000",
          "#FFFFFF",
          "#000080",
          "#FF0000",
          "#4169E1",
          "#808080",
          "#008000",
          "#800000",
          "#800080",
          "#228B22",
          "#FFA500",
          "#36454F",
        ]}
      />
    </div>
  );
};

export default ColorPicker;
