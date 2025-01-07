"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { uk } from "date-fns/locale";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(1, { message: "Ім'я обов'язкове" }),
  phone: z.string().min(9, { message: "Введіть коректний номер телефону" }),
  telegram: z.string(),
  trainingType: z.string().min(1, { message: "Оберіть напрямок тренування" }),
  date: z.date({ required_error: "Оберіть дату тренування" }),
});

function BookingSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      telegram: "",
      trainingType: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          phoneNumber: values.phone,
          telegram: values.telegram,
          trainingType: values.trainingType,
          date: values.date,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      toast.success(
        "Заявка успішно надіслана. Пізніше я з вами зв'яжусь для подальшого обговорення."
      );
    } catch (error) {
      toast.error("Помилка при відправленні заявки. Спробуйте ще раз");
      console.error("Error sending email:", error);
    }
  };

  return (
    <section
      id="booking"
      className="bg-orangeSecondary text-orangeSecondaryForeground py-16 w-full"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-2">
            Вартість персонального тренування:{" "}
            <span className="font-medium">20$</span>
          </h2>
          <p className="text-lg mb-8">
            Зарезервуйте час консультації чи персонального тренування
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col lg:flex-row gap-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        placeholder="Ім'я"
                        {...field}
                        className="rounded-full bg-white placeholder:text-sage-700 border-black"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex-1 relative">
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="tel"
                          placeholder="+38 (095) 999-99-99"
                          {...field}
                          className="w-full rounded-full bg-white placeholder:text-sage-700 border-black"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="telegram"
                render={({ field }) => (
                  <FormItem className="flex-1 relative">
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="string"
                          placeholder="Ваш нікнейм в телеграмі"
                          {...field}
                          className="w-full rounded-full bg-white placeholder:text-sage-700 border-black"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="trainingType"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="rounded-full bg-white text-left border-black">
                          <SelectValue placeholder="Напрямок тренування" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="barre">Барре</SelectItem>
                        <SelectItem value="stretching">Стретчінг</SelectItem>
                        <SelectItem value="functional_trainings">
                          Функціональні тренування
                        </SelectItem>
                        <SelectItem value="pilates">Пілатес</SelectItem>
                        <SelectItem value="mobility">Мобіліті</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full rounded-full bg-white border-black",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP", { locale: uk })
                            ) : (
                              <span>Оберіть дату</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 " align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="px-8 py-3 rounded-full transition-colors bg-orangeMain border-black/50"
                variant="outline"
              >
                Забронювати
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default BookingSection;
