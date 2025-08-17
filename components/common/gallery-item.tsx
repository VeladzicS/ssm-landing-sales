import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryItemProps {
  ref?: any;
  src?: any;
  alt?: string;
  className?: string;
  showArrow?: boolean;
  arrowIcon?: any;
  isPlaceholder?: boolean;
  onClick?: () => void;
}

export function GalleryItem({
  ref,
  src,
  alt = "",
  className,
  showArrow = false,
  arrowIcon,
  isPlaceholder = false,
  onClick,
}: GalleryItemProps) {
  if (isPlaceholder) {
    return (
      <div
        className={cn(
          "group relative h-full w-full cursor-pointer overflow-hidden rounded-lg",
          className,
        )}
      >
        <div className="h-full w-full animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
        {showArrow && (
          <div className="absolute right-0 bottom-0 flex h-[30px] w-[34px] items-center justify-center bg-gray-200 lg:h-[40px] lg:w-[44px]">
            <div className="h-[16px] w-[15px] bg-gray-300 lg:h-[20px] lg:w-[21px]" />
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn(
        "group relative h-full w-full cursor-pointer overflow-hidden rounded-lg",
        className,
      )}
      onClick={onClick}
    >
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}

      {showArrow && arrowIcon && (
        <div className="bg-mainAlt absolute right-0 bottom-0 flex h-[30px] w-[34px] items-center justify-center lg:h-[40px] lg:w-[44px]">
          {arrowIcon}
        </div>
      )}
    </div>
  );
}
