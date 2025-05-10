import Link from "next/link";
import { GhostButton } from "./ui/Button";

export default function GhostSKULandingPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <section className="py-24 px-6 text-center max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                    Stop Losing Money to Dead SKUs.
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-700">
                    GhostSKU finds and fixes unprofitable products—before they sink your margins.
                </p>
                <GhostButton className="text-lg px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition">
                    <Link href='/waitlist'>Join the Waitlist – It’s Free</Link>
                </GhostButton>
                <p className="mt-4 text-sm text-gray-500">
                    ⚡ No credit card. Setup in 2 minutes. Limited early access.
                </p>
            </section>

            {/* Trust Section */}
            <section className="bg-white py-6 px-6 text-center text-sm text-gray-600">
                <p>🔒 Trusted by 50+ lean DTC brands •  ⭐ "Game-changer" — Ava R., Beta Tester</p>
            </section>

            {/* Problem Section */}
            <section className="bg-gray-50 py-16 px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-6">Every bad SKU is a silent killer.</h2>
                    <ul className="space-y-4 text-lg text-gray-700">
                        <li>🔥 You're wasting ad spend on products that never convert.</li>
                        <li>📉 95% of your SKUs might be draining profits.</li>
                        <li>🤯 You’re guessing what to cut, test, or scale—and it’s costing you.</li>
                    </ul>
                    <p className="mt-8 font-medium text-gray-800">
                        GhostSKU turns data into decisions—automatically.
                    </p>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 px-6 bg-white">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold">How It Works</h2>
                    <p className="mt-2 text-gray-600 max-w-xl mx-auto">
                        Get clarity in minutes—no manual spreadsheets or guesswork.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">1. Connect Your Store</h3>
                        <p className="text-gray-600">Works instantly with Shopify or WooCommerce.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">2. Analyze + Grade</h3>
                        <p className="text-gray-600">AI reviews every SKU: Kill, Optimize, or Keep.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">3. Take Smart Action</h3>
                        <p className="text-gray-600">Auto-tests pricing, flags losers, emails weekly wins.</p>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <GhostButton className="text-lg px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition">
                        <Link href="/waitlist">Join the Early Access List</Link>
                    </GhostButton>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-100 py-20 px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold">Built for Lean Teams</h2>
                    <p className="mt-2 text-gray-600 max-w-xl mx-auto">
                        Everything you need to cut waste and grow profits—without hiring an analyst.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    <Feature title="Dead SKU Alerts" description="Identify margin-killers instantly." />
                    <Feature title="Auto Pricing Tests" description="Optimize prices without guessing." />
                    <Feature title="AI SKU Grading" description="Get automated Kill/Optimize/Keep tags." />
                    <Feature title="Weekly Profit Reports" description="Visual, actionable insights delivered." />
                </div>
            </section>

            {/* Pricing Section */}
            <section className="bg-white py-20 px-6 text-center">
                <h2 className="text-3xl font-semibold mb-8">Simple, Risk-Free Pricing</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <PricingCard
                        title="Starter"
                        price="Free"
                        features={["10 SKUs", "1 store integration", "Weekly alerts"]}
                    />
                    <PricingCard
                        title="Pro"
                        price="$19/mo"
                        features={["100 SKUs", "A/B pricing tests", "Email + Slack alerts"]}
                        highlight
                    />
                </div>
                <div className="mt-10">
                    <GhostButton className="text-lg px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition">
                        <Link href='/waitlist'>Claim Your Spot – Free</Link>
                    </GhostButton>
                    <p className="text-sm text-gray-500 mt-2">Early bird pricing ends soon.</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-10 text-sm text-gray-500">
                &copy; {new Date().getFullYear()} GhostSKU. Built for lean ecom teams.
            </footer>
        </main>
    );
}

// --- Components ---
function Feature({ title, description }) {
    return (
        <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    );
}

function PricingCard({
    title,
    price,
    features,
    highlight = false,
}) {
    return (
        <div
            className={`border p-6 rounded-xl shadow bg-white transition transform hover:scale-105 ${highlight ? "border-blue-600 shadow-lg" : ""
                }`}
        >
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-xl text-blue-600 mb-4">{price}</p>
            <ul className="text-gray-700 space-y-2">
                {features.map((f, i) => (
                    <li key={i}>✔ {f}</li>
                ))}
            </ul>
        </div>
    );
}
