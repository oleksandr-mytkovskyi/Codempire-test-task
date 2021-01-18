import React, {useState} from 'react';
import {Button} from '../Button/Button';
import topIcon from "../../img/top-icon.png";
import {dataArr} from '../../constants/constans';
import './App.css';

function App() {
  const [memory, setMemory] = useState('');
  const [cache, setCache] = useState('');
  const [data, setData] = useState('');
  const [operator, setOperator] = useState('');

  const num: number = Number(data)
  const cacheNum: number = Number(cache)

  function clickOperator (opr:string): void {
    if (operator) {
        switch (operator) {
            case '+': 
                setCache((cacheNum + num).toString())
                break
            case '-':
                setCache((cacheNum - num).toString())
                break
            case 'x':
                setCache((cacheNum * num).toString())
                break
            case '÷':
                setCache((cacheNum / num).toString())
                break
        }
    } else setCache(num.toString())
    setOperator(opr)
    setData('')
}

function clickNumber (value: string): void {
    setData(data + value)
}

function clickNull (value: string): void {
  setData(data === '0' ? '' :  data + value)
}

function clickAddFunc (value:string): void {
    switch(value) {
        case '%':
            setData((num / 100).toString())
            break
        case '±': 
            setData((num * -1).toString())
            break
        case 'AC':
            setData('')
            setCache('')
            setOperator('')
            break
        case '.':
            if (data.includes('.')) {
                setData(data)
            } else setData(data + '.')
    }
}

function clickMemoryFunc (value: string): void {
    switch(value) {
        case 'mc':
            setMemory('')
            setData('')
            break
        case 'mr':
            setData(memory ? memory : '0')
            break
        case 'm+':
            setMemory((Number(memory) + num).toString())
            break
        case 'm-':
            setMemory((Number(memory) - num).toString())
            break
        case 'ms':
            setData('')
            setMemory(data)
            break
    }
}

function clickResult(): void {
    if(!operator) return
    switch(operator) {
        case '+': 
            setData((cacheNum + num).toString())
            break
        case '-': 
            setData((cacheNum - num).toString())
            break
        case 'x': 
            setData((cacheNum * num).toString())
            break
        case '÷':
            setData((cacheNum / num).toString())
            break
        default: break
    }     
    setCache('')
    setOperator('')
}

    function renderButtons (arr: any) {
        return arr.map((elem: any, i: number) => {
            let a:any
            switch (elem.onButtonClick) {
                case 'clickNumber': 
                    a = clickNumber 
                    break
                case 'clickOperator': 
                    a = clickOperator 
                    break
                case 'clickNull': 
                    a = clickNull 
                    break
                case 'clickAddFunc': 
                    a = clickAddFunc 
                    break
                case 'clickMemoryFunc': 
                    a = clickMemoryFunc 
                    break
                case 'clickResult': 
                    a = clickResult 
                    break
            }
            return(
                <Button onButtonClick={a} value={elem.data} type={elem.type} key={i}/>
            )
        })
    }

    const buttons = renderButtons(dataArr);

  return (
    <div className='app'>
      <div className='top-panel'>
        <div className='time'>12:00</div>
        <div className="top-icon"><img src={topIcon} alt='icon-iphone' ></img></div>
      </div>
      <div className='output'>
        <div>{data? data : 0}</div>
      </div>
      <div className='button-area'>
          {buttons}
      </div>
      <div className="bottom-panel"></div>
    </div>
    );
}

export default App;
