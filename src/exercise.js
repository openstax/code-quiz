import React, { useState, useRef } from 'react';
import {Editor} from './editor'
import cn from 'classnames'
import { runExercise } from './run';


const Status = ({ status }) => {
    if (!status.ran) return null

    if (status.passed) {
        return <h5>Great Job!</h5>
                         }

    const fail = status.results.find(r => r.passed === false)
    return (
        <div>
          <h5>Sorry that didn't match what was expected:</h5>
          <div>
            <b>Expected:</b> <pre>{fail.expected.join("\n")}</pre>
          </div>
          <div>
            <b>Received:</b> <pre>{fail.output.join("\n")}</pre>
          </div>
          {fail.error && (
              <div>
                <b>Error:</b> <pre>{fail.error}</pre>
              </div>)}
        </div>
    )
}

export const Exercise = ({
    id, hidden, children, active, inputs, onPassed, expected,
    initialCode = '',
}) => {
    const [status, setStatus] = useState({ ran: false })

    const editorRef = useRef()

    const run = async () => {
        const newStatus = await runExercise({
            inputs,
            expected,
            code: editorRef.current.value,
        })
        setStatus(newStatus)
        if (newStatus.passed) { onPassed(newStatus) }
    }

    return (
        <div data-exercise-id={id} className={cn('exercise', { hidden } )}>

          {children}

          <Editor readonly={hidden} ref={editorRef} defaultValue={initialCode} />
          {!hidden && <button onClick={run}>Execute</button>}
          <Status status={status} />

        </div>

    )

}
