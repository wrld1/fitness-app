import { CircleCheck } from "lucide-react";
import { QuestionsAccordion } from "./questions-accordion";

function AboutTrainingsSection() {
  return (
    <section className="py-20 bg-neutral-50 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl mb-16 flex items-center gap-4">
          Тебе чекає
          <span className="h-[1px] bg-black/20 flex-1"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-md bg-white shadow-md p-4 flex gap-2 items-center min-h-[90px]">
            <CircleCheck className="flex-shrink-0" />
            <p className="text-lg font-semibold ">
              Комплексний, продуманий план тренувань
            </p>
          </div>

          <div className="rounded-md bg-white shadow-md p-4 flex gap-2 items-center min-h-[90px]">
            <CircleCheck className="flex-shrink-0" />
            <p className="text-lg font-semibold ">
              Кожне тренування унікальне та не схоже на попередне
            </p>
          </div>

          <div className="rounded-md bg-white shadow-md p-4 flex gap-2 items-center min-h-[90px]">
            <CircleCheck className="flex-shrink-0" />
            <p className="text-lg font-semibold ">
              Відео з поясненням правильної техніки виконання вправ
            </p>
          </div>

          <div className="rounded-md bg-white shadow-md p-4 flex gap-2 items-center min-h-[90px]">
            <CircleCheck className="flex-shrink-0" />
            <p className="text-lg font-semibold ">
              Робота з м‘язами всього тіла
            </p>
          </div>

          <div className="rounded-md bg-white shadow-md p-4 flex gap-2 items-center min-h-[90px]">
            <CircleCheck className="flex-shrink-0" />
            <p className="text-lg font-semibold ">
              Доступ до тренуваннь в будь-який час
            </p>
          </div>

          <div className="rounded-md bg-white shadow-md p-4 flex gap-2 items-center min-h-[90px]">
            <CircleCheck className="flex-shrink-0" />
            <p className="text-lg font-semibold ">Підтримка Єлизавети Фабіс</p>
          </div>
        </div>

        <p className="text-lg mt-12">
          Читай про кожен курс та обирай для себе <br />{" "}
          <span className="font-bold text-xl">До зустрічі на тренуванні!</span>
        </p>
      </div>
      <div className="container p-4 mt-10">
        <h2 className="text-3xl mb-16 flex items-center gap-4">
          FAQ
          <span className="h-[1px] bg-black/20 flex-1"></span>
        </h2>
        <QuestionsAccordion />
        <p className="text-lg mt-8">
          Якщо ви не впевнені чи підійдуть вам тренування з обраного курсу, ви
          можете звернутись за консультацію до мене!
        </p>
      </div>
    </section>
  );
}

export default AboutTrainingsSection;
