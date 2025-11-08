"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Container } from "@/components/layout/Container"

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-indigo-100 text-gray-900">
      <Header />

      <main className="flex-1 flex items-center justify-center py-10">
        <Container>
          <div className="w-full bg-white rounded-2xl shadow-xl p-8 space-y-8">
            <div className="text-center space-y-1">
              <h2 className="text-3xl font-semibold text-gray-900">
                Extract Text Effortlessly
              </h2>
              <p className="text-gray-500">
                Upload a PDF and instantly extract all readable text content.
              </p>
            </div>

          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}

export default App
