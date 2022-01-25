import React from "react";

function Specials() {
  return (
    <div className="p-bkgd flex-center padding-2">
      <h1>THEATER SPECIALS</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
        <section style={{ maxWidth: "40%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur magna non odio blandit hendrerit. Fusce non leo sit amet neque consequat luctus. Sed blandit fermentum congue. Sed sit amet interdum diam. Cras et pretium tortor.
        </section>
        <section style={{ maxWidth: "40%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur magna non odio blandit hendrerit. Fusce non leo sit amet neque consequat luctus. Sed blandit fermentum congue. Sed sit amet interdum diam. Cras et pretium tortor.
        </section>
      </div>
    </div>
  );
}

export default Specials;