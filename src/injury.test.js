import { render, screen,fireEvent, waitFor } from '@testing-library/react';
import { addInjury } from './action/actionfun';
import {BrowserRouter} from 'react-router-dom'

describe('testing injurycentre ui', () => {afterEach(() => {
    console.log("clean up done...")
})
beforeEach(() => {
    console.log("initialization done")
})
it ('injury centre page',async()=>{
   render (<BrowserRouter><addInjury></addInjury></BrowserRouter>) 

   fireEvent.change(screen.getByTestId('personName'),{target:{value:'ragu@gmail.com'}})
   fireEvent.change(screen.getByTestId('personAddress'),{target:{value:'ragu@123'}})
   fireEvent.change(screen.getByTestId('mobile'),{target:{value:'ragu@123'}})
   fireEvent.click(screen.getByTestId('savectrl'))
   fireEvent.click(screen.getByTestId('updatectrl'))
   // expect(screen.getByTestId('msglbl').textContent).toBe("")
   await waitFor(()=>expect(screen.getByTestId('msglbl').textContent).toBe('valid user'))
   





})
    
});
