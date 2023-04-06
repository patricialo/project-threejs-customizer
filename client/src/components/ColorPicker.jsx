import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#e6e7e0",
          "#F6DFCF",
          "#d75f6d",
          "#ec468e",
          "#5D1D39",
          "#4E333E",
          "#a2f5df",
          "#86E2E0",
          "#fcbd60",
          "#c3cb2b",
          "#9ea6e7",
          "#014be0",
        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker