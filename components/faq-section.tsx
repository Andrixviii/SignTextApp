"use client";

import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How secure is my sign language data?",
    answer: "Your sign language data is protected with end-to-end encryption, ensuring that only you and authorized users can access it. We follow industry-standard protocols to safeguard your sensitive data."
  },
  {
    question: "Can SignText recognize all types of sign languages?",
    answer: "SignText supports multiple sign languages including American Sign Language (ASL), International Sign Language (ISL), and more. We are constantly working to add new languages and improve recognition accuracy."
  },
  {
    question: "Can I use SignText offline?",
    answer: "Yes, SignText offers offline support, allowing you to use basic sign recognition and text translation without an internet connection. Changes will sync once you are back online."
  },
  {
    question: "How accurate is the sign language recognition?",
    answer: "SignText uses advanced AI and machine learning algorithms to provide highly accurate real-time sign language recognition. The app continuously improves its recognition capabilities as more data is collected."
  },
  {
    question: "Is SignText accessible for all users?",
    answer: "Yes, SignText is designed to be inclusive. We have a simple, user-friendly interface that is optimized for both users with hearing impairments and those who are new to sign language."
  },
  {
    question: "Can I learn sign language using SignText?",
    answer: "Yes, SignText offers an interactive learning mode that helps you learn sign language through practice and feedback. It's a great tool for both beginners and advanced learners."
  },
  {
    question: "What devices can I use SignText on?",
    answer: "SignText is available on iOS and Android devices, and we are working on expanding to other platforms. You can sync your data across all devices automatically."
  },
  {
    question: "Can I share my sign translations with others?",
    answer: "Yes, you can easily share your translations with others via text, email, or social media. SignText allows you to send both the translated text and the sign video for a comprehensive understanding."
  }
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('faq');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="faq" className={`py-20 section-fade-in ${isVisible ? 'visible' : ''}`}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground animate-fade-in">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slide-up">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-slide-up stagger-1">
              Find answers to common questions about SignText, your go-to app for real-time sign language translation.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`animate-fade-in stagger-${index + 1} transition-all-300`}
              >
                <AccordionTrigger className="text-left transition-all-300 hover:text-primary">{faq.question}</AccordionTrigger>
                <AccordionContent className="transition-all-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
