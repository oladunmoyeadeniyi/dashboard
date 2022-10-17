import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import { useState } from "react";
import { Header } from "../components";

const ColorPicker = () => {
  const [backgroundColor, setBackgroundColor] = useState("");
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Color Picker" />

      <div className="text-center">
        <div id="preview" style={{ backgroundColor }} />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={(e) => setBackgroundColor(e.currentValue.hex)}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={(e) => setBackgroundColor(e.currentValue.hex)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
