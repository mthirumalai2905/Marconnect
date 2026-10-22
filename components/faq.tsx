"use client";

import { useState } from "react";

const items = [
  {
    q: "What does MarSurvive do?",
    a: "It is a safety unit for scuba divers and everyone who works at sea. It sits on the life jacket at the chest or upper arm, or on a diver’s vest. When it matters, it switches on a light and sends its position, so the crew and search and rescue know where to go.",
  },
  {
    q: "Why not a wristband?",
    a: "Fishermen and deck crew work with their hands, around lines, nets and winches. Anything on the wrist can catch and cause an accident. On the life jacket the unit stays out of the way. The wristband, MarConnect, is made for children and pets.",
  },
  {
    q: "What is the difference between the two units?",
    a: "The radio unit is low power and works on 433 and 868 MHz. Its position is triangulated by gateways installed on the boat or on land. The satellite unit talks to satellites directly, so it reports its position even far from any gateway.",
  },
  {
    q: "What is MarConnect?",
    a: "A small wristband for children, and a band for a pet’s collar. It is made for ferries, family boats and holidays on the water, so the people and animals who cannot look after themselves can still be found.",
  },
  {
    q: "Can scuba divers use MarSurvive?",
    a: "Yes. Divers wear it on the dive vest. If they surface away from the boat, in current or poor light, it gives light and position so the boat can come to them.",
  },
  {
    q: "What do the gateways do?",
    a: "MarNet gateways are installed on the boat or on land. They hear the radio units and triangulate the position, so the bridge sees one point on the water.",
  },
  {
    q: "Is the overboard story a real rescue?",
    a: "It is a scenario, told so anyone can see the idea: worn in advance, awake in the water, found because the ship has a place to turn toward. A true rescue will be told only with permission.",
  },
  {
    q: "Who is it for?",
    a: "Diving, fishing, global shipping and offshore with MarSurvive, and families on the water with MarConnect. The same idea everywhere: worn in advance, found when it matters.",
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
