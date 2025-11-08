"use client"

export function Header() {
    return (
        <header className="bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm sticky top-0 z-10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl font-bold text-indigo-700 flex items-center gap-2">
                    <span>📄</span> PDF Extractor
                </h1>
                <nav className="hidden md:flex gap-6 text-sm text-gray-600">
                    <a href="#" className="hover:text-indigo-600 transition-colors">
                        Home
                    </a>
                    <a href="#" className="hover:text-indigo-600 transition-colors">
                        About
                    </a>
                    <a href="#" className="hover:text-indigo-600 transition-colors">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    )
}
