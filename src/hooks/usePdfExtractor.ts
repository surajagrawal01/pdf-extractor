import { extractTextFromPdf } from "@/lib/pdf"
import { useState } from "react"


interface ExtractedPage {
    page: number
    text: string
}

interface ExtractionResult {
    numPages: number
    pages: ExtractedPage[]
}

export function usePdfExtractor() {
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState<ExtractionResult | null>(null)
    const [error, setError] = useState<string | null>(null)

    async function extract(file: File) {
        setLoading(true)
        setError(null)
        setResult(null)

        try {
            const arrayBuffer = await file.arrayBuffer()
            console.log({ arrayBuffer })
            const res = await extractTextFromPdf(arrayBuffer)

            // Check if text is empty (common for scanned PDFs)
            const hasText = res.pages.some((p) => p.text.trim().length > 0)
            if (!hasText) {
                throw new Error("No extractable text found (possibly a scanned PDF).")
            }

            setResult(res)
        } catch (err: any) {
            console.error("PDF extraction failed:", err)
            setError(err.message || "Failed to extract text from PDF.")
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        result,
        error,
        extract,
    }
}
