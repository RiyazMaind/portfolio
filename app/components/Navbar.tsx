"use client";
import { useState } from "react";

export default function Navbar() {
    const[menuOpen, setMenuOpen] = useState(false);

    return(
        <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <a href="#" className="text-xl font-bold hover:text-blue-400 transition">
                  <span className="hidden sm:inline">Riyaz Maind</span>
                  <span className="inline sm:hidden">RM</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <a href="#about" className="hover:text-blue-400"> About</a>
                    <a href="#experience" className="hover:text-blue-400">Experience</a>
                    <a href="#projects" className="hover:text-blue-400">Projects</a>
                    <a href="#contact" className="hover:text-blue-400">Contact</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                className="md:hidden"
                onClick={()=> setMenuOpen(!menuOpen)}
                >☰</button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center bg-gray-800 pb-4 space-y-3">
                    <a href="#about" onClick={()=> setMenuOpen(false)} className="hover:text-blue-400"> About</a>
                    <a href="#experience" onClick={()=> setMenuOpen(false)} className="hover:text-blue-400">Experience</a>
                    <a href="#projects" onClick={()=> setMenuOpen(false)} className="hover:text-blue-400">Projects</a>
                    <a href="#contact" onClick={()=> setMenuOpen(false)} className="hover:text-blue-400">Contact</a>
                </div>
            )}
        </nav>
    )
}