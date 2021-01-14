import React, {useState} from 'react';
import {Button} from '../Button/Button'
import topIcon from "../../img/top-icon.png";
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
  setData(data === '0' ? '0' :  data + value)
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
          <Button onButtonClick={clickAddFunc} value='AC' type='grey'/>
          <Button onButtonClick={clickAddFunc} value='±' type='grey'/>
          <Button onButtonClick={clickAddFunc} value='%' type='grey'/>
          <Button onButtonClick={clickMemoryFunc} value='ms' type='orange'/>
          <Button onButtonClick={clickMemoryFunc} value='mc' type='dark'/>
          <Button onButtonClick={clickMemoryFunc} value='mr' type='dark'/>
          <Button onButtonClick={clickMemoryFunc} value='m-' type='dark'/>
          <Button onButtonClick={clickMemoryFunc} value='m+' type='orange'/>
          <Button onButtonClick={clickNumber} value='7' type='dark'/>
          <Button onButtonClick={clickNumber} value='8' type='dark'/>
          <Button onButtonClick={clickNumber} value='9' type='dark'/>
          <Button onButtonClick={clickOperator} value='x' type='orange'/>
          <Button onButtonClick={clickNumber} value='4' type='dark'/>
          <Button onButtonClick={clickNumber} value='5' type='dark'/>
          <Button onButtonClick={clickNumber} value='6' type='dark'/>
          <Button onButtonClick={clickOperator} value='÷' type='orange'/>
          <Button onButtonClick={clickNumber} value='1' type='dark'/>
          <Button onButtonClick={clickNumber} value='2' type='dark'/>
          <Button onButtonClick={clickNumber} value='3' type='dark'/>
          <Button onButtonClick={clickOperator} value='+' type='orange'/>
          <Button onButtonClick={clickNull} value='0' type='dark'/>
          <Button onButtonClick={clickAddFunc} value='.' type='dark'/>
          <Button onButtonClick={clickResult} value='=' type='dark'/>
          <Button onButtonClick={clickOperator} value='-' type='orange'/>
      </div>
      <div className="bottom-panel"></div>
    </div>
    );
}

export default App;
