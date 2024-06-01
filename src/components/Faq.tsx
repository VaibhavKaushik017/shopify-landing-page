import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CiSquareCheck } from "react-icons/ci";
import { FaShippingFast } from "react-icons/fa";
import { IoReturnDownBack } from "react-icons/io5";

function Faq() {
  return (
    <div className="overflow-hidden">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl">
            <div className="flex gap-2 items-center">
              <CiSquareCheck />
              Quality Assurance
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-base text-gray-500">
            Every order undergoes a rigorous quality assurance check before
            being shipped out. We take pride in delivering premium quality
            products that you will absolutely love.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl">
            <div className="flex gap-2 items-center">
              <FaShippingFast />
              Shipping
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="text-base text-gray-500">
              <li>🚚 All orders are processed and shipped within 72 hours.</li>
              <li>🚚 Delivery within 3-7 days.</li>
              <li>🚚 Enjoy FREE SHIPPING on all orders!</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl">
            <div className="flex gap-2 items-center">
              <IoReturnDownBack />
              Moneyback Guarantee!
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-base text-gray-500">
            Please get in touch with our support team via email for returns or
            read our shipping policy.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Faq;
