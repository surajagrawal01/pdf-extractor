"use client"

import { FileUploader } from "@/components/FileUploader"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Container } from "@/components/layout/Container"

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-indigo-100 text-gray-900">
      <Header />

      <main className="flex-1 w-full px-4 py-8 sm:py-12">
        <Container>
          <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
                Extract Text Effortlessly
              </h2>
              <p className="text-gray-500">
                Upload a PDF and instantly extract all readable text content.
              </p>
            </div>
            <FileUploader />
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}

export default App