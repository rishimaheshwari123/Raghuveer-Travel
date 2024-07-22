import React from "react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { IconPhone } from "@tabler/icons-react";

function Whatsapp() {
  return (
    <div className="btn-pink">
      <a
        href="https://wa.me/919993186451"
        target="_blank"
        className="flex items-center gap-2"
      >
        <IconBrandWhatsapp size={30} /> Book Now{" "}
      </a>
    </div>
  );
}

export default Whatsapp;
