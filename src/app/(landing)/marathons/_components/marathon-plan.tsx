const steps = [
  {
    id: 1,
    text: "Баррє челендж розрахований на 21 день: 9 тренувань, мікс баррє та стретчинг для більшої ефективності",
  },
  {
    id: 2,
    text: "4 челенджа, кожен з яких поступово підвищує рівень навантаження та якість тіла",
  },
  {
    id: 3,
    text: "Отримання тренувань з доступом на 1 місяць у разі непередбачених перепусток",
  },
  {
    id: 4,
    text: "Бажаний розклад тренувань: пн/пт-баррє, ср-стретчинг; вт/чт/сб руханки починаючи з челенджа 3.0",
  },
  {
    id: 5,
    text: "Меню з рекомендаціями щодо харчування",
  },
];

function MarathonPlan() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl mb-20 flex items-center gap-4">
          Як проходить марафон
          <span className="h-[1px] bg-black/20 flex-1"></span>
        </h2>

        <div className="relative mx-auto">
          {/* <svg
            className="absolute left-1/2 h-[90%] top-[5%] -translate-x-1/2 w-[100px]"
            viewBox="0 0 100 1000"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M50 0C65 200 35 400 50 600C65 800 50 1000 50 1000"
              stroke="#A4D84F"
              strokeWidth="2"
              strokeDasharray="5 5"
              fill="none"
            />
          </svg> */}

          <div className="relative z-10 flex flex-col gap-24">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex items-center gap-8 ${
                  step.id % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Checkmark Circle */}
                <div className="relative shrink-0 z-10">
                  <div className="w-12 h-12 rounded-full bg-primary border-2 border-border flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-secondary-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Text Content */}
                <div
                  className={`flex-1 ${
                    step.id % 2 === 0 ? "text-left" : "text-right"
                  }`}
                >
                  <p className="text-lg">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarathonPlan;
