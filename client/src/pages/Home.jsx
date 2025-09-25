// client/src/pages/Home.jsx
import React from 'react'

function GoogleCloudCard(){
  return (
    <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <svg className="w-12 h-12 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 14a4 4 0 010-8 4 4 0 014 4h6a4 4 0 010 8H8a4 4 0 01-2-7.464" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div>
          <h3 className="text-lg font-semibold">Google Cloud Services</h3>
          <p className="text-sm text-gray-600">Managed cloud hosting, CI/CD pipelines, storage & global CDN — ideal for scaling YoungAndCode.</p>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-blue-600">Hello Tailwind</h1>
      <ul className="mt-4 text-sm space-y-2 text-gray-700">
        <li>• Secure and scalable hosting</li>
        <li>• Automated backups & versioning</li>
        <li>• Fast static asset delivery (CDN)</li>
      </ul>
    
      <div className="mt-6 text-right">
        <a className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md text-sm" href="/consultants">Learn more</a>
      </div>
    </div>
  )
}

export default function Home(){
  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-r from-sky-50 to-emerald-50 py-20">
        <div className="max-w-6xl mx-auto px-6 lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight">
              Build skills. Book tutors. Grow futures — global, online, and AI-assisted.
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              YoungAndCode combines top-tier tutoring, practical tech bootcamps, and health consultancy — all in one platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a className="px-6 py-3 bg-emerald-600 text-white rounded-lg" href="/programs">Explore Bootcamps</a>
              <a className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg" href="/explore">Find a Tutor</a>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <strong>Start:</strong> Free preview → Upgrade to cohort for certificates.
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/2">
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="text-lg font-semibold mb-3">Why YoungAndCode?</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Local tutors, global reach</li>
                <li>• AI-powered recommendations & summaries</li>
                <li>• Secure payments & automated payouts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Our Services</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <h3 className="text-lg font-semibold">Tutoring Marketplace</h3>
            <p className="mt-2 text-sm text-gray-600">Find vetted tutors for academics and tech — book instantly with transparent pricing.</p>
            <div className="mt-4 text-right">
              <a href="/explore" className="text-blue-600 text-sm">Explore tutors →</a>
            </div>
          </div>

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <h3 className="text-lg font-semibold">Tech Bootcamps</h3>
            <p className="mt-2 text-sm text-gray-600">Practical cohorts: Web dev, Cybersecurity, DevOps, AI fundamentals and more.</p>
            <div className="mt-4 text-right">
              <a href="/programs" className="text-blue-600 text-sm">View programs →</a>
            </div>
          </div>

          {/* Google Cloud Services card — highlighted */}
          <GoogleCloudCard />
        </div>
      </section>

      {/* FEATURES ROW */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div className="p-4 text-center">
            <h4 className="font-semibold">Secure Payments</h4>
            <p className="text-sm text-gray-600">Paystack, Stripe & Flutterwave.</p>
          </div>
          <div className="p-4 text-center">
            <h4 className="font-semibold">24/7 Messaging</h4>
            <p className="text-sm text-gray-600">In-app chat, email and WhatsApp notifications.</p>
          </div>
          <div className="p-4 text-center">
            <h4 className="font-semibold">AI Assistance</h4>
            <p className="text-sm text-gray-600">Tutor recommendations & weekly summaries.</p>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl text-white p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Ready to start?</h3>
              <p className="text-sm">Join our next bootcamp or book a free tutor trial.</p>
            </div>
            <div>
              <a href="/signup" className="px-5 py-3 bg-white text-blue-700 rounded-md font-semibold">Get started — it's free</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
