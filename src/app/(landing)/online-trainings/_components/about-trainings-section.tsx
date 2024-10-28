function AboutTrainingsSection() {
  return (
    <section className="py-20 bg-neutral-50 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl mb-16 flex items-center gap-4">
          Про онлайн тренування
          <span className="h-[1px] bg-black/20 flex-1"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg">
              Я впевнена, що ефективність класів вдома не гірша, аніж у залі: ми
              зберігаємо час на дорогу, витрати на транспорт, а крутий заряд від
              спорту залишається незмінним!
            </p>
          </div>

          <div>
            <p className="text-lg">
              У моїх відео збережено інтенсивність вправ та енергійний вайб,
              тому ці класи є класною альтернативою оффлайну.
            </p>
          </div>
        </div>

        <p className="text-lg mt-12">
          Ознайомтесь із напрямками тренувань, які я викладаю, і оберіть
          улюблені!
        </p>
      </div>
    </section>
  );
}

export default AboutTrainingsSection;
