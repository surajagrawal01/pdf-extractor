import { useState } from 'react'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Vite + React + TypeScript
          </h1>
          <p className="text-gray-600">with TailwindCSS & shadcn/ui</p>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white text-center">
          <p className="text-lg mb-4">Counter Demo with shadcn/ui</p>
          <Button 
            onClick={() => setCount((count) => count + 1)}
            variant="secondary"
            size="lg"
            className="w-full"
          >
            Count is {count}
          </Button>
        </div>

        <div className="space-y-3">
          <div className="flex gap-2">
            <Button variant="default" size="sm">Default</Button>
            <Button variant="destructive" size="sm">Destructive</Button>
            <Button variant="outline" size="sm">Outline</Button>
            <Button variant="ghost" size="sm">Ghost</Button>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
            <span>TailwindCSS is working!</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
            <span>shadcn/ui is configured</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
            <span>TypeScript is configured</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Hot Module Replacement ready</span>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Edit <code className="bg-gray-100 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
