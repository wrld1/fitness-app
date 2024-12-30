function Description() {
  return (
    <section className="px-4 md:px-8 py-12 bg-neutral-50 w-full z-10 flex items-center justify-center">
      <div className="container gap-4">
        {/* <Image
        src="/images/red-blue.jpg"
        alt="Opposites"
        width={800}
        height={450}
        priority
        className="rounded-md"
      /> */}
        <div className="bg-secondary/80 backdrop-blur-md p-8 rounded-lg supports-[backdrop-filter]:bg-secondary/30">
          <p className="text-black text-xl">
            Мої тренування — це унікальне поєднання двох світів: динамічних,
            драйвових силових тренувань, які заряджають енергією, та спокійних
            практик розтяжки й мобільності, які дарують розслаблення й гармонію.
            <br />
            <br />
            Також забудьте про жорсткі дієти, заборони та нескінченні обмеження!
            Наш підхід до харчування поєднує, здавалося б, несумісне: свободу у
            виборі продуктів і ефективність у досягненні ваших цілей.
            <br />
            <br />
            <i>
              Харчуйтесь вільно, живіть активно та досягайте бажаного тіла без
              стресу! Це не про обмеження — це про усвідомлений вибір і гармонію
              з собою.
            </i>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Description;
