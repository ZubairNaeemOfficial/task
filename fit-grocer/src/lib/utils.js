import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const cn = (...inputs) => {
   return twMerge(clsx(inputs));
};

const calculateCurrentMeal = () => {
   const date = new Date();
   const hour = date.getHours();

   if (hour >= 3 && hour <= 10) {
      return "breakfast"
   } else if (hour >= 11 && hour <= 16) {
      return "lunch"
   } else {
      return "dinner"
   }
}

export { cn, calculateCurrentMeal }