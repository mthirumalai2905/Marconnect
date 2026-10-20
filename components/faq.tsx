"use client";

import { useState } from "react";

const items = [
  {
    q: "What does Marpersonnel do?",
    a: "It is a smart bracelet for crew and passengers. In an emergency it gives a precise, real-time location, detects man overboard, and can alert the crew to irregular health activity.",
  },
  {
    q: "What does MarNet do?",
    a: "It is the shipboard network. Sensors give decision makers live information, and existing machinery and equipment can speak to each other, so an analog vessel becomes a smarter one.",
  },
  {
    q: "When does the bracelet send data?",
    a: "It is a sleep-wake system. Ordinary life stays on the wrist. It transmits when there is an emergency. Privacy is how the product behaves, not a line in a footer.",
  },
  {
    q: "What is the digital fence?",
    a: "The ship agrees a line. Inside it, people work. Cross it, and the alert does not wait for someone to notice.",
  },
  {
    q: "Is the diver a real rescue?",
    a: "It is a scenario, told so anyone can see the idea: worn in advance, awake in the water, found because the ship has a place to turn toward. A true rescue will be told only with permission.",
  },
  {
    q: "Who is it for?",
    a: "Fishing, global shipping, and offshore. The same two systems, one for the person and one for the ship, with a different first minute depending on the work.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div className={isOpen ? "faq-item open" : "faq-item"} key={item.q}>
            <button aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : index)}>
              {item.q}
              <i aria-hidden="true" />
            </button>
            <div className="faq-panel">
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
