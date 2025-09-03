"use client";
import { currentSalesperson } from "@/lib/data";
import { useEffect } from "react";
declare global {
  interface Window {
    jotformEmbedHandler?: (selector: string, baseUrl: string) => void;
  }
}
export default function Contact() {
  const person = currentSalesperson;

  useEffect(() => {
    // Load JotForm embed handler script
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;

    script.onload = () => {
      // Initialize JotForm embed handler after script loads
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-252434879367067']",
          "https://form.jotform.com/",
        );
      }
    };

    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleIframeLoad = () => {
    // Scroll to top when iframe loads
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <section className="container mx-auto">
      <div className="px-4 py-[30px] lg:py-[60px]">
        <div className="mx-auto flex flex-col gap-8 md:flex-row md:gap-20">
          <div className="flex flex-1 flex-col gap-3 leading-7 text-[#5a5a67]">
            <h2 className="text-clamp-md text-main text-3xl">
              Interested in partnership with {person.firstName}
            </h2>
            <p className="text-clamp-xs font-body leading-7 tracking-wider">
              We are always excited to explore new opportunities and collaborate
              with innovative partners. {person.firstName} is dedicated to
              fostering mutually beneficial relationships that drive growth and
              success for all parties involved.
            </p>
          </div>
          <div className="flex-1">
            <iframe
              id="JotFormIFrame-252434879367067"
              onLoad={handleIframeLoad}
              allow="geolocation; microphone; camera; fullscreen; payment"
              src="https://form.jotform.com/252434879367067"
              frameBorder="0"
              style={{
                minWidth: "100%",
                maxWidth: "100%",
                height: "539px",
                border: "none",
              }}
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
