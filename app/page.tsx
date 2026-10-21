
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import { connection } from "next/server";
import { Zap, Wrench, House, Toolbox, HandFist, Headset, ShieldUser, LocationEdit, LocateIcon, Phone, MessageCircle } from "lucide-react"
import Image from "next/image";

async function CurrentYear(){
                  await connection();
                  return <>{new Date().getFullYear()}</>
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#191919]">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <Navbar />
        <div className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#F58220]">
              Electricals & Repair
            </p>

            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Powering Trust.
              <br />
              Repairing With Care.
            </h1>

            <p className="mt-6 max-w-lg leading-7 text-neutral-600">
              Reliable electrical appliance sales, expert repairs,
              and convenient doorstep service in Orumanayoor.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/917356859098"
                className="rounded-full bg-[#F58220] px-6 py-3.5 font-semibold text-white transition hover:bg-[#db6c12]"
              >
                Book a Service →
              </a>

              <a
                href="#services"
                className="rounded-full border border-neutral-300 px-6 py-3.5 font-semibold transition hover:border-[#F58220]"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="flex min-h-72 items-center justify-center rounded-3xl bg-neutral-100 ">
            <p className="text-center text-neutral-500">
              <img 
              className="h-full w-full rounded-2xl object-cover shadow-lg"
              src="/images/hero.png" 
              alt="" />
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <div className="flex w-full">
          <div className="w-full">
            <p className="text-sm uppercase tracking-widest text-orange-500 font-bold w-full text-center pb-1.5">Our Services</p>
            <h2 className="font-bold text-center text-3xl mb-10 ">
              What Can We Fix For You?
            </h2>

            {/* cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ">
                <Zap className="h-8 w-8 text-[#F58220]" />
                <h3 className="text-lg font-bold">Electrical Repairs</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Expert solutions for electrical faults, wiring issues, and everyday electrical problems.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <Wrench className="h-8 w-8 text-[#F58220]" />
                <h3 className="text-lg font-bold">Appliance Servicing</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Reliable servicing and repairs to help keep your home appliances running smoothly.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ">
                <House className="h-8 w-8 text-[#F58220]" />
                <h3 className="text-lg font-bold">Doorstep Service</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Convenient home visits for appliance repairs and electrical service in Orumanayoor.
                </p>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* why choose oruma */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <div>
          <div className="w-full">
            <p className="text-sm uppercase tracking-widest text-orange-500 font-bold w-full text-center pb-1.5">Why Choose Us?</p>
            <h2 className="font-bold text-center text-3xl mb-10 ">
              Service You Can Count On
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-neutral-600">
              We are committed to providing reliable electrical repairs,
              quality appliance servicing, and convenient doorstep support.
              Our goal is to make every service experience simple, smooth,
              and trustworthy for our customers.

            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

              <div className="rounded-2xl group border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:bg-[#F58220] hover:text-white hover:shadow-md">
                <Toolbox className="h-8 w-8 text-[#F58220] group-hover:text-white" />
                <h3 className="text-lg font-bold mt-4">Reliable Service</h3>
                <p className="mt-2 text-sm group-hover:text-white leading-6">Dependable electrical repairs and appliance servicing you can rely on</p>
              </div>

              <div className="rounded-2xl group border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:bg-[#F58220] hover:text-white hover:shadow-md">
                <ShieldUser className="h-8 w-8 text-[#F58220] group-hover:text-white " />
                <h3 className="text-lg font-bold mt-4">Quality Work</h3>
                <p className="mt-2 text-sm group-hover:text-white leading-6">  Careful workmanship and attention to detail for reliable, long-lasting repairs.
                </p>
              </div>

              <div className="rounded-2xl group border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:bg-[#F58220] hover:text-white hover:shadow-md">
                <Headset className="h-8 w-8 text-[#F58220] group-hover:text-white " />
                <h3 className="text-lg font-bold mt-4">Customer Support</h3>
                <p className="mt-2 text-sm group-hover:text-white leading-6">  Friendly assistance and clear guidance to help you with your service needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* owner */}

      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          {/* Founder Photo */}
          <div className="flex justify-center">
            <img
              src="/images/OrOwn.png"
              alt="Founder of Oruma Electricals & Repair Shop"
              className="h-full w-full max-w-md rounded-2xl object-cover shadow-lg"
            />
          </div>

          {/* Founder Quote */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#F58220]">
              A Message From Our Founder
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-[#191919] md:text-4xl">
              <blockquote className="text-xl leading-relaxed text-gray-600 md:text-2xl">
                “Asli kamyabi wahi hai, <span className="text-[#F58220]"> jab aapki mehnat apno ke sapno ko pankh de.”</span>
              </blockquote>
            </h2>

            <div className="mb-6 h-1 w-16 rounded-full bg-[#F58220]" />
            <div className="mt-8">
              <h3 className="text-lg font-bold text-[#191919]">
                Abdullah Ansari
              </h3>
              <p className="mt-1 text-sm font-medium text-[#F58220]">
                Founder, Oruma Electricals & Repair Shop
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-50 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#F58220]">
              Get in Touch
            </p>

            <h2 className="text-3xl font-bold text-[#191919] md:text-5xl">
              Need Help With Electrical Work?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Have a repair issue or need a service at your doorstep?
              Get in touch with us. We're here to help.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Address */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-2xl">
                <LocateIcon />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#191919]">
                Visit Our Shop
              </h3>

              <p className="mb-5 leading-relaxed text-gray-600">
                Orumanayoor, Thrissur District,
                Kerala, India
              </p>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#F58220] hover:underline"
              >
                Get Directions →
              </a>
            </div>
            {/* phone */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-2xl">
                <Phone />
              </div>

              <h3 className="mb-3 text-xl font-bold text-[#191919]">
                Call Us
              </h3>
              <p className="mb-5 text-gray-600">
                Speak with us about you repair needs
              </p>
              <a
                href="tel:+917356859098"
                className="font-semibold text-[#F58220] hover:underline"
              >
                +91 73568 59098
              </a>
            </div>
            {/* Whatsapp */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 test-2xl">
                <MessageCircle />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#191919]">
                WhatsApp Us
              </h3>

              <p className="mb-5 text-gray-600">
                Message us for service enquiries and assistance.
              </p>

              <a
                href="https://wa.me/917356859098?text=Hello%2C%20I%20need%20help%20with%20an%20electrical%20repair."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-[#F58220] px-6 py-3 font-semibold text-white transition hover:bg-[#191919]"
              >
                Chat on Whatsapp
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-[#191919] px-6 py-10 text-white">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-3">

            {/* Business Info */}
            <div>
              <h3 className="text-xl font-bold">
                Oruma Electricals
                <span className="text-[#F58220]"> & Repair Shop</span>
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
                Reliable electrical repairs, appliance servicing,
                and doorstep service you can count on.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 font-semibold">Quick Links</h4>

              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#home" className="transition hover:text-[#F58220]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="transition hover:text-[#F58220]">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition hover:text-[#F58220]">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-4 font-semibold">Get In Touch</h4>

              <p className="text-sm text-gray-400">
                Orumanayoor, Thrissur, Kerala
              </p>

              <a
                href="tel:+917356859098"
                className="mt-3 inline-block text-sm text-gray-400 transition hover:text-[#F58220]"
              >
                +91 73568 59098
              </a>

              <div>
                <a
                  href="https://wa.me/917356859098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block rounded-lg bg-[#F58220] px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#191919]"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

          </div>

          {/* Copyright & AARC TECH Branding */}
          <div className="flex flex-col items-center justify-between gap-3 pt-6 text-center text-xs text-gray-500 md:flex-row md:text-left">
            <p>
              ©{" "}
              <Suspense fallback="2026">
                  <CurrentYear/>
              </Suspense>{" "} Oruma Electricals & Repair Shop.
                    All rights reserved.
                  </p >

                    <p>
                      Website crafted by{" "}
                      <a
                        href="https://www.instagram.com/aarc.tech/?hl=en "
                        className="font-semibold text-[#F58220] transition hover:text-white"
                      >
                        AARC TECH
                      </a>
                    </p>
          </div>

        </div>
      </footer>

      {/* */}
    </main>
  );
}
