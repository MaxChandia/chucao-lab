"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

const ShareButtons = ({title}:{title:string}) => {
    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentUrl(window.location.href);
        }
    }, []);
  return (
   <div className="px-5">
      <h2 className="font-bold mr-2">Compartir en:</h2>
      <div className="flex gap-4 mt-2">
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`} aria-label="Compartir en Facebook" >
          <FontAwesomeIcon icon={faFacebook} className="text-[25px]"/>
        </a>
        <a href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${title}`} aria-label="Compartir en Twitter">
          <FontAwesomeIcon icon={faXTwitter} className="text-[25px]"/>
        </a>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`} aria-label="Compartir en LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} className="text-[25px]"/>
        </a>
        <a href={`https://api.whatsapp.com/send?text=${title} ${currentUrl}`} aria-label="Compartir en WhatsApp">
          <FontAwesomeIcon icon={faWhatsapp} className="text-[25px]"/>
        </a>
      </div>
    </div>
  );
}

export default ShareButtons;