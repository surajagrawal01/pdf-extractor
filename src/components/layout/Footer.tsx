"use client"

export function Footer() {
    return (
        <footer className="bg-white/80 border-t border-gray-200 py-4 mt-auto text-center text-sm text-gray-500">
            <p>
                © {new Date().getFullYear()}{" "}
                <span className="font-medium text-indigo-600">PDF Extractor</span> — Built with React, TypeScript & shadcn/ui
            </p>
        </footer>
    )
}
