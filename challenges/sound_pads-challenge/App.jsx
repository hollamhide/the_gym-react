import React from "react";
import padsData from "./pads";
import Pad from "./Pad";

export default function App() {
  const [pads, setPads] = React.useState(padsData);

  function toggle(id) {
    // map over the pads array, and if the current item has
    // the same id as the one passed to this function, then
    // flip its `on` value.
    setPads((prevPads) =>
      prevPads.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      }),
    );
  }

  const buttonElements = pads.map((pad) => (
    <Pad
      key={pad.id}
      toggle={toggle}
      id={pad.id}
      color={pad.color}
      on={pad.on}
    />
  ));

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}
