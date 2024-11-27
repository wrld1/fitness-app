import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function TabsImage() {
  return (
    <Tabs defaultValue="personal_trainings" className="w-[700px]">
      <TabsList className="grid w-full grid-cols-2 bg-primary/10 backdrop-blur-md shadow-lg">
        <TabsTrigger value="personal_trainings" className="text-foreground">
          Персональні тренування
        </TabsTrigger>
        <TabsTrigger value="courses" className="text-foreground">
          Курси
        </TabsTrigger>
      </TabsList>
      <TabsContent value="personal_trainings">
        <div className="rounded-lg bg-primary p-2 flex transition">
          <Image
            src="/images/personal-trainings-img.jpg"
            alt="Personal Trainings"
            width={300}
            height={450}
            priority
            className="rounded-md"
          />
          <p className="p-4 text-lg">
            Хочеш досягти своєї мети швидше? Працюй над своїм тілом і здоров’ям
            разом із професійним тренером! Запишись на персональне тренування та
            зроби перший крок до тіла своєї мрії вже сьогодні! Кількість місць
            обмежена!
          </p>
        </div>
      </TabsContent>
      <TabsContent value="courses">
        <div className="rounded-lg bg-primary p-2 flex ">
          <Image
            src="/images/courses-img.jpg"
            alt="Courses"
            width={300}
            height={450}
            priority
            className="rounded-md"
          />
          <p className="p-4 text-lg">
            Разом зі мною ти зможеш змінити себе та своє тіло до
            невпізнаваності! Мрієш про підтягнуте, рельєфне, гнучке тіло та
            енергію на 100%? Я створила серію курсів, які:
            <ul>
              <li>-Повністю змінюють твоє тіло.</li>
              <li>-Підходять для будь-якого рівня підготовки.</li>
              <li> -Забезпечують швидкий та стабільний результат.</li>
            </ul>
            Ти готова до трансформації?
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
