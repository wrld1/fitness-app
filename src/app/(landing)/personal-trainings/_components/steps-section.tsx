function StepsSection() {
  return (
    <div
      id="steps"
      className="w-full relative min-h-screen py-20 bg-orangeMain text-orangeMainForeground"
    >
      <h2 className="text-4xl font-medium mb-20 text-center">
        Як проходить консультація?
      </h2>

      <div className="relative flex flex-col items-center container">
        <div className="relative z-10 flex flex-col gap-32">
          <svg
            className="absolute left-10 xl:left-6 -translate-x-1/2 h-full w-[50px]"
            viewBox="0 0 50 600"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M25 0C35 150 15 300 25 450C35 600 25 600 25 600"
              stroke="#000000"
              strokeWidth="2"
              strokeDasharray="5 5"
              fill="none"
            />
          </svg>

          <ProcessPoint
            number={1}
            title="Знайомство та визначення мети"
            listItems={[
              "Обговорення цілей (схуднення, набір маси, покращення здоров'я), наявних проблеми зі здоров‘ям, фізіологічних особливостей та рівня фізичної підготовки",
            ]}
          />
          <ProcessPoint
            number={2}
            title="Збір інформації"
            listItems={[
              "Антропометрія: вага, зріст, заміри",
              "Аналіз поточного раціону",
              "Оцінка харчового щоденника або харчових звичок",
            ]}
          />
          <ProcessPoint
            number={3}
            title="Рекомендації та план дій"
            listItems={[
              "Індивідуальний раціон: продукти, порції, режим харчування",
              "Поради щодо кількості та регулярності тренувань",
            ]}
          />
          <ProcessPoint
            number={4}
            title="Підтримка та мотивація"
            listItems={["Відповіді на запитання, налаштування на прогрес"]}
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </div>
  );
}

function ProcessPoint({
  number,
  title,
  listItems,
}: {
  number: number;
  title: string;
  listItems: string[];
}) {
  return (
    <div className="flex items-start gap-6 px-4 xl:px-0">
      <div className="z-20 flex items-center justify-center w-12 h-12 rounded-full bg-primary-foreground text-secondary font-medium shrink-0">
        {number}
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-2xl max-w-md font-semibold">{title}</p>
        <ul className="list-disc list-inside">
          {listItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StepsSection;
