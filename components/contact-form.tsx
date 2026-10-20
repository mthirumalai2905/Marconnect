"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="thanks">
        <strong>Thank you. This preview does not send mail yet.</strong>
        <p>
          Write to <a href="mailto:jakob@marconnect.no">jakob@marconnect.no</a> and a person will answer.
        </p>
      </div>
    );
  }

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <input name="name" placeholder="Name" required aria-label="Name" />
      <input name="company" placeholder="Company or vessel" aria-label="Company or vessel" />
      <input className="full" name="email" type="email" placeholder="Email" required aria-label="Email" />
      <textarea className="full" name="message" placeholder="Tell us about the operation" aria-label="Message" />
      <button className="btn btn-light" type="submit">
        Talk to us <span className="ar">→</span>
      </button>
    </form>
  );
}
