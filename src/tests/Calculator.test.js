import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button6;
  let button7;
  let button8;
  let button9;
  let operatorEquals;
  let operatorAdd;
  let operatorMultiply;
  let operatorDivide;
  let operatorSubtract
  let Clear
  let runningTotal

  beforeEach(() => {
    container = render(<Calculator/>)
    
    button1 = container.getByTestId('number1')
    button2 = container.getByTestId('number2')
    button3 = container.getByTestId('number3')
    button4 = container.getByTestId('number4')
    button5 = container.getByTestId('number5')
    button6 = container.getByTestId('number6')
    button7 = container.getByTestId('number7')
    button8 = container.getByTestId('number8')
    button9 = container.getByTestId('number9')
    runningTotal = container.getByTestId('running-total')
    operatorEquals = container.getByTestId('operator-equals')
    operatorAdd = container.getByTestId('operator-add')
    operatorSubtract = container.getByTestId('operator-subtract')
    operatorMultiply = container.getByTestId('operator-multiply')
    operatorEquals = container.getByTestId('operator-equals')
    operatorDivide = container.getByTestId('operator-divide')
    Clear = container.getByTestId('clear')
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('Should be able to add 1 to 4 and get 5', () => {
    fireEvent.click(button4)
    fireEvent.click(operatorAdd)
    fireEvent.click(button1)
    fireEvent.click(operatorEquals)
    expect(runningTotal.textContent).toEqual('5')
  })

  it('Should be able to subtract 4 from 7 and get 3', () => {
    fireEvent.click(button7)
    fireEvent.click(operatorSubtract)
    fireEvent.click(button4)
    fireEvent.click(operatorEquals)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('Should be able to multiply 3 by 5 and get 15', () => {
    fireEvent.click(button3)
    fireEvent.click(operatorMultiply)
    fireEvent.click(button5)
    fireEvent.click(operatorEquals)
    expect(runningTotal.textContent).toEqual('15')
  })

  it('Should be able to divide 21 by 7 and get 3', () => {
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(operatorDivide)
    fireEvent.click(button7)
    fireEvent.click(operatorEquals)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('Should be able to concatenate multiple number button clicks', () => {
    fireEvent.click(button2)
    fireEvent.click(button1)
    expect(runningTotal.textContent).toEqual('21')
  })

  it('Should be able to chain multiple operations together', () => {
    fireEvent.click(button2)
    fireEvent.click(operatorDivide)
    fireEvent.click(button1)
    fireEvent.click(operatorMultiply)
    fireEvent.click(button5)
    expect(runningTotal.textContent).toEqual('5')
  })

  it('Should be able to clear the running total without affecting the calculation', () => {
    fireEvent.click(button2)
    fireEvent.click(operatorSubtract)
    fireEvent.click(button1)
    fireEvent.click(Clear)
    fireEvent.click(operatorAdd)
    fireEvent.click(button2)
    fireEvent.click(operatorEquals)
    expect(runningTotal.textContent).toEqual('4')
  })

})







