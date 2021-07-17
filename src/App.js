import './styles/index.css'
import './styles/layout-structure.css'
import './styles/general.css'
import './styles/code-blocks.css'
import './styles/sectioning.css'
import './styles/downloads-list.css'
import './styles/card.css'

import Home from './pages/Home'

const App = () => {
  return (
    <Home
      updatesByDeviceId={{}}
      lastCheckedUTCDate={new Date().toUTCString()}
    />
  )
}

export default App
