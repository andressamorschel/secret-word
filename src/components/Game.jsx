import './Game.css'

const Game = ({verifyLetter}) => {
  return (
    <div className='game'>
        <p className='points'>
            <span>Pontuação: 0</span>
        </p>
        <h1>Adivinhe a palavra:</h1>
        <h3 className='tip'>Dica sobre a palavra <span>Dica...</span></h3>
        <div className="wordContainer">
            <span className='letter'>AAAA</span>
            <span className="blankSquare"></span>
        </div>
        <div className="letterContainer">
            <p>Tente adivinhar uma letra:</p>
            <form action="">
                <input type="text" name="letter" maxLength={1} required />
                <button>Jogar!</button>
            </form>
        </div>
        <div className="wrongLettersContainer">
            <p>Letras já usadas:</p>
            <span>a</span>
        </div>
        <button onClick={verifyLetter}>Finalizar jogo</button>
    </div>
  );
}

export default Game
