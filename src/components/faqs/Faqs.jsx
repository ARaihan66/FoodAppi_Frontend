import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export function Faqs() {
  const [open, setOpen] = React.useState(null);

  const faqs = [
    {
      question: "How can I place an order?",
      answer:
        "Placing an order with FoodAppi is easy! Simply go to our website, create an account, browse through our wide selection of restaurants and cuisines, select your favorite dishes, add them to your cart, and proceed to checkout. You can also place orders directly through our website."
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods for your convenience, including credit card, debit card, PayPal, and Apple Pay. You can securely save your payment details for faster checkout in the future."
    },
    {
      question: "Is there a minimum order requirement?",
      answer:
        "Minimum order requirements may vary depending on the restaurant you order from. Details about minimum order amounts and delivery fees are clearly displayed during the checkout process."
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes, you can easily track your order in real-time through our app. Once your order is confirmed, you'll receive updates on its preparation, pickup, and estimated delivery time."
    },
    {
      question: "What if there's an issue with my order?",
      answer:
        "If you encounter any issues with your order, such as missing items or delivery concerns, please contact our customer support team immediately. We're here to assist you and ensure your satisfaction."
    }
  ];
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
    <h3 className="font-bold text-2xl my-5">FAQ's</h3>
     {faqs && faqs.map((item, index)=>{
        return(
            <Accordion open={open === index} key={index}>
            <AccordionHeader className="text-black" onClick={() => handleOpen(index)}>{item.question}</AccordionHeader>
            <AccordionBody>
              {item.answer}
            </AccordionBody>
          </Accordion>
        )
     })}
    </>
  );
}