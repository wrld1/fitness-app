import { Button } from "@/components/ui/button";
import Image from "next/image";

interface TrainingProgram {
  id: number;
  title: string;
  duration: string;
  price: string;
  description: string[];
  image: string;
}

const programs: TrainingProgram[] = [
  {
    id: 1,
    title: "Пекельний прес",
    duration: "Доступ: 2 місяці",
    price: "Вартість: 1120 грн.",
    description: [
      "Захотілось пекельного пресу? Ну а тут і він чекає на тебе!",
      "Перевірена програма на себі, подружках, клієнтах та навіть брата змогла змотивувати.",
      "І всі дійшли повного - а це взагалі дико круто - а ще сумніви залишаються за свої сили?",
      "Ми будемо тренуватися в стилі hiit+ flow.",
      "Не переживаю взагалі за мотив, цьому будуть лічені в час комплекси теж. Всі вправи цібі тільки переходять з однієї в іншу та ми тримаємо без зупинки дію рух.",
      "Плавні зміни допоможуть дійти по кроці мати тренальований прес - та робити тренування з рази на тиждень, виконавши краще, плавніше та тобі достатньо води в день.",
      "Й самі інструкції - та вони індивідуальні.",
      "Перше тренування безкоштовне, спробуй та приєднуйся!",
    ],
    image: "/images/training-1.jpg",
  },
  {
    id: 2,
    title: "Форма під купальник",
    duration: "Доступ: 2 місяці",
    price: "Вартість: 1180 грн.",
    description: [
      "Тим хто хоче з процесу в стилі спокою figure та також тебе відкриває свої жири. Ми не будемо тут стрибати, контролюємо пульс, щоб не виснітся серце (як далі, ми будемо тренування на прес жити, hiit, пілатес и наступному курсі «Експрес збагачення» будемо сумніві.",
      "Тобі межа склала борьбу але не залишить в спокої вихор м'яса та нового тіла.",
      "Всі тренування можна робити із звичайними гімнастками, матрацами та можна взагалі груди на вазі або лежати гантелі в руки. Лежи в себе і сама вирішуй - за чи рано. Приготуй, а на якось буду казати що не можна лежати, але як зробити без. Важко цим захватиться стілець.",
      "Перше тренування безкоштовне, спробуй та приєднуйся!",
    ],
    image: "/images/training-2.jpg",
  },
  {
    id: 3,
    title: "Форма під контр страйк",
    duration: "Доступ: 2 місяці",
    price: "Вартість: 1180 грн.",
    description: [
      "Тим хто хоче з процесу в стилі спокою figure та також тебе відкриває свої жири. Ми не будемо тут стрибати, контролюємо пульс, щоб не виснітся серце (як далі, ми будемо тренування на прес жити, hiit, пілатес и наступному курсі «Експрес збагачення» будемо сумніві.",
      "Тобі межа склала борьбу але не залишить в спокої вихор м'яса та нового тіла.",
      "Всі тренування можна робити із звичайними гімнастками, матрацами та можна взагалі груди на вазі або лежати гантелі в руки. Лежи в себе і сама вирішуй - за чи рано. Приготуй, а на якось буду казати що не можна лежати, але як зробити без. Важко цим захватиться стілець.",
      "Перше тренування безкоштовне, спробуй та приєднуйся!",
    ],
    image: "/images/training-3.jpg",
  },
];

function TrainingsList() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl mb-2">
          Ознайомтесь із напрямками тренувань, які я викладаю,
        </h2>
        <div className="flex items-center gap-2 mb-16">
          <p className="text-2xl">і оберіть улюблені</p>
          <span className="h-[1px] bg-black/20 flex-1"></span>
        </div>

        <div className="flex flex-col gap-20">
          {programs.map((program) => (
            <div
              key={program.id}
              className={`flex flex-col gap-8 ${
                program.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="aspect-[2/3] relative">
                <Image
                  src={program.image}
                  alt={program.title}
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={400}
                  height={634}
                  priority={program.id === 1}
                />
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-medium mb-4">{program.title}</h3>
                <p className="text-lg mb-1">{program.duration}</p>
                <p className="text-lg mb-6">{program.price}</p>

                <div className="space-y-4">
                  {program.description.map((paragraph, index) => (
                    <p key={index} className="text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <Button className="mt-8 px-6 py-3 rounded-full border transition-colors w-full md:w-1/3">
                  Пробний урок
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrainingsList;
