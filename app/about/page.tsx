export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-dark mb-8 text-center">About Zibusisozande</h1>

                <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-700 leading-relaxed">
                    <p>
                        Welcome to <strong>Zibusisozande</strong>, your trusted partner in industrial safety and corporate identity.
                        Based in Richards Bay, we specialize in supplying high-quality Personal Protective Equipment (PPE)
                        and corporate uniforms to businesses of all sizes.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8">Our Mission</h2>
                    <p>
                        Our mission is to ensure every worker returns home safe. We achieve this by vetting every product
                        we supply for compliance, durability, and comfort. We believe that safety gear should never compromise
                        on quality.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8">Why Choose Us?</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Quality Assurance:</strong> We stock brands that meet SABS and international safety standards.</li>
                        <li><strong>Customer Service:</strong> We are a B2B-focused company that values long-term relationships.</li>
                        <li><strong>Turnaround Time:</strong> We understand that safety cannot wait, which is why we prioritize efficient delivery.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
