"use client";
import { useLazyPhotoSwipe } from "@/hooks/use-lazy-photo-swipe";
import { GalleryItem } from "@/components/common/gallery-item";
import { FaArrowRight } from "react-icons/fa6";

// Reordered images with portrait first
const galleryImages = [
  {
    id: 1,
    src: "/gallery/Barrow.jpg",
    width: 1200,
    height: 788,
    alt: "Barrow",
  },
  {
    id: 2,
    src: "/gallery/Bitz.jpg",
    width: 1200,
    height: 788,
    alt: "Bitz",
  },
  {
    id: 3,
    src: "/gallery/Bitz2.jpg",
    width: 1200,
    height: 788,
    alt: "Bitz 2",
  },
  {
    id: 4,
    src: "/gallery/Cashin Brussels Kennel.jpg",
    width: 1200,
    height: 782,
    alt: "Cashin Brussels Kennel",
  },
  {
    id: 5,
    src: "/gallery/Cashin Schnauzer.jpg",
    width: 1200,
    height: 788,
    alt: "Cashin Schnauzer",
  },
  {
    id: 7,
    src: "/gallery/Frischmann Book.jpg",
    width: 1200,
    height: 1564,
    alt: "Frischmann Book",
  },
  {
    id: 6,
    src: "/gallery/Fleischaker.jpg",
    width: 1200,
    height: 788,
    alt: "Fleischaker",
  },
];

export default function Gallery() {
  const {
    ref: mainRef,
    GalleryComponent,
    ItemComponent,
    isLoaded,
  } = useLazyPhotoSwipe();
  const gridConfig = [
    {
      grid: "col-span-12 row-span-2 xl:col-span-8 bg-red",
      item: "h-[280px] rounded-tl-3xl sm:h-[400px] lg:h-[500px] xl:h-[580px]",
      arrow: true,
    },
    {
      grid: "col-span-6 row-span-1 xl:col-span-2",
      item: "h-[190px] xl:h-full",
      arrow: false,
    },
    {
      grid: "col-span-6 row-span-1 xl:col-span-2",
      item: "h-[190px] xl:h-full",
      arrow: false,
    },
    {
      grid: "col-span-6 row-span-1 xl:col-span-2",
      item: "h-[190px] xl:h-full",
      arrow: false,
    },
    {
      grid: "col-span-6 row-span-1 xl:col-span-2",
      item: "h-[190px] xl:h-full",
      arrow: false,
    },
  ];
  return (
    <section ref={mainRef} className="bg-gray-50 px-4">
      <div className="container mx-auto py-[30px] lg:py-[60px]">
        <h2 className="text-clamp-md text-main mb-8 text-center text-3xl">
          Gallery
        </h2>
        {isLoaded ? (
          <GalleryComponent
            withCaption
            options={{
              showHideAnimationType: "zoom",
              bgOpacity: 0.9,
              spacing: 0.1,
              allowPanToNext: false,
              loop: true,
              pinchToClose: true,
              closeOnVerticalDrag: true,
            }}
          >
            <div className="gallery-grid grid grid-cols-12 gap-[12.5px] lg:gap-[20px] xl:grid-rows-2">
              {gridConfig.map((config, index) => {
                const image = galleryImages[index];
                return (
                  <div key={index} className={config.grid}>
                    <ItemComponent
                      original={image.src}
                      thumbnail={image.src}
                      width={image.width}
                      height={image.height}
                      alt={image.alt}
                    >
                      {({ ref, open }: { ref: any; open: any }) => (
                        <GalleryItem
                          ref={ref}
                          src={image.src}
                          alt={image.alt}
                          className={config.item}
                          showArrow={config.arrow}
                          arrowIcon={
                            config.arrow ? <FaArrowRight /> : undefined
                          }
                          onClick={open}
                        />
                      )}
                    </ItemComponent>
                  </div>
                );
              })}

              {/* Hidden images for navigation */}
              {galleryImages.slice(5).map((image, index) => (
                <div key={`hidden-${index}`} className="hidden">
                  <ItemComponent
                    original={image.src}
                    thumbnail={image.src}
                    width={image.width}
                    height={image.height}
                    alt={image.alt}
                  >
                    {({ ref, open }: { ref: any; open: any }) => (
                      <div ref={ref} onClick={open} />
                    )}
                  </ItemComponent>
                </div>
              ))}
            </div>
          </GalleryComponent>
        ) : (
          <div className="gallery-grid grid grid-cols-12 grid-rows-4 gap-[12.5px] lg:gap-[20px] xl:grid-rows-2">
            {gridConfig.map((config, index) => (
              <div key={index} className={config.grid}>
                <GalleryItem
                  isPlaceholder
                  className={config.item}
                  showArrow={config.arrow}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
