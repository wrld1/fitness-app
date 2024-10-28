import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-neutral-50 py-16">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex items-center mb-4 md:mb-0 ">
          <h4 className="text-2xl font-bold mr-2">FitnessPro</h4>
          <Link href="https://www.instagram.com/fitnesspro_ua/">
            <FaInstagram className="w-10 h-10" />
          </Link>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0 flex flex-col gap-2">
          <a href="tel:+380404567223" className="block">
            +38 (040) 456 72 23
          </a>
          <a href="mailto:test.mail@gmail.com" className="block">
            test.mail@gmail.com
          </a>
        </div>
        <div className="text-center md:text-left flex flex-col gap-2">
          <Link href="/privacy-policy" className="hover:underline">
            Політика конфіденційності
          </Link>
          <Link href="/public-offer" className="hover:underline">
            Публічна оферта
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
