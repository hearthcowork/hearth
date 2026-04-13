'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const JOIN_MAILTO =
  'mailto:hearthcowork@gmail.com?subject=Interest in Coworking at Hearth&body=Hi there!%0A%0AI%E2%80%99d love to learn more about coworking membership at Hearth.%0A%0ACould you share more about options and next steps?%0A%0AThanks so much,%0A';

const includedFeatures: { text: string; icon: string; iconAlt: string }[] = [
  {
    text: 'Access Monday to Friday, 8 AM to 5 PM',
    icon: '/monthly-icon.svg',
    iconAlt: 'Weekday access',
  },
  {
    text: 'Shared tables and cozy workspaces',
    icon: '/daily-icon.svg',
    iconAlt: 'Workspace',
  },
  {
    text: 'High-speed WiFi',
    icon: '/flex-icon.svg',
    iconAlt: 'Connectivity',
  },
  {
    text: 'Private phone booth',
    icon: '/private-icon.svg',
    iconAlt: 'Private call space',
  },
  {
    text: 'A wellness-forward environment (natural light, plants, calm energy)',
    icon: '/access-icon.svg',
    iconAlt: 'Welcoming space',
  },
  {
    text: 'Opportunities to host and attend community events',
    icon: '/monthly-icon.svg',
    iconAlt: 'Community events',
  },
];

function FeatureRow({
  text,
  icon,
  iconAlt,
}: {
  text: string;
  icon: string;
  iconAlt: string;
}) {
  return (
    <li className="flex flex-row gap-4 items-center">
      <div className="flex shrink-0 items-center justify-center w-[48px] h-[32px]">
        <Image
          src={icon}
          alt={iconAlt}
          width={40}
          height={30}
          className="object-contain"
        />
      </div>
      <span className="font-montserrat text-sm text-neutral-700 leading-[1.4] flex-1 min-w-0">
        {text}
      </span>
    </li>
  );
}

export default function CoworkingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const membershipRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fadeUp = (el: Element | null) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    };

    fadeUp(titleRef.current);
    fadeUp(subheadRef.current);
    fadeUp(cardRef.current);

    if (listRef.current?.children?.length) {
      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    fadeUp(membershipRef.current);
    fadeUp(ctaRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#e8e3da] py-16 xl:py-24"
      aria-labelledby="coworking-heading"
    >
      <div className="container mx-auto px-6 xl:px-32">
        <div className="text-center max-w-3xl mx-auto mb-10 xl:mb-14">
          <h2
            id="coworking-heading"
            ref={titleRef}
            className="font-messapia text-3xl md:text-4xl xl:text-5xl text-neutral-700 font-bold leading-[1.15] mb-5 xl:mb-6"
          >
            Coworking at Hearth
          </h2>
          <p
            ref={subheadRef}
            className="font-montserrat text-lg md:text-xl lg:text-2xl text-neutral-700 leading-[1.3]"
          >
            A space to work with intention, in community.
          </p>
        </div>

        <div
          ref={cardRef}
          className="border border-neutral-700 rounded-[33px] overflow-hidden mb-14 xl:mb-16 flex flex-col xl:flex-row"
        >
          <div className="relative xl:flex-1 min-h-[340px] xl:min-h-[460px]">
            <Image
              src="/coworking-image.png"
              alt="Hearth coworking space"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-neutral-800/40" />
            <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10 xl:p-12">
              <div className="space-y-4 max-w-md">
                <p className="font-montserrat text-base md:text-lg text-[#f4eee3] leading-relaxed">
                  <Image
                    src="/h-logo-member.svg"
                    alt="H"
                    width={36}
                    height={36}
                    className="inline-block mr-1.5 -mt-1 align-middle"
                  />
                  earth offers a calm, welcoming environment for focused work,
                  creative flow, and meaningful connection.
                </p>
                <p className="font-montserrat text-base md:text-lg text-[#f4eee3] leading-relaxed">
                  This isn&apos;t a traditional coworking space. It&apos;s a place
                  where your workday can feel grounded, supported, and human.
                </p>
                <p className="font-montserrat text-base md:text-lg text-[#f4eee3] leading-relaxed">
                  Come in for a quiet morning of deep work, take a break with tea or
                  conversation, or stay connected to the rhythm of the community
                  around you.
                </p>
              </div>
            </div>
          </div>

          <div className="xl:flex-1 p-8 md:p-10 xl:p-12 flex flex-col">
            <h3 className="font-montserrat font-semibold text-lg md:text-xl text-neutral-700 mb-5">
              What&apos;s included
            </h3>
            <ul ref={listRef} className="space-y-4 mb-8">
              {includedFeatures.map((f) => (
                <FeatureRow
                  key={f.text}
                  text={f.text}
                  icon={f.icon}
                  iconAlt={f.iconAlt}
                />
              ))}
            </ul>

            <div ref={membershipRef} className="mt-auto border-t border-neutral-400/40 pt-6">
              <p className="font-montserrat text-xs text-neutral-600/80 leading-relaxed">
                Membership starts at $30/month or $100/year
              </p>
            </div>

            <div ref={ctaRef} className="mt-6 space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={JOIN_MAILTO}
                  className="flex-1 whitespace-nowrap bg-[#8d9984] text-[#f4eee3] px-6 py-4 rounded-full font-montserrat font-medium text-lg hover:bg-[#7a8671] transition-colors no-underline text-center"
                >
                  Join the community
                </a>
                <a
                  href="https://calendly.com/hearthcowork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 whitespace-nowrap border-2 border-neutral-700 text-neutral-700 bg-transparent px-6 py-4 rounded-full font-montserrat font-medium text-lg hover:bg-neutral-700/5 transition-colors no-underline text-center"
                >
                  Book a tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
