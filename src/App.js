import React, { useState } from 'react'
import cn from 'classnames'
import './App.css';
import {Exercise} from './exercise';


function App() {

    const [visible, setVisible] = useState(new Set([1]))
    const reveal = (id) =>{
        setVisible(new Set([...visible.entries(), id]))
        const ex = document.querySelector(`[data-exercise-id="${id}"]`)
        if(ex) {
            ex.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className="App">

          <Exercise
            id={1}
            hidden={!visible.has(1)}
            inputs={['']}
            expected={['Hello World']}
            onPassed={() => reveal(2)}
          >
            <p>
              It is a tradition in programming languages to write a simple program
              that prints "Hello World!"
            </p>
            <p>
              See if you can write a program that does so below:
            </p>
          </Exercise>


          <Exercise
            id={2}
            hidden={!visible.has(2)}
            inputs={[0,1,2,3,4,5,6,7,8,9,10]}
            expected={['FizzBuzz', 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', '7', '8', 'Fizz','Buzz']}
            onPassed={() => reveal(1)}
          >

            <p>
              Now for something a little more complicated.
            </p>
            <p>
              Write a program that will read a single number and then print
              it.  <b>Hint:</b><i>You can read a string using the python `input()` function</i>
            </p>
            <p>But if the number is a multiple of three print "Fizz" instead of the number.</p>
            <p>For the multiples of five print "Buzz".</p>
            <p>For numbers which are multiples of both three and five print "FizzBuzz".</p>

          </Exercise>

          <div className={cn('exercise', { hidden: !visible.has('ex-2') } )} id="ex-2">
          </div>

        </div>
    );
}

export default App;
