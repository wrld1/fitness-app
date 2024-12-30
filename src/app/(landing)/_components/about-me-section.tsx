import Image from "next/image";

export default function AboutMeSection() {
  return (
    <section
      className="px-4 md:px-8 py-12 bg-neutral-50 w-full z-10 relative pt-16 md:pt-32"
      id="about-me"
    >
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        <div className="md:w-1/3">
          <Image
            src="/images/about-me.jpg"
            alt="About Me Image"
            className="rounded-full shadow-lg object-cover"
            width={425}
            height={425}
            style={{ aspectRatio: "1 / 1" }}
          />
        </div>
        <div className=" w-full md:w-2/3 pl-0 md:pl-8">
          <h2 className="text-3xl font-bold">Про Фабіс Єлизавету</h2>
          <p className="mt-4 text-lg font-semibold">
            Фабіс Єлизавета — сертифікований тренер, а також фізичний терапевт з
            понад 10-річним досвідом у спортивній індустрії. Її кар&apos;єра
            поєднує глибокі знання анатомії та фізіології, здобуті під час
            навчання, з практичним досвідом роботи як реабілітолога так і
            тренера.
          </p>
          <ul className="mt-4 space-y-4 list-disc pl-5">
            <li className="whitespace-pre-wrap text-lg font-regular tracking-tighter">
              Єлизавета вважає, що спорт — це шлях до вдосконалення не лише
              тіла, а й душі. Вона впевнена, що здоров’я — це гармонія між
              фізичною формою, внутрішнім балансом та емоційним спокоєм. Її
              головна мета — створювати тренування, які допомагають здобути тіло
              мрії, відновити енергію, позбутися стресу та насолоджуватися
              кожною хвилиною занять.
            </li>
            <li className="whitespace-pre-wrap text-lg font-regular tracking-tighter">
              Якщо ти хочеш змінити своє життя, почати кайфувати від тренувань і
              насолоджуватися своїм прогресом, без заборон та виснажливих
              тренувань, приєднуйся вже сьогодні! Почни шлях до себе, наповненої
              енергією та впевненістю
            </li>
          </ul>
          <p className="mt-4 text-lg font-semibold">
            Тренування повинні бути не тільки ефективними, а й приносити
            задоволення! <br /> Тому приєднуйся до тренувань зі мною і почний
            кайфувати від себе та власного відображення у дзеркалі!
          </p>
        </div>
      </div>
    </section>
  );
}
