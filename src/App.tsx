import { LiveBanner } from "./components/live-background-banner"
import { LiveFooter } from "./components/live-background-footer"

function App() {
  return (
    <div className="live-background-container h-full bg-dark relative">
      <LiveBanner />
      <LiveFooter topic="magicat 如何实现的" />
    </div>
  )
}

export default App
