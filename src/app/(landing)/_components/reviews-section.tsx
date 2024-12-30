import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";

const reviews = [
  {
    img: "/images/review-1.png",
  },
  {
    img: "/images/review-2.png",
  },
  {
    img: "/images/review-3.png",
  },
  {
    img: "/images/review-4.png",
  },
  {
    img: "/images/review-5.png",
  },
  {
    img: "/images/review-6.png",
  },
  {
    img: "/images/review-7.png",
  },
  {
    img: "/images/review-8.png",
  },
  {
    img: "/images/review-9.png",
  },
  {
    img: "/images/review-10.png",
  },
  {
    img: "/images/review-11.png",
  },
  {
    img: "/images/review-12.png",
  },
  {
    img: "/images/review-13.png",
  },
  {
    img: "/images/review-14.png",
  },
  {
    img: "/images/review-15.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center bg-white w-[256px] h-[162px]">
        <Image width="256" height="162" alt="Review" src={img} />
      </div>
    </figure>
  );
};

export function ReviewsSection() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden border bg-neutral-50 ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
