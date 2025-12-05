import { useState } from 'react'

function App() {
  const [showCoolPeople, setShowCoolPeople] = useState(false)

  if (showCoolPeople) {
    return (
      <div className="min-h-screen bg-white font-['Arial']">
        <div className="max-w-4xl mx-auto px-8 py-8">
          <span 
            onClick={() => setShowCoolPeople(false)}
            style={{color: 'blue', textDecoration: 'underline', cursor: 'pointer', fontSize: '18px', display: 'block', marginBottom: '32px'}}
          >
            ← Back to main page
          </span>
          
          <h1 className="text-3xl font-bold mb-8"></h1>
          
          <div>
            <img 
              src="/fredrikhamilton.jpg" 
              alt="Fredrik Hamilton" 
              style={{width: '128px', height: '224px'}}
              className="rounded-lg shadow-lg"
            />
            <p className="mt-4 text-lg">Fredrik Hamilton (founder of budbee, <br />everyone in sweden uses it) <br /> <br /> - Got some cool advice, he's a really nice guy</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen font-['Arial']" style={{backgroundColor: 'white'}}>
      <div className="max-w-4xl mx-auto px-8 py-8 text-left">
        {/* Profile Image */}
        <img 
          src="/pfp.jpeg" 
          alt="David" 
          style={{width: '128px', height: '128px'}}
          className="mb-8 rounded-lg shadow-lg"
        />
        
        {/* Main Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Wzup, I'm David. 16 y/o. I do stuff fast, love building + meeting people.
          </p>
          
          <p>
            rn I work @{' '}
            <a 
              href="https://strawberrybrowser.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 inline-block"
            >
              strawberrybrowser
            </a>
            {' '}and I'm building{' '}
            <a 
              href="https://hugo.love/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 inline-block"
            >
              Hugo
            </a>
          </p>
          
          <div>
            <span 
              onClick={() => setShowCoolPeople(true)}
              style={{color: 'purple', textDecoration: 'underline', cursor: 'pointer', fontSize: '18px'}}
            >
              Cool people I've met
            </span>
          </div>
<br />
          <div>
            <span>
            
              <a href="https://linkedin.com/in/dkjo8" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <br />
              <a href="https://twitter.com/dkjo08" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </span>
            <br /> <br />
            <span>
              Fun facts about me:
            </span>
            <br /> <br />
            <span>
              - I love sports (hockey, american football) <br />
              tampa bay is my favorite team, and DIF
            </span>
            <br /> <br />
            <span>
              - I'm good at remembering faces and license plates lmao (not flexing)
            </span>
            <br /> <br />
            <span>
              - I hate french, the language obviously
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
