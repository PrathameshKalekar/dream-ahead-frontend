import React from "react";

export default function Home() {
    return (
        <div className="font-sans text-gray-800">
            <header className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white text-center py-20">
                <h1 className="text-4xl font-bold mb-4">Welcome to Dream Ahead Academy!</h1>
                <p className="text-xl mb-6">Brightening the Future with Fun and Learning</p>
                <button className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition">
                    Get Started
                </button>
            </header>
            <section className="flex flex-wrap justify-around py-16 bg-yellow-50">
                <div className="w-full sm:w-1/3 p-4 bg-orange-100 text-center rounded-lg shadow-md mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Interactive Learning</h2>
                    <p>Fun and engaging methods to help kids learn better.</p>
                </div>
                <div className="w-full sm:w-1/3 p-4 bg-orange-100 text-center rounded-lg shadow-md mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Experienced Tutors</h2>
                    <p>Qualified and friendly teachers for the best learning experience.</p>
                </div>
                <div className="w-full sm:w-1/3 p-4 bg-orange-100 text-center rounded-lg shadow-md mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Flexible Scheduling</h2>
                    <p>Classes that fit your schedule.</p>
                </div>
            </section>
            <section className="py-16 bg-orange-100 text-center">
                <h2 className="text-3xl font-semibold mb-4">What Parents Say</h2>
                <blockquote className="italic text-lg mb-4">
                    "Dream Ahead Academy has transformed my child's learning experience!"
                </blockquote>
            </section>
            <footer className="bg-orange-600 text-white text-center py-6">
                <p className="mb-2">
                    Contact us at: <a href="mailto:info@dreamaheadacademy.com" className="underline">info@dreamaheadacademy.com</a>
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="text-white hover:text-yellow-300 transition"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="text-white hover:text-yellow-300 transition"><i className="fab fa-twitter"></i></a>
                </div>
            </footer>
        </div>
    );
}
