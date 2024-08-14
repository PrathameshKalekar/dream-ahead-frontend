import React from "react";

export default function Contact() {
    return (
        <div className="font-sans text-gray-800">
            <header className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white text-center py-20">
                <h1 className="text-4xl font-bold">Contact Us</h1>
            </header>
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
                    <p className="text-lg mb-6">
                        We would love to hear from you! Whether you have questions about our programs or need more information, feel free to reach out.
                    </p>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
                            <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-lg" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
                            <textarea id="message" name="message" rows="4" className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
                        </div>
                        <button type="submit" className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
            <footer className="bg-orange-600 text-white text-center py-6">
                <p className="mb-2">
                    Contact us at: <a href="mailto:info@dreamaheadacademy.com" className="underline">info@dreamaheadacademy.com</a>
                </p>
            </footer>
        </div>
    );
}
