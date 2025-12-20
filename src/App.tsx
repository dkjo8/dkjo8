import { useState } from 'react'

function App() {
  const [showLorem, setShowLorem] = useState(false)

  if (showLorem) {
    return (
      <div className="min-h-screen font-['Arial']" style={{ backgroundColor: 'white' }}>
        <div className="max-w-4xl mx-auto px-8 py-8 text-left">
          <span
            onClick={() => setShowLorem(false)}
            style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer', fontSize: '18px', display: 'block', marginBottom: '32px' }}
          >
            ← Back
          </span>

          <h1 className="text-3xl font-bold mb-8">thoughts </h1>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Is the impossible truly impossible, or just poorly understood?
            </p>
            <p>
              I don't know if impossible things can be done, but I know that things once called impossible keep happening.
            </p>
            Some limits seem fixed. And that's fine. Like moving at the speed of light.
            <p>
              But how do we decide that something cannot be done?
            </p>
            <p>
              Maybe it's a problem of perspective.
            </p>
            <p>
              Maybe it's about how we define the thing itself.
            </p>
            <p>
              Maybe context changes everything.
            </p>
            <p>
              Or maybe it simply comes down to time, effort, and resources we don't yet have.
            </p>
            <p>
              Will we travel at the speed of light in our lifetime? Unlikely. Probably never. Physics draws a hard line there.
            </p>
            <p>
              Has anyone actually tried?
            </p>
            <p>
              Not directly. But we do push protons to almost the speed of light, close enough to make the limit feel thin.
            </p>
            <p>
              "What if enlightenment turns you into something else, like the rainbow body described in Tibetan tradition?"
            </p>
            <p>
              I don't see that as impossible. Just not available to us.
            </p>
            <p>
              Maybe the issue is that we can't see it.
            </p>
            <p>
              Whatever sits behind all of this.
            </p>
            <p>
              Time won't explain it. It never does. Time only moves forward. So what actually reveals the truth?
            </p>
            <p>
              Someone has to attempt the impossible. But who is that someone?
            </p>
            <p>
              Someone not afraid to be wrong. Not afraid to fail. Not afraid, at all.
            </p>
            <p>
              I don't see it now, and I probably never will, as long as I'm here on Earth.
            </p>
            <p>
              The average person in Sweden lives about eighty years.
            </p>
            <p>
              I need more than eighty years. I need endless time to think about this.
            </p>
            <p>
              What if light moves faster than we measure it? What if the speed of light is really the speed of time, seen from the outside?
            </p>
            <p>
              Miguel Alcubierre might have a couple of decades left. That's nowhere near enough time for questions like this.
            </p>
            <p>
              He might reach an answer. We won't be there to know.
            </p>
            <p>
              So someone has to think beyond him.
            </p>
            <p>
              That someone has to build the "atomic rearranger."
            </p>
            <p>
              I'll keep thinking about the impossible, knowing I won't reach the answer.
            </p>
            <p>
              Or maybe I don't need time to think about it at all.
            </p>
            <p>
              Time won't give me the answer. The final moment will. That's where everything becomes clear.
            </p>
            <p>
              We'll all find out eventually. Not now. Definitely not now. Not even in a million years at this pace.
            </p>
            <p>
              Maybe we all understand it at once. Maybe we don't.
            </p>
            <p>
              The answer might not be in the universe at all. It might be in the mind.
            </p>
            <p>
              Nothing with mass can move faster than light. But what if we aren't mass? What if thought itself is the light?
            </p>
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
            Wzup
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
            <span
              onClick={() => setShowLorem(true)}
              style={{ color: 'purple', textDecoration: 'underline', cursor: 'pointer', fontSize: '18px', display: 'block', marginBottom: '16px' }}
            >
              thoughts
            </span>
            <span>

              <a href="https://linkedin.com/in/dkjo8" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <br />
              <a href="https://twitter.com/dkjo08" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
