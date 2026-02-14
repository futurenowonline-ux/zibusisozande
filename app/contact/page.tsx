export default function Contact() {
    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-dark mb-12">Get In Touch</h1>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

                    {/* Contact Info */}
                    <div className="bg-primary text-white p-10">
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                        <p className="mb-8 text-blue-100">
                            Ready to equip your team? Fill out the form or contact us directly.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📍</span>
                                <div>
                                    <h3 className="font-semibold">Visit Us</h3>
                                    <p className="text-blue-100 text-sm">123 Business Park, Safety Street<br />Richards Bay, KwaZulu-Natal</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📞</span>
                                <div>
                                    <h3 className="font-semibold">Call Us</h3>
                                    <p className="text-blue-100 text-sm">071 234 5678</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="text-2xl">✉️</span>
                                <div>
                                    <h3 className="font-semibold">Email Us</h3>
                                    <p className="text-blue-100 text-sm">info@zibusisozande.co.za</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-10">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
                                <input type="text" className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-primary outline-none" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                                <input type="email" className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-primary outline-none" placeholder="john@company.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                                <textarea className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-primary outline-none h-32" placeholder="I am interested in..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-secondary text-dark font-bold py-3 rounded hover:bg-yellow-400 transition">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
