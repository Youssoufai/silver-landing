'use client';
import { useState, useTransition } from 'react';
import { saveWaitlistEntry } from './actions';
function WaitlistSection() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [pending, startTransition] = useTransition();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        startTransition(async () => {
            try {
                await saveWaitlistEntry(form);
                setSubmitted(true);
            } catch (err) {
                console.error('Submission failed', err);
                alert('Something went wrong. Try again!');
            }
        });
    };

    return (
        <section className="bg-blue-50 py-20 px-6">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    🚀 Get Early Access to GhostSKU
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                    Join 1,000+ brands fixing unprofitable products before they kill profits.
                </p>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2 text-left">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            required
                            value={form.firstName}
                            onChange={handleChange}
                            className="px-4 py-3 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            required
                            value={form.lastName}
                            onChange={handleChange}
                            className="px-4 py-3 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="px-4 py-3 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            className="px-4 py-3 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2"
                        />
                        <button
                            type="submit"
                            disabled={pending}
                            className="bg-blue-600 text-white w-full py-3 rounded-xl font-semibold hover:bg-blue-700 transition sm:col-span-2"
                        >
                            {pending ? 'Joining...' : 'Join the Waitlist →'}
                        </button>
                    </form>
                ) : (
                    <p className="text-green-600 font-semibold text-lg mt-6">
                        ✅ You're on the list! We'll notify you first.
                    </p>
                )}

                <p className="mt-4 text-sm text-gray-500">
                    No spam. Just early access & weekly insights.
                </p>

                <div className="mt-8 flex justify-center gap-4 flex-wrap text-sm text-gray-500">
                    <span>💼 Trusted by ecom founders</span>
                    <span>🔐 Secure. Private. Confidential.</span>
                    <span>🚀 Built for profit-first growth</span>
                </div>
            </div>
        </section>
    );
}

export default WaitlistSection;
