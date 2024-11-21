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
    title: "Шлях до гнучкості або легкість у кожному русі",
    duration: "Тривалість: 9 тренувань",
    price: "Вартість: 1350 грн",
    description: [
      "Програма розроблена для того, щоб допомогти відновити баланс у тілі, зняти втому та стрес, а також створити відчуття гармонії та внутрішнього спокою",
      "Під час занять ви поступово розвиватимете гнучкість, що допоможе  знизити ризик травм, позбутись болю у спині, відчути легкість у тілі та покращити фізичну форму",
      "Також якщо у вас є мрія сісти на шпагат на тренуваннях я розповідаю, як зробити це безпечно",
      "Ти з нами?",
    ],
    image: "/images/courses-img.jpg",
  },
];

function TrainingsList() {
  return (
    <section className="py-20 bg-blueMain text-blueMainForeground w-full">
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

                <Button className="mt-8 px-6 py-3 bg-black hover:bg-black/80 border-none text-white rounded-full border transition-colors w-full md:w-1/3 text-lg">
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
