import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-neutral-50 py-16">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-4 md:mb-0">
          <Image
            src="/logos/logo1.png"
            alt="Footer Logo"
            width={300}
            height={300}
          />
          <Link href="https://www.instagram.com/fitnesspro_ua/">
            <FaInstagram className="w-10 h-10" />
          </Link>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0 flex flex-col gap-2">
          <a href="mailto:test.mail@gmail.com" className="block">
            lf.body.update@gmail.com
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
      <div className="container flex justify-center pt-4">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Всі права захищені
        </p>
      </div>
    </footer>
  );
}

export default Footer;
