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
              Єлизавета вірить, що тренування повинні бути не тільки
              ефективними, але й безпечними. Вона ставить акцент на правильну
              техніку виконання вправ, що дозволяє досягати максимальних
              результатів без ризику травм.
            </li>
            <li className="whitespace-pre-wrap text-lg font-regular tracking-tighter">
              Вона вважає, що здоров&apos;я — це не лише фізична форма, але й
              внутрішній баланс і гармонія. Її мета — створювати тренування, які
              будуть не тільки фізично ефективними, але й сприятимуть емоційному
              та психологічному благополуччю.
            </li>
            <li className="whitespace-pre-wrap text-lg font-regular tracking-tighter">
              Тренування повинні бути не тільки ефективними, а й приносити
              задоволення!
            </li>
            <li className="whitespace-pre-wrap text-lg font-regular tracking-tighter">
              Тому приєднуйся до тренувань зі мною і почний кайфувати від себе
              та власного відображення у дзеркалі!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
