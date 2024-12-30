import { TrainingTypesAccordion } from "./training-types-accordion";
import Image from "next/image";

export default function TrainingTypesSection() {
  return (
    <>
      <div className="max-w-4xl mx-auto py-12">
        <h2 className="text-center text-4xl font-bold mb-16">
          Напрямки тренувань
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-lg p-2 bg-gradient-to-b from-primary to-primary/80 text-2xl">
              🧘🏼‍♀️
            </div>
            <h3 className="text-xl font-semibold text-center">Стретчінг</h3>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="rounded-lg p-2 bg-gradient-to-b from-primary to-primary/80 text-2xl">
              🩰
            </div>
            <h3 className="text-xl font-semibold text-center">Барре</h3>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-lg p-2 bg-gradient-to-b from-primary to-primary/80 text-2xl">
              <Image
                src="/icons/pilates.png"
                width={32}
                height={32}
                alt="Pilates"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">Пілатес</h3>
          </div>
          <div className="flex flex-col items-center  gap-2">
            <div className="rounded-lg p-2 bg-gradient-to-b from-primary to-primary/80 text-2xl">
              💪🏻
            </div>
            <h3 className="text-xl font-semibold text-center">
              Функціональні тренування
            </h3>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-lg p-2 bg-gradient-to-b from-primary to-primary/80 text-2xl">
              🤸‍♂️
            </div>
            <h3 className="text-xl font-semibold text-center">Мобіліті</h3>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-lg p-2 bg-gradient-to-b from-primary to-primary/80 text-2xl">
              ❤️‍🩹
            </div>
            <h3 className="text-xl font-semibold text-center">
              Відновлення після травм
            </h3>
          </div>
        </div>
      </div>
      <div className="container py-12" id="training-types">
        <h3 className="text-center text-4xl font-bold mb-16">Типи тренувань</h3>
        <div className="max-w-4xl mx-auto rounded-lg p-8 bg-gradient-to-b from-secondary to-secondary/80">
          <TrainingTypesAccordion />
        </div>
      </div>
    </>
  );
}
