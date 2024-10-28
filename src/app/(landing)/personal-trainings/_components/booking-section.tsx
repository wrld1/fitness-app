import { CalendarIcon, ChevronDownIcon } from "lucide-react";

function BookingSection() {
  return (
    <section className="bg-secondary py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-2">
            Вартість персонального тренування:{" "}
            <span className="font-medium">60$</span>
          </h2>
          <p className="text-lg mb-8">
            Зарезервуйте час консультації чи персонального тренування
          </p>

          <form className="flex flex-col md:flex-row gap-4">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Ім'я"
              className="flex-1 px-4 py-3 rounded-full bg-sage-100/50 border-0 focus:ring-2 focus:ring-[#A4D84F] placeholder:text-sage-700"
            />

            {/* Phone Input */}
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <img src="/images/ua-flag.svg" alt="UA" className="w-5 h-4" />
                <span>+380</span>
              </div>
              <input
                type="tel"
                placeholder="(99) 999-99-99"
                className="w-full px-4 py-3 pl-24 rounded-full bg-sage-100/50 border-0 focus:ring-2 focus:ring-[#A4D84F] placeholder:text-sage-700"
              />
            </div>

            {/* Training Type Select */}
            <div className="flex-1 relative">
              <select
                className="w-full appearance-none px-4 py-3 rounded-full bg-sage-100/50 border-0 focus:ring-2 focus:ring-[#A4D84F] text-sage-700"
                defaultValue=""
              >
                <option value="" disabled>
                  Напрямок тренування
                </option>
                <option value="yoga">Йога</option>
                <option value="fitness">Фітнес</option>
                <option value="pilates">Пілатес</option>
              </select>
              <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sage-700 pointer-events-none" />
            </div>

            {/* Date Input */}
            <div className="flex-1 relative">
              <input
                type="date"
                className="w-full px-4 py-3 rounded-full bg-sage-100/50 border-0 focus:ring-2 focus:ring-[#A4D84F] text-sage-700"
              />
              <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sage-700 pointer-events-none" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-white text-sage-900 hover:bg-sage-50 transition-colors"
            >
              Забронювати
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BookingSection;
