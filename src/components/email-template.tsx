import * as React from "react";

interface EmailTemplateProps {
  name: string;
  phoneNumber: string;
  telegram?: string;
  trainingType: string;
  date: Date;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  phoneNumber,
  telegram,
  trainingType,
  date,
}) => {
  const formatDateUkrainian = (date: Date) => {
    const months = [
      "січня",
      "лютого",
      "березня",
      "квітня",
      "травня",
      "червня",
      "липня",
      "серпня",
      "вересня",
      "жовтня",
      "листопада",
      "грудня",
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  return (
    <div>
      <h1>Нова заявка на персональне тренування від {name}!</h1>
      <p>Номер телефону: {phoneNumber}</p>
      <p>Телеграм: {telegram}</p>
      <p>Тип тренування: {trainingType}</p>
      <p>Дата: {formatDateUkrainian(new Date(date))}</p>
    </div>
  );
};
