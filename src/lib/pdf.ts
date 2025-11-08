import * as pdfjsLib from "pdfjs-dist"
import pdfjsWorker from "pdfjs-dist/build/pdf.worker?worker"
import type { PDFDocumentProxy } from "pdfjs-dist"

    // Tell pdfjs where to find the worker
    ; (pdfjsLib as any).GlobalWorkerOptions.workerPort = new pdfjsWorker()

export async function extractTextFromPdf(arrayBuffer: ArrayBuffer) {
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer })
    const pdf: PDFDocumentProxy = await loadingTask.promise
    const numPages = pdf.numPages
    const pages: { page: number; text: string }[] = []

    for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i)
        const content = await page.getTextContent()
        const strings = content.items.map((item: any) => item.str)
        const text = strings.join(" ")
        pages.push({ page: i, text })
    }

    return { numPages, pages }
}
