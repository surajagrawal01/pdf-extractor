"use client"

import React, { useRef } from "react"
import { Button } from "@/components/ui/button"
import { usePdfExtractor } from "@/hooks/usePdfExtractor"
import { PdfViewer } from "./PdfPreviewer"

export function FileUploader() {
    const fileInputRef = useRef<HTMLInputElement>(null)
    const { loading, result, error, extract } = usePdfExtractor()

    const handleButtonClick = () => {
        fileInputRef.current?.click()
    }

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        await extract(file)
    }

    return (
        <div className="flex flex-col items-center justify-start py-10 bg-gray-50">
            {/* Upload Card */}
            <div className="w-[600px] p-6 flex flex-col items-center gap-3 border border-border rounded-xl shadow-sm bg-white mb-10">
                <input
                    type="file"
                    ref={fileInputRef}
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="hidden"
                />

                <Button
                    variant="default"
                    size="lg"
                    disabled={loading}
                    onClick={handleButtonClick}
                    className="w-44"
                    style={{ marginTop: "20px" }}
                >
                    {loading ? "Extracting..." : "Upload PDF"}
                </Button>

                <p className="text-xs text-muted-foreground">
                    Supported: <span className="font-medium">.pdf only</span> (client-side extraction)
                </p>

                {error && (
                    <div className="text-destructive text-sm bg-destructive/10 p-[5px] rounded-md w-[90%] text-center mb-[10px]">
                        {error}
                    </div>
                )}
            </div>

            {/*  PDF Result Viewer  */}
            {result && !loading && <PdfViewer result={result} />}
        </div>
    )
}
