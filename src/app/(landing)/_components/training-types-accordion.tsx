import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export function TrainingTypesAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl font-semibold">
          Персональні тренування
        </AccordionTrigger>
        <AccordionContent className="text-lg flex items-center justify-between">
          Індивідуальний підхід до кожного
          <Button variant="outline" asChild>
            <Link href="/personal-trainings">
              Детальніше <MoveRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-xl font-semibold">
          Курси
        </AccordionTrigger>
        <AccordionContent className="text-lg flex items-center justify-between">
          Будь-коли, будь-де
          <Button variant="outline" asChild>
            <Link href="/online-trainings">
              Детальніше <MoveRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-xl font-semibold">
          Марафони
        </AccordionTrigger>
        <AccordionContent className="text-lg flex items-center justify-between">
          Система челенджів
          <Button variant="outline" asChild>
            <Link href="/marathons">
              Детальніше <MoveRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
