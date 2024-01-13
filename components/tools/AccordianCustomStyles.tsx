"use client"
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function AccordianCustomStyles() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }

  return (
    <div className="container my-12">
      <div className="relative my-10">
        <h2 className="absolute top-0 left-0 w-full mt-75 text-4xl font-bold" style={{
          width: '100%',
          textAlign: 'center',
          top: '45%'
        }} id="howWeWork">Quick FAQs Guide</h2>
        <h2 className="text-9xl opacity-10 text-uppercase" style={{ fontWeight: 'bold' }} id="about-us-1">Common Quesries</h2>
      </div>
      <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4" icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
        >
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4" icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
        >
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4" icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
        >
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </div>
  );
}
