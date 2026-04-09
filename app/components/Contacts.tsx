"use client";

import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";

export default function Contacts() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleEmailClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const gmailUrl =
      "https://mail.google.com/mail/?view=cm&fs=1&to=riyazmaind@gmail.com&su=Portfolio%20Contact";
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"" | "success" | "error">("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      setStatusType("error");
      setStatusMessage("Please fill in all fields before sending.");
      return;
    }

    setIsSubmitting(true);
    setStatusType("");
    setStatusMessage("Sending message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to send message.");
      }

      setStatusType("success");
      setStatusMessage("Thanks for reaching out! Your message has been sent.");
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatusType("error");
      setStatusMessage("Message failed to send. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-slate-950 text-slate-100 px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold">Let&apos;s Build Something Data-Driven</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Have a data science project, analytics challenge, or ML initiative? Get in touch and let&apos;s turn your data into actionable insights.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-8 shadow-2xl shadow-blue-500/10">
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <label className="block">
                <span className="text-sm text-gray-300">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition duration-200 focus:border-blue-400"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="text-sm text-gray-300">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition duration-200 focus:border-blue-400"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block">
                <span className="text-sm text-gray-300">Message</span>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={6}
                  className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition duration-200 focus:border-blue-400"
                  placeholder="Tell me about your project..."
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {statusMessage ? (
                <p className={`text-sm ${statusType === "error" ? "text-red-400" : statusType === "success" ? "text-green-400" : "text-blue-400"}`}>
                  {statusMessage}
                </p>
              ) : null}
            </form>
          </div>

          <div className="rounded-[32px] border border-blue-400/20 bg-slate-900/90 p-8">
            <h3 className="text-2xl font-semibold text-white mb-5">Get in touch</h3>
            <div className="space-y-6 text-gray-300">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-2">Email</p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=riyazmaind@gmail.com&su=Portfolio%20Contact"
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={handleEmailClick}
                  className="block text-lg font-medium text-white hover:text-blue-300"
                >
                  riyazmaind@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-2">Phone</p>
                <p className="text-lg font-medium text-white">+91 9371435407</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-2">Location</p>
                <p className="text-lg font-medium text-white">Ausa, Maharashtra, India</p>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-4">Follow me</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/riyaz-maind-66a108250/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-500"
                    title="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.3h.1c.7-1.3 2.4-2.7 5-2.7 5.4 0 6.4 3.6 6.4 8.3V24h-5V14.3c0-2.3-.1-5.2-3.2-5.2-3.2 0-3.7 2.5-3.7 5.1V24h-5V8z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/riyazmaind"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition hover:bg-slate-700"
                    title="GitHub"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.04c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.806 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.118-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.005-.405c1.02.005 2.045.138 3.005.405 2.29-1.55 3.297-1.23 3.297-1.23.656 1.653.244 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.92.43.37.814 1.096.814 2.215v3.285c0 .32.216.694.825.576C20.565 21.796 24 17.296 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/riyazmaind"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:bg-slate-800"
                    title="X"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.974 6.807H2.306l7.644-8.743L.512 2.25h6.833l4.713 6.231 5.579-6.231zm-.616 17.52h1.832L7.793 5.09H5.85z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
