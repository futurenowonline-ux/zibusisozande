"use client";

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `Hi Zibusisozande, my name is ${formData.name}. ${formData.subject ? `Subject: ${formData.subject}. ` : ''}Message: ${formData.message}`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/27712345678?text=${encodedText}`, '_blank');
    };

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:info@zibusisozande.co.za?subject=${encodeURIComponent(formData.subject || 'Website Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\n\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-[#f8f9fa] py-16 md:py-24 border-b">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-dark mb-4">Contact Zibusisozande</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We'd love to hear from you. Whether you have a question about our products, pricing, or bulk orders, our team is ready to help.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

                    {/* Left Column: Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-[#fdfdfd] p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h2 className="text-2xl font-bold text-dark mb-8">Get In Touch</h2>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        📍
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dark mb-1">Our Presence</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Durban, KwaZulu-Natal<br />
                                            Serving Public & Private Sectors Provincial-wide
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        📞
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dark mb-1">Call Us</h3>
                                        <p className="text-gray-600 text-sm hover:text-primary transition font-medium">
                                            <a href="tel:+27712345678">071 234 5678</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        ✉️
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dark mb-1">Email Us</h3>
                                        <p className="text-gray-600 text-sm hover:text-primary transition font-medium">
                                            <a href="mailto:info@zibusisozande.co.za">info@zibusisozande.co.za</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        ⏰
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dark mb-1">Office Hours</h3>
                                        <p className="text-gray-600 text-sm">
                                            Mon - Fri: 08:00 - 17:00<br />
                                            Sat: 09:00 - 13:00
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Icons Placeholder */}
                            <div className="mt-10 pt-8 border-t flex gap-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-secondary cursor-pointer transition">FB</div>
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-secondary cursor-pointer transition">WA</div>
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-secondary cursor-pointer transition">YT</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-dark mb-2">Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-dark mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-dark mb-2">Phone Number</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition"
                                            placeholder="Optional"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-dark mb-2">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition"
                                            placeholder="Quote Request"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-dark mb-2">Message *</label>
                                    <textarea
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white outline-none transition h-40"
                                        placeholder="Tell us about your requirements..."
                                    ></textarea>
                                </div>

                                {/* Dual Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <button
                                        onClick={handleWhatsAppSubmit}
                                        className="flex-1 bg-green-500 text-white font-bold py-4 rounded-xl hover:bg-green-600 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-green-200"
                                    >
                                        <span>💬</span> Chat on WhatsApp
                                    </button>
                                    <button
                                        onClick={handleEmailSubmit}
                                        className="flex-1 bg-primary text-white font-bold py-4 rounded-xl hover:bg-blue-900 transition flex items-center justify-center gap-2"
                                    >
                                        <span>✉️</span> Send via Email
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* Map Section Placeholder */}
            <section className="h-[400px] w-full bg-gray-200 grayscale">
                <div className="w-full h-full flex items-center justify-center text-gray-500 font-medium">
                    Map Section (Interactive Map Integration)
                </div>
            </section>
        </div>
    );
}
