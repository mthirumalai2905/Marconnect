"use client";

import { useState } from "react";

const items = [
  {
    q: "What does MarSurvive do?",
    a: "It is a safety unit embedded in the life jacket, worn at the chest or upper arm. When it comes into contact with water it switches on a light and sends its position, so the crew and search and rescue know where to go.",
  },
  {
    q: "Why not a wristband?",
    a: "Fishermen and deck crew work with their hands, around lines, nets and winches. Anything on the wrist can catch and cause an accident. On the life jacket the unit stays out of the way. The wristband version is made for children.",
  },
  {
    q: "What is the difference between the two units?",
    a: "The radio unit is low power and works on 433 and 868 MHz. Its position is triangulated by gateways installed on the boat or on land. The satellite unit talks to satellites directly, so it reports its position even far from any gateway.",
  },
  {
    q: "What does MarNet do?",
    a: "It is the shipboard network. Gateways hear the radio units and place them on the water, and sensors give decision makers live information, so an analog vessel becomes a smarter one.",
  },
  {
    q: "When does the unit send data?",
    a: "When it gets wet. During an ordinary shift it stays dark and silent. Contact with water is what wakes it, and that is when it starts sending a position.",
  },
  {
    q: "Is the overboard story a real rescue?",
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
