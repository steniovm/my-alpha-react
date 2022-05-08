import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

//estilos css
const cssApp = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent:'center',
  backgroundColor: '#555',
  width: 'auto',
}
const cssinputs = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent:'center',
  minWidth: '200px',
  backgroundColor: '#555',
  padding: '1%',
  margin: '3px'
}
const cssbuttons = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent:'space-between',
  height: '40px',
}
const cssbuton = {
  width: "40px",
  fontSize:'xx-large',
  marginTop: '3px'
}
const cssdisplays={
  backgroundColor: '#aaa',
  height: '60px',
  fontSize:'xx-large',
  textAlign:'end',
  marginTop: '3px'
}
//elemento principal
function App(){
  const [valorone, setValorOne]=useState(0);
  const [valorthu, setValorThu]=useState(0);
  const [result, setResult]=useState(0);
  //elementos
  const btnnumber=(value,addvalue)=>{
    let clickfunction = function(){addvalue(value)};
    return(
      React.createElement('button',{'style': cssbuton, 'onClick': clickfunction},value)
      //<button style={cssbuton} onClick={function(){addvalue(value)}}>{value}</button>
    )
  }
  const bntop = (cop,op)=>{
    return(
      React.createElement('button',{'style': cssbuton, 'onClick': op},cop)
      //<button style={cssbuton} onClick={op}>{cop}</button>
    )
  }
  const shownumber = (valor)=>{
    return(
      React.createElement('label',{'style': cssdisplays},valor)
      //<label style={cssdisplays}>{valor}</label>
    )
  }
  //funções
  function init(){
    if(Number.isNaN(valorone)) setValorOne(0);
    if(Number.isNaN(valorthu)) setValorThu(0);
    if(Number.isNaN(result)) setResult(0);
  }
  function inputone(valor){
    init();
    setValorOne(valorone*10+valor);
    console.log(valorone);
  }
  function inputthu(valor){
    init();
    setValorThu(valorthu*10+valor);
    console.log(valorthu);
  }
  function soma(){
    init();
    setResult(valorone+valorthu);
    console.log(result);
  }
  function subtrai(){
    init();
    setResult(valorone-valorthu);
    console.log(result);
  }
  function multiplica(){
    init();
    setResult(valorone*valorthu);
    console.log(result);
  }
  function divide(){
    init();
    if(valorthu) setResult(valorone/valorthu);
    else setResult('div por 0');
    console.log(result);
  }
  function limpar(){
    setValorOne(0);
    setValorThu(0);
    setResult(0);
  }

//renderização
  return (
    <div className="App">
    <div style={cssApp}>
      <div id='inputs' style={cssinputs}>
      <h1>Calculadora Simples</h1>
        <div id='numbersone' style={cssbuttons}>
          {btnnumber(0,inputone)}
          {btnnumber(1,inputone)}
          {btnnumber(2,inputone)}
          {btnnumber(3,inputone)}
          {btnnumber(4,inputone)}
          {btnnumber(5,inputone)}
          {btnnumber(6,inputone)}
          {btnnumber(7,inputone)}
          {btnnumber(8,inputone)}
          {btnnumber(9,inputone)}
        </div>
        {shownumber(valorone)}
        <div id='numbersthu' style={cssbuttons}>
          {btnnumber(0,inputthu)}
          {btnnumber(1,inputthu)}
          {btnnumber(2,inputthu)}
          {btnnumber(3,inputthu)}
          {btnnumber(4,inputthu)}
          {btnnumber(5,inputthu)}
          {btnnumber(6,inputthu)}
          {btnnumber(7,inputthu)}
          {btnnumber(8,inputthu)}
          {btnnumber(9,inputthu)}
        </div>
        {shownumber(valorthu)}
        <div id='operations' style={cssbuttons}>
          {bntop('+',soma)}
          {bntop('-',subtrai)}
          {bntop('*',multiplica)}
          {bntop('÷',divide)}
          {bntop('C',limpar)}
        </div>
        {shownumber(result)}
      </div>
    </div>
    <img src={logo} className="App-logo" alt="logo" />
  </div>
  //aqui não funcionu    
    /*React.createElement('div',{'className': 'App'},
    [React.createElement('div',{'style': cssApp},
    React.createElement('div',{'id': 'inputs', 'style': cssinputs},[
      `${React.createElement('h1',null,'Calculadora Simples')}`,
      `${React.createElement('div',{'id':'numbersone','style':cssbuttons},
         [btnnumber(0,inputone),
          btnnumber(1,inputone),
          btnnumber(2,inputone),
          btnnumber(3,inputone),
          btnnumber(4,inputone),
          btnnumber(5,inputone),
          btnnumber(6,inputone),
          btnnumber(7,inputone),
          btnnumber(8,inputone),
          btnnumber(9,inputone)]
      )}`,
      `${shownumber(valorone)}`,
      `${React.createElement('div',{'id':'numbersthu','style':cssbuttons},
         [btnnumber(0,inputthu),
          btnnumber(1,inputthu),
          btnnumber(2,inputthu),
          btnnumber(3,inputthu),
          btnnumber(4,inputthu),
          btnnumber(5,inputthu),
          btnnumber(6,inputthu),
          btnnumber(7,inputthu),
          btnnumber(8,inputthu),
          btnnumber(9,inputthu)]
      )}`,
      `${shownumber(valorthu)}`,
      `${React.createElement('div',{'id':'operations','style':cssbuttons},
         [bntop('+',soma),
          bntop('-',subtrai),
          bntop('*',multiplica),
          bntop('÷',divide),
          bntop('C',limpar)]
      )}`,
      `${shownumber(result)}`,
    ]
    )),
    React.createElement('img',{'src': logo, 'className': "App-logo", 'alt': "logo"})
    ]
  )*/
  );
}


export default App;
