import './App.css'
import Counter from './components/Counter'
import Title from './components/Title'

import useCountdown from './hooks/useCountdown'

function App() {

  const [day, hour, minute, second] = useCountdown("jan 1, 2025 00:00:00")

  return (
    <div className="App">
      <div className="container">
        <Title title="Contagem regressiva para 2024" />
        <div className="countdown-container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
      </div>
    </div>
  )
}

export default App
