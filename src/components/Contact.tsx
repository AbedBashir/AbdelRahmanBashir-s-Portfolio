"use client";

import { useForm, ValidationError } from "@formspree/react";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { contact, profile } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Contact() {
  const [state, handleSubmit, resetForm] = useForm(contact.formspreeId);

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Get In Touch" title={contact.heading} />
        <p className="mt-6 max-w-2xl text-lg text-gray-300">{contact.subheading}</p>

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.2fr]">
          <Reveal direction="left">
            <div className="space-y-6">
              <a
                href={`mailto:${profile.email}`}
                className="glass flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-black">
                  <FiMail size={20} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Email
                  </p>
                  <p className="font-medium text-white">{profile.email}</p>
                </div>
              </a>

              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="glass flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-black">
                  <FiPhone size={20} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Phone
                  </p>
                  <p className="font-medium text-white">{profile.phone}</p>
                </div>
              </a>

              <div className="glass flex items-center gap-4 rounded-2xl p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-black">
                  <FiMapPin size={20} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Location
                  </p>
                  <p className="font-medium text-white">{profile.location}</p>
                </div>
              </div>

              <div className="flex gap-4">
                {[
                  { icon: FiGithub, href: profile.socials.github, label: "GitHub" },
                  { icon: FiLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="glass flex h-12 w-12 items-center justify-center rounded-full text-white transition-transform hover:-translate-y-1 hover:text-cyan-300"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            {state.succeeded ? (
              <div className="glass flex h-full flex-col items-center justify-center rounded-3xl p-8 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-2xl text-black">
                  ✓
                </span>
                <h3 className="font-heading mt-5 text-2xl font-bold text-white">
                  Message sent!
                </h3>
                <p className="mt-2 text-gray-300">
                  Thanks for reaching out — I&apos;ll get back to you soon at your email.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-6 rounded-full glass px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass space-y-5 rounded-3xl p-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-gray-300" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-cyan-400"
                      placeholder="Your name"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1.5 text-xs text-red-400" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-gray-300" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-cyan-400"
                      placeholder="you@example.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1.5 text-xs text-red-400" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-300" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-cyan-400"
                    placeholder="What's this about?"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} className="mt-1.5 text-xs text-red-400" />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-300" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-cyan-400"
                    placeholder="Tell me about your project..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1.5 text-xs text-red-400" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-4 font-semibold text-black transition-transform hover:scale-[1.02] disabled:opacity-60"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>

                {state.errors && state.errors.getFormErrors().length > 0 && (
                  <p className="text-center text-sm text-red-400">
                    Something went wrong. Please email me directly at {profile.email}.
                  </p>
                )}
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
