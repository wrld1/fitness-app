import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function TabsImage() {
  return (
    <Tabs defaultValue="personal_trainings" className="w-[1000px]">
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
            src="/images/personal-trainings.jpg"
            alt="Personal Trainings"
            width={400}
            height={600}
            priority
            className="rounded-md"
          />
          <p className="p-4 text-lg">
            Персоналізований підхід! Кожне заняття створюється з урахуванням
            ваших індивідуальних потреб, цілей та фізіологічних особливостей.
            Тренування проводяться у форматі відео дзвінка, що дозволяє
            контролювати правильність виконання вправ, уникати травм та
            покращувати результати. Крім того, важливими аспектами на шляху до
            здорового та красивого тіла є мотивація, психологічна підтримка та
            дисципліна!
          </p>
        </div>
      </TabsContent>
      <TabsContent value="courses">
        <div className="rounded-lg bg-primary p-2 flex ">
          <Image
            src="/images/courses.jpg"
            alt="Courses"
            width={400}
            height={600}
            priority
            className="rounded-md"
          />
          <p className="p-4 text-lg">
            В будь-який час, коли ви готові виконувати вправи. Курси ідеально
            підходять для тих, хто прагне мати здорове та підтягнуте тіло,
            насолоджуватися результатами тренувань і відчувати задоволення від
            себе. Якщо вам не вистачає мотивації та дисципліни для регулярних
            занять, ви хочете позбутися болю в спині та милуватися своїм
            відображенням у дзеркалі, а також не бажаєте витрачати багато часу
            на дорогу до спортзалу, ці курси саме для вас.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
