import React from "react";
// import { IconBrandWhatsapp } from "@tabler/icons-react";
import { IconPhone } from "@tabler/icons-react";

function Call() {
  return (
    <div className="btn-pinkk">
      <a
        href="tel:+919993186451"
        className="flex items-center gap-2 text-black font-bold"
      >
        <IconPhone className="" />{" "}
      </a>
    </div>
  );
}

export default Call;
