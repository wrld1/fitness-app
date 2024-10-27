import NumberTicker from "@/components/ui/number-ticker";
import SparklesText from "@/components/ui/sparkles-text";
import Image from "next/image";

export default function AboutMeSection() {
  return (
    <div className="px-8 py-12 bg-neutral-50 w-full">
      <div className="container flex items-center justify-between">
        <div className="w-1/3">
          <Image
            src="/images/about-me.jpg"
            alt="About Me Image"
            className="rounded-full shadow-lg object-cover"
            width={425}
            height={425}
            style={{ aspectRatio: "1 / 1" }}
          />
        </div>
        <div className="w-2/3 pl-8">
          <h2 className="text-3xl font-bold ">
            <SparklesText
              className="text-3xl"
              text=" Про мене"
              sparklesCount={6}
            />
          </h2>
          <p className="mt-4 text-lg">
            Привіт! Мене звати Поліна і я тренерка. Маю за плечима 15 років
            досвіду у спорті. Живу своєю справою і вважаю себе безробітною, бо
            те що роблю – це сенс мого життя!
          </p>
          <ul className="mt-4 space-y-4 list-disc pl-5">
            <li className="whitespace-pre-wrap text-lg font-medium tracking-tighter">
              <span className="text-2xl">
                <NumberTicker value={5} />
              </span>{" "}
              Років у спорті
            </li>
            <li className="whitespace-pre-wrap text-lg font-medium tracking-tighter">
              Тренер групових та персональних класів
            </li>
            <li className="whitespace-pre-wrap text-lg font-medium tracking-tighter">
              Артистка балету
            </li>
            <li className="whitespace-pre-wrap text-lg font-medium tracking-tighter">
              Учасниця “Танцюють всі”
            </li>
            <li className="whitespace-pre-wrap text-lg font-medium tracking-tighter">
              Робота з дітьми та дорослими
            </li>
            <li className="whitespace-pre-wrap text-lg font-medium tracking-tighter">
              Педагог сучасного танцю в Естрадно-цирковій академії
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
