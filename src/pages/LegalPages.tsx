import React from "react";
import logo from "@/assets/logo.png";

// --- Brand theme extracted from Flavoured Ice Co. logo ---
const theme = {
    bg: "bg-[#D6EAF8]",          // light ice blue background
    card: "bg-white",            // content card background
    text: "text-[#1C4A6E]",      // deep ice blue (primary text)
    muted: "text-[#5D7D94]",     // muted subtitle text
    accent: "from-[#A9CCE3] via-[#D6EAF8] to-[#FFFFFF]", // frosty gradient accent
    border: "border-[#A9CCE3]",  // frosty blue border
    link: "text-[#1C4A6E] hover:text-[#163A56]", // branded links
};

const PageShell: React.FC<{ title: string; children: React.ReactNode; subtitle?: string }>
    = ({ title, subtitle, children }) => (
    <div className={`${theme.bg} min-h-screen ${theme.text}`}>
        <header className={`relative overflow-hidden border-b ${theme.border}`}>
            <div className={`absolute inset-0 opacity-30 bg-gradient-to-br ${theme.accent}`} />
            <div className="relative mx-auto max-w-5xl px-6 py-12 flex flex-col items-center text-center">

                {/* Logo at the top */}
                <a href="/" className="mb-6 inline-block">
                    <img
                        src={logo}
                        alt="Flavoured Ice Co. Logo"
                        className="h-20 md:h-24 w-auto drop-shadow-lg"
                    />
                </a>

                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
                {subtitle && (
                    <p className={`mt-2 ${theme.muted}`}>{subtitle}</p>
                )}
            </div>
        </header>

        <main className="mx-auto max-w-5xl px-6 py-10">
            <div className={`${theme.card} rounded-2xl shadow-sm border ${theme.border} p-6 md:p-8`}>
                {children}

                {/* Back to home button */}
                <div className="mt-10 text-center">
                    <a
                        href="/"
                        className="inline-block px-5 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-[#A9CCE3] to-[#D6EAF8] text-[#163A56] hover:opacity-90"
                    >
                        ← Back to Home
                    </a>
                </div>
            </div>
        </main>

        <footer className={`mx-auto max-w-5xl px-6 pb-12 pt-2 text-xs ${theme.muted}`}>
            <div className="flex flex-wrap items-center gap-3 justify-center">
                <a href="/privacy-policy" className={theme.link}>Privacy Policy</a>
                <span>•</span>
                <a href="/terms-and-conditions" className={theme.link}>Terms & Conditions</a>
                <span>•</span>
                <a href="/returns-delivery" className={theme.link}>Returns & Delivery</a>
                <span>•</span>
                <a href="/disclaimer" className={theme.link}>Disclaimer</a>
            </div>
            <p className="mt-2 text-center">&copy; {new Date().getFullYear()} Flavoured Ice Co.</p>
        </footer>
    </div>
);


// --- Small components ---
const Section: React.FC<{ id?: string; title: string; children: React.ReactNode }>
    = ({ id, title, children }) => (
    <section id={id} className="scroll-mt-28">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight mt-8 first:mt-0">{title}</h2>
        <div className="mt-3 space-y-4 leading-relaxed">{children}</div>
    </section>
);

const InfoCallout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className={`mt-6 rounded-xl border-l-4 border-[#1C4A6E] ${theme.card} shadow-sm p-4`}>{children}</div>
);

// --- 1) Privacy Policy ---
export const PrivacyPolicyPage: React.FC = () => (
    <PageShell
        title="Privacy Policy"
        subtitle="POPIA-aligned privacy notice for customers and site visitors"
    >
        <p>
            Flavoured Ice Co. values your privacy. This policy explains how we
            collect, use, and protect your personal information in line with South
            Africa’s Protection of Personal Information Act, 2013 (POPIA).
        </p>

        <Section title="Information We Collect" id="info-we-collect">
            <ul className="list-disc pl-5 space-y-2">
                <li>Contact details (name, email, phone number, delivery address)</li>
                <li>Order, billing and delivery information</li>
                <li>Website usage data (cookies, device & analytics data)</li>
            </ul>
        </Section>

        <Section title="How We Use Your Information" id="how-we-use">
            <p>We use your information to:</p>
            <ul className="list-disc pl-5 space-y-2">
                <li>Process and fulfil orders and arrange delivery</li>
                <li>Provide support and respond to enquiries</li>
                <li>Improve our website and services (analytics)</li>
                <li>Send promotions if you have <em>explicitly opted in</em></li>
            </ul>
        </Section>

        <Section title="Cookies & Tracking" id="cookies">
            <p>
                We use cookies and similar technologies to improve your browsing
                experience and measure site performance. You can control cookies via
                your browser settings. Essential cookies are required for the site to
                function.
            </p>
        </Section>

        <Section title="Sharing with Third Parties" id="third-parties">
            <p>
                We only share what is necessary with trusted providers such as payment
                processors, couriers, and IT/hosting partners. We do not sell your
                personal information.
            </p>
        </Section>

        <Section title="Your POPIA Rights" id="your-rights">
            <p>You may request to access, correct, or delete your personal data. Contact:</p>
            <ul className="list-none pl-0">
                <li>Email: <a className={theme.link} href="mailto:info@flavouredice.co.za">info@flavouredice.co.za</a></li>
                <li>Subject line: <em>POPIA Request</em></li>
            </ul>
        </Section>

        <Section title="Data Security" id="security">
            <p>
                We implement reasonable technical and organisational safeguards to
                protect information. No method of transmission is 100% secure; use the
                site at your own risk.
            </p>
        </Section>

        <Section title="International Transfers" id="transfers">
            <p>
                If data is processed outside South Africa (e.g., cloud hosting), we use
                appropriate safeguards consistent with POPIA.
            </p>
        </Section>

        <Section title="Changes to this Policy" id="changes">
            <p>
                We may update this policy from time to time. The version date appears
                below.
            </p>
            <p className={`text-sm ${theme.muted}`}>Last Updated: 24 August 2025</p>
        </Section>

        {/*<InfoCallout>*/}
        {/*    <strong>Note:</strong> This policy is a template and not legal advice. Please*/}
        {/*    ask your attorney to review for your specific operations.*/}
        {/*</InfoCallout>*/}
    </PageShell>
);

// --- 2) Terms & Conditions ---
export const TermsAndConditionsPage: React.FC = () => (
    <PageShell
        title="Terms & Conditions"
        subtitle="Website use and online purchasing terms"
    >
        <p>
            By using this website or purchasing from Flavoured Ice Co., you agree to
            these terms. If you disagree, please do not use the site.
        </p>

        <Section title="Ownership & Intellectual Property" id="ip">
            <p>
                All content, logos, images, and product names are owned by Flavoured
                Ice Co. and may not be used without written permission.
            </p>
        </Section>

        <Section title="Orders & Payment" id="orders">
            <ul className="list-disc pl-5 space-y-2">
                <li>Orders are confirmed once payment is received and verified.</li>
                <li>We accept the payment methods shown at checkout.</li>
                <li>Prices include VAT where applicable and are subject to change.</li>
            </ul>
        </Section>

        <Section title="Delivery" id="delivery">
            <p>
                We deliver to the regions indicated at checkout. Delivery timelines are
                estimates and may be affected by factors beyond our control.
            </p>
            <p>
                Please ensure someone is available to receive frozen goods at the
                delivery address.
            </p>
        </Section>

        <Section title="Returns & Refunds" id="returns-refunds">
            <p>
                Due to the perishable nature of frozen products, returns are limited to
                defective, damaged on delivery, or incorrect orders. See our Returns,
                Refunds & Delivery Policy for details.
            </p>
        </Section>

        <Section title="Limitation of Liability" id="liability">
            <p>
                To the maximum extent permitted by South African law, we are not liable
                for indirect, incidental, or consequential damages arising from your use
                of the site or products.
            </p>
        </Section>

        <Section title="Governing Law" id="law">
            <p>These terms are governed by the laws of the Republic of South Africa.</p>
        </Section>
    </PageShell>
);

// --- 3) Returns, Refunds & Delivery ---
export const ReturnsDeliveryPage: React.FC = () => (
    <PageShell
        title="Returns, Refunds & Delivery"
        subtitle="How we handle refunds, exchanges, cancellations and shipping"
    >
        <Section title="Refunds" id="refunds">
            <ul className="list-disc pl-5 space-y-2">
                <li>Refunds apply to damaged, defective, or incorrect orders.</li>
                <li>Claims must be made within 24 hours of delivery with photos.</li>
                <li>Approved refunds are processed to the original payment method.</li>
            </ul>
        </Section>

        <Section title="Exchanges" id="exchanges">
            <p>
                Where feasible and subject to stock, we may replace faulty or incorrect
                items.
            </p>
        </Section>

        <Section title="Cancellations" id="cancellations">
            <p>
                Orders can be cancelled within 2 hours of placement unless already
                dispatched.
            </p>
        </Section>

        <Section title="Delivery" id="delivery-policy">
            <ul className="list-disc pl-5 space-y-2">
                <li>We deliver to selected regions. Fees may apply.</li>
                <li>Delivery windows are communicated at checkout or by email/SMS.</li>
                <li>Ensure someone is available to receive frozen products.</li>
            </ul>
        </Section>
    </PageShell>
);

// --- 4) Disclaimer (Food Safety + Website) ---
export const DisclaimerPage: React.FC = () => (
    <PageShell
        title="Disclaimer"
        subtitle="Food safety, allergy and website information notices"
    >
        <Section title="Food Safety & Allergies" id="food-safety">
            <p>
                Products are manufactured and packaged in line with South African food
                safety standards. Ingredients are listed on packaging and/or product
                pages.
            </p>
            <p>
                <strong>Allergen Notice:</strong> Products may contain or be made in
                facilities handling dairy, nuts, soy, or gluten. Consumers are
                responsible for checking ingredient information to ensure suitability
                for their dietary needs.
            </p>
        </Section>

        <Section title="Health & Consumption" id="health">
            <ul className="list-disc pl-5 space-y-2">
                <li>Store products at recommended freezing temperatures.</li>
                <li>Children should consume under adult supervision.</li>
                <li>
                    Alcohol‑infused products (if offered) are not for sale to persons
                    under 18. Proof of ID may be required on delivery.
                </li>
            </ul>
        </Section>

        <Section title="Website Content" id="website-content">
            <p>
                Information is provided "as is" and may change without notice. Images
                are illustrative and actual product appearance may vary.
            </p>
        </Section>
    </PageShell>
);

// --- 5) Optional Cookie Banner ---
export const CookieBanner: React.FC<{ onAccept?: () => void }> = ({ onAccept }) => (
    <div className="fixed inset-x-0 bottom-0 z-50">
        <div className="mx-auto max-w-5xl px-4 pb-4">
            <div className={`rounded-2xl shadow-lg border ${theme.border} ${theme.card} p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3`}>
                <p className="text-sm md:text-[0.95rem]">
                    We use cookies to improve your experience and analyse site traffic.
                    By continuing, you consent to cookies. <a href="/privacy-policy" className={theme.link}>Learn more</a>.
                </p>
                <div className="flex gap-2">
                    <button
                        onClick={onAccept}
                        className="px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-[#A9CCE3] to-[#D6EAF8] text-[#163A56] hover:opacity-95"
                        aria-label="Accept cookies"
                    >
                        Accept
                    </button>
                    <a
                        href="/privacy-policy#cookies"
                        className={`px-4 py-2 rounded-xl text-sm font-medium border ${theme.border} hover:bg-white/50`}
                    >
                        Manage
                    </a>
                </div>
            </div>
        </div>
    </div>
);

// --- 6) Combined All‑in‑One Page ---
export const AllLegalPage: React.FC = () => (
    <PageShell
        title="Legal & Policies"
        subtitle="Everything in one place: Privacy Policy, Terms, Returns & Delivery, and Disclaimer"
    >
        <nav className="mb-6">
            <div className="flex flex-wrap gap-2">
                <a href="#privacy" className={`px-3 py-1.5 rounded-full text-sm border ${theme.border} hover:bg-white/50`}>Privacy</a>
                <a href="#terms" className={`px-3 py-1.5 rounded-full text-sm border ${theme.border} hover:bg-white/50`}>Terms</a>
                <a href="#returns" className={`px-3 py-1.5 rounded-full text-sm border ${theme.border} hover:bg-white/50`}>Returns & Delivery</a>
                <a href="#disclaimer" className={`px-3 py-1.5 rounded-full text-sm border ${theme.border} hover:bg-white/50`}>Disclaimer</a>
            </div>
        </nav>

        {/* Privacy */}
        <div id="privacy" className="scroll-mt-28">
            <h2 className="text-2xl font-semibold">Privacy Policy</h2>
            <p className="mt-3">
                We explain how we collect, use, and protect personal information under
                POPIA. For detailed sections, see the dedicated Privacy page.
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>Data we collect and why</li>
                <li>Cookies and analytics</li>
                <li>Sharing with payment, delivery and hosting partners</li>
                <li>Your rights: access, correction, deletion</li>
            </ul>
            <a href="/privacy-policy" className={`inline-block mt-3 ${theme.link}`}>View full Privacy Policy →</a>
        </div>

        <hr className={`my-8 border-dashed ${theme.border}`} />

        {/* Terms */}
        <div id="terms" className="scroll-mt-28">
            <h2 className="text-2xl font-semibold">Terms & Conditions</h2>
            <p className="mt-3">
                By using the site or purchasing from us, you agree to our terms
                regarding orders, delivery, refunds, and liability.
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>Orders confirmed on payment</li>
                <li>Delivery windows are estimates</li>
                <li>Perishables: limited returns</li>
                <li>South African law applies</li>
            </ul>
            <a href="/terms-and-conditions" className={`inline-block mt-3 ${theme.link}`}>Read Terms & Conditions →</a>
        </div>

        <hr className={`my-8 border-dashed ${theme.border}`} />

        {/* Returns */}
        <div id="returns" className="scroll-mt-28">
            <h2 className="text-2xl font-semibold">Returns, Refunds & Delivery</h2>
            <p className="mt-3">
                How we handle refunds, exchanges, cancellations and shipping for
                frozen goods.
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>Refunds for damaged/incorrect items within 24 hours</li>
                <li>Exchanges where feasible, subject to stock</li>
                <li>Cancel within 2 hours unless dispatched</li>
                <li>Ensure someone can receive frozen products</li>
            </ul>
            <a href="/returns-delivery" className={`inline-block mt-3 ${theme.link}`}>View full Returns & Delivery →</a>
        </div>

        <hr className={`my-8 border-dashed ${theme.border}`} />

        {/* Disclaimer */}
        <div id="disclaimer" className="scroll-mt-28">
            <h2 className="text-2xl font-semibold">Disclaimer</h2>
            <p className="mt-3">
                Food safety and allergy info, health/consumption guidance, and website
                content disclaimer.
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>Ingredients listed; check suitability for your diet</li>
                <li>Allergen notice: may contain dairy, nuts, soy, gluten</li>
                <li>Store frozen; supervise children</li>
                <li>Alcohol‑infused items (if any) not for under‑18s</li>
            </ul>
            <a href="/disclaimer" className={`inline-block mt-3 ${theme.link}`}>Read full Disclaimer →</a>
        </div>
    </PageShell>
);
