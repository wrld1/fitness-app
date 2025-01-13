import { formatPrice } from "@/lib/format";
import CopyButton from "./_components/copy-button";

interface PurchasePageProps {
  params: {
    courseId: string;
  };
  searchParams: {
    price: string;
  };
}

const PurchasePage = ({ searchParams }: PurchasePageProps) => {
  const price = parseInt(searchParams.price);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Оплата курсу</h1>

      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Інформація про оплату</h2>
          <p>Вартість курсу: {formatPrice(price)}</p>
          <p>Доступ надається на 2 місяці</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Реквізити для оплати:</h3>
          <div className="flex items-center gap-2">
            <code className="bg-gray-100 p-2 rounded">4444 5555 6666 7777</code>
            <CopyButton value="4444555566667777" />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-medium mb-2">Після оплати:</h3>
          <p className="text-gray-600">
            1. Зробіть скріншот оплати або квитанції
            <br />
            2. Надішліть його в телеграм{" "}
            <span className="font-bold">@LizaFabis</span> або на пошту
            <span className="font-bold"> lf.body.update@gmail.com</span>
            <br />
            3. Після підтвердження ви отримаєте доступ до курсу
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
