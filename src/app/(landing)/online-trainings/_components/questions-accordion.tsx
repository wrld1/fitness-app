import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function QuestionsAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl">
          Я вагітна, чи підійдуть мені тренування?
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          Ні, Почати тренуватись за програмою курсів можна через 2 місяці після
          пологів
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-xl">
          Я новачок, чи підійте міні курс?
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          Так, Ти зможеш все! На тренуваннях я даю декілька варіантів виконання
          вправ, тому цей курс підійде для будь-якого рівня підготовки
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-xl">Протипокази</AccordionTrigger>
        <AccordionContent className="text-lg">
          Медичні протипоказання, вагітність/ менше 2 місяців після пологів,
          гострі запальні процеси
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
