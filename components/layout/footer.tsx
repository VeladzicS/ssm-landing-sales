import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4 py-[30px] lg:py-[60px]">
        <div className="flex items-center justify-center pb-5">
          <Image
            src="/ssm-logo.png"
            alt="dogs"
            width={245}
            height={82}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col items-center justify-between border-t-1 border-black/30 pt-5 lg:flex-row">
          <ul className="flex flex-col items-center gap-2 sm:flex-row">
            <li>
              <a
                href="https://showsightmagazine.com/"
                className="hover:text-main uppercase transition-colors"
              >
                Showsight
              </a>
            </li>
            <li>
              <a
                href="https://showsightmagazine.com/showsight-express/"
                className="hover:text-main uppercase transition-colors"
              >
                Showsight Express
              </a>
            </li>
            <li>
              <a
                href="https://topnotchtoys.com/"
                className="hover:text-main t uppercase transition-colors"
              >
                Top Notch Toys
              </a>
            </li>
          </ul>
          <p className="lg:text-righ pt-4 text-center lg:pt-0">
            Copyright © SHOWSIGHT Magazine 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
