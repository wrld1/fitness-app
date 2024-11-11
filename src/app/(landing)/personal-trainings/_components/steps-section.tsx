function StepsSection() {
  return (
    <div className="container relative min-h-screen py-20">
      <h2 className="text-4xl font-medium mb-20 text-center">
        Як проходить консультація?
      </h2>

      <div className="relative flex flex-col items-center">
        {/* Curvy SVG Line */}

        {/* Process Points */}
        <div className="relative z-10 flex flex-col gap-48">
          <svg
            className="absolute left-6 -translate-x-1/2 h-[600px] w-[50px]"
            viewBox="0 0 50 600"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M25 0C35 150 15 300 25 450C35 600 25 600 25 600"
              stroke="#94BFF0"
              strokeWidth="2"
              strokeDasharray="5 5"
              fill="none"
            />
          </svg>

          <ProcessPoint
            number={1}
            title="Ми визначаємось з вашою цілью, обговорюємо наявні проблеми зі здоров‘ям, фізіологічні особливості та рівень фізичної підготовки"
          />
          <ProcessPoint
            number={2}
            title="Далі підбираємо комфортний час та платформу для зустрічі (Telegram або Zoom)"
          />
          <ProcessPoint
            number={3}
            title="Складаємо план та графік тренувань для досягнення нашої цілі)"
          />
        </div>
      </div>
    </div>
  );
}

function ProcessPoint({ number, title }: { number: number; title: string }) {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#94BFF0] text-white font-medium">
        {number}
      </div>
      <p className="text-lg max-w-md">{title}</p>
    </div>
  );
}

export default StepsSection;
