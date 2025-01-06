"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface GiveAccessForm {
  courseId: string;
  users: {
    id: string;
    name: string;
    email: string;
  }[];
}

const formSchema = z.object({
  userId: z.string().min(1),
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
      await axios.post(`/api/courses/${courseId}/checkout`, values);
      toast.success("Курс відредаговано");
      router.refresh();
    } catch {
      toast.error("Щось пішло не так");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <div className=" bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Додати запис про оплату</h2>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Select User</label>
              <select name="userId" className="w-full p-2 border rounded">
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.email}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Create Purchase Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GiveAccessForm;
