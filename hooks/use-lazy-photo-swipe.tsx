import { useState, useEffect } from "react";
import useLazyLoad from "@/hooks/use-lazy-load";

let cssLoaded = false;

export function useLazyPhotoSwipe() {
  const { ref, isInView } = useLazyLoad();
  const [GalleryComponent, setGalleryComponent] = useState<any>(null);
  const [ItemComponent, setItemComponent] = useState<any>(null);

  useEffect(() => {
    if (isInView && !cssLoaded) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/styles/node_modules/photoswipe/dist/photoswipe.css";
      document.head.appendChild(link);
      cssLoaded = true;
    }
  }, [isInView]);

  useEffect(() => {
    if (isInView && !GalleryComponent) {
      import("react-photoswipe-gallery").then((module) => {
        setGalleryComponent(() => module.Gallery);
        setItemComponent(() => module.Item);
      });
    }
  }, [isInView, GalleryComponent]);

  return { ref, GalleryComponent, ItemComponent, isLoaded: !!GalleryComponent };
}
