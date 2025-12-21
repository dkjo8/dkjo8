import { useState } from 'react'

function App() {
  const [showLorem,] = useState(false)

  if (showLorem) {
    return (
      <div className="min-h-screen font-['Arial']" style={{ backgroundColor: 'white' }}>
        <div className="max-w-4xl mx-auto px-8 py-8 text-left">
          <div className="space-y-6 text-lg leading-relaxed">z
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen font-['Arial']" style={{ backgroundColor: 'white' }}>
      <div className="max-w-4xl mx-auto px-8 py-8 text-left">

        {/* Main Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            holy
          </p>

          <p>
            browsing the web @{' '}
            <a
              href="https://strawberrybrowser.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 inline-block"
            >
              strawberry
            </a>
          </p>

          <div>
              <a href="https://linkedin.com/in/dkjo8" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <br />
              <a href="https://twitter.com/dkjo08" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
