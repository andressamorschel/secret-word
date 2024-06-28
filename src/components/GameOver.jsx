import './GameOver.css'

const GameOver = ({retry}) => {
  return (
    <div>
        <button onClick={retry}>Resetar jogo</button>
    </div>
  );
}

export default GameOver
