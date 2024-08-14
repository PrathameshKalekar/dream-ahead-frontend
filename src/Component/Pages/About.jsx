import React from "react";

export default function About() {
    return (
        <div className="font-sans text-gray-800">
            <header className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white text-center py-20">
                <h1 className="text-4xl font-bold">About Us</h1>
            </header>
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-lg mb-6">
                        At Dream Ahead Academy, we are dedicated to providing quality education and fostering a love for learning. Our mission is to help every child reach their full potential in a supportive and engaging environment.
                    </p>
                    <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
                    <p className="text-lg">
                        Our team of experienced and passionate educators is committed to delivering personalized learning experiences. We believe in making education enjoyable and impactful for every student.
                    </p>
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
