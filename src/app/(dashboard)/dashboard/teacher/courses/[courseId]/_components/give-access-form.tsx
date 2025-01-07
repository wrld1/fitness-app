"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface GiveAccessForm {
  courseId: string;
  users: {
    id: string;
    name: string;
    email: string;
  }[];
}

const formSchema = z.object({
  userId: z.string(),
});

const GiveAccessForm = ({ courseId, users }: GiveAccessForm) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);

      const response = await axios.post(
        `/api/courses/${courseId}/checkout`,
        values
      );
      console.log("Response:", response.data);

      toast.success("Доступ надано");
      router.refresh();
    } catch (error) {
      console.log("error", error);
      toast.error("Щось пішло не так");
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <h2 className="text-xl font-semibold mb-4">Додати запис про оплату</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="userId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Оберіть користувача</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Оберіть користувача кому надається доступ" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {users.map((user) => (
                      <SelectItem key={user.id} value={user.id}>
                        {user.email}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Надати доступ</Button>
        </form>
      </Form>
    </div>
  );
};

export default GiveAccessForm;
