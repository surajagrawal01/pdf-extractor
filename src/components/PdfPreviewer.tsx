"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface PdfViewerProps {
    result: {
        numPages: number
        pages: { page: number; text: string }[]
    }
}

export function PdfViewer({ result }: PdfViewerProps) {
    const [currentPage, setCurrentPage] = useState(0)
    const [fade, setFade] = useState(true)

    const triggerFade = (update: () => void) => {
        setFade(false)
        setTimeout(() => {
            update()
            setFade(true)
        }, 150)
    }

    const nextPage = () => {
        if (currentPage < result.pages.length - 1) {
            triggerFade(() => setCurrentPage(currentPage + 1))
        }
    }

    const prevPage = () => {
        if (currentPage > 0) {
            triggerFade(() => setCurrentPage(currentPage - 1))
        }
    }

    const currentText =
        result?.pages?.[currentPage]?.text ?? ""

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") nextPage()
            if (e.key === "ArrowLeft") prevPage()
        }
        window.addEventListener("keydown", handleKey)
        return () => window.removeEventListener("keydown", handleKey)
    }, [currentPage])

    return (
        <div className="flex justify-center w-full m-[20px]">
            <div className="w-[1200px] max-w-[95%] border border-border rounded-xl shadow-md bg-white p-[10px] flex flex-col items-center transition-all duration-300 mb-10">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    PDF Preview ({currentPage + 1} / {result.numPages})
                </h3>

                {/* Page content area */}
                <div
                    className={`relative w-full bg-gray-100 border border-border rounded-lg p-6 shadow-inner min-h-[350px] transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <h4 className="text-sm font-semibold text-indigo-700 mb-2 p-[10px]">
                        Page {currentPage + 1}
                    </h4>
                    <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700 p-[10px]">
                        {currentText || "No extractable text found on this page"}
                    </p>
                </div>

                {/* Navigation */}
                <div className="m-[5px] flex justify-center w-full">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={prevPage}
                        disabled={currentPage === 0}
                        style={{ marginRight: "10px", padding: "3px" }}
                    >
                        ← Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={nextPage}
                        disabled={currentPage === result.pages.length - 1}
                    >
                        Next →
                    </Button>
                </div>
            </div>
        </div>
    )
}
