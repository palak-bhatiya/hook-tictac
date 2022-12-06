import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
var t = 0;
function App() {
  const [add,setadd] = useState('')
  const [val, setvalue] = useState(["", "", "", "", "", "", "", "", ""]);
  const calc = (i) => {
    t=add;
    if(val[i]=='')
    {
      if (t % 2 == 0) {
        // console.log('X');
        val[i] = 'O';
      }
      t++;
      setadd(t);
    }
    auto();
    winner();
  }
  const auto = (i) => {
    const a = 0 + Math.random() * (9 - 0);
    var l = Math.floor(a);

    // if(val[i]==val[l])
    // {
    //   var l = Math.floor(a);
    // }
    if (val[l]=='') {
      if (t%2 !== 0) {
        val[l] = 'X';
      }
    }
    t++;
    setadd(t);
  }
  const winner = () =>{
    if(val[0]=='X' && val[1]=='X' && val[2]=='X' ||
       val[3]=='X' && val[4]=='X' && val[5]=='X' ||
       val[6]=='X' && val[7]=='X' && val[8]=='X' ||
       val[0]=='X' && val[3]=='X' && val[6]=='X' ||
       val[1]=='X' && val[4]=='X' && val[7]=='X' ||
       val[2]=='X' && val[5]=='X' && val[8]=='X' ||
       val[2]=='X' && val[4]=='X' && val[6]=='X' ||
       val[0]=='X' && val[4]=='X' && val[8]=='X'
    ){
      alert('x is won')
    }
    else if(val[0]=='O' && val[1]=='O' && val[2]=='O' ||
            val[3]=='O' && val[4]=='O' && val[5]=='O' ||
            val[6]=='O' && val[7]=='O' && val[8]=='O' ||
            val[0]=='O' && val[3]=='O' && val[6]=='O' ||
            val[1]=='O' && val[4]=='O' && val[7]=='O' ||
            val[2]=='O' && val[5]=='O' && val[8]=='O' ||
            val[2]=='O' && val[4]=='O' && val[6]=='O' ||
            val[0]=='O' && val[4]=='O' && val[8]=='O'
  )
  {
    alert('O is win');
  }
  }
  return (
    <div className="App">
      <center>
        <div className="display">
          <div className="top">
            <input type="button" value={val[0]} onClick={() => { calc('0') }} />
            <input type="button" value={val[1]} onClick={() => { calc('1') }} />
            <input type="button" value={val[2]} onClick={() => { calc('2') }} />
          </div>
          <div className="middle">
            <input type="button" value={val[3]} onClick={() => { calc('3') }} />
            <input type="button" value={val[4]} onClick={() => { calc('4') }} />
            <input type="button" value={val[5]} onClick={() => { calc('5') }} />
          </div>
          <div className="bottom">
            <input type="button" value={val[6]} onClick={() => { calc('6') }} />
            <input type="button" value={val[7]} onClick={() => { calc('7') }} />
            <input type="button" value={val[8]} onClick={() => { calc('8') }} />
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
