"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

import HeroSection from "@/components/heroSection";
import Roadmap from "@/components/roadmap";
import { faqs } from "@/data/faqs";

export default function Home() {
  return (
    <div className="bg-black text-white px-6 py-10 space-y-20">
      <HeroSection />
      <Roadmap />

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[
          {
            title: "Resume Builder",
            desc: "Create stunning resumes tailored to your skills and job profile with AI suggestions.",
          },
          {
            title: "Cover Letter Generator",
            desc: "Get personalized cover letters that highlight your strengths for specific roles.",
          },
          {
            title: "Interview Prep",
            desc: "Practice with AI-generated questions and get feedback to improve your confidence.",
          },
          {
            title: "Industry Insights",
            desc: "Access up-to-date trends, salaries, and skill demands in your chosen field.",
          },
        ].map((feature, i) => (
          <Card
            key={i}
            className="bg-transparent cursor-pointer border-amber-50 text-white rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-white/90">{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="max-w-3xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem className="" key={idx} value={`faq-${idx}`}>
              <AccordionTrigger className="text-lg font-medium hover:text-purple-400 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-white/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
