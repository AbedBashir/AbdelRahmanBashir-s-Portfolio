"use client";

import {
  FiShoppingBag,
  FiGlobe,
  FiSmartphone,
  FiHeadphones,
  FiHelpCircle,
  FiClipboard,
} from "react-icons/fi";
import { services, type ServiceItem } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const icons: Record<ServiceItem["icon"], React.ComponentType<{ size?: number }>> = {
  store: FiShoppingBag,
  globe: FiGlobe,
  smartphone: FiSmartphone,
  headphones: FiHeadphones,
  help: FiHelpCircle,
  clipboard: FiClipboard,
};

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="What I Offer" title="Services" />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} direction="up" delay={(i % 3) * 0.08}>
                <div className="panel h-full rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-black">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-heading mt-5 text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-300">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
