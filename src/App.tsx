import { useState } from 'react';

interface propsButton {
  name: string;
  action: () => void;
}

import biscoito from './assets/biscoito.png';
import "./style.css";

function App() {

  function breakCookie() {
    const numberRandom = Math.floor(Math.random() * phrases.length);

    setTextPhrase(`${phrases[numberRandom]}`);
  }

  const [textPhrase, setTextPhrase] = useState("");

  const phrases = [
    'Siga os bons e aprenda com eles.', 
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ];

  return (
    <div className='container'>
      <img src={biscoito} className='img'/>
      <Button name="Abrir Biscoito" action={breakCookie} />
      <h3 className='textPhrase'>{textPhrase}</h3>
    </div>
  )
}

const Button = (props: propsButton) => {
  return(
    <div>
      <button onClick={props.action}>{props.name}</button>
    </div>
  );
}

export default App
