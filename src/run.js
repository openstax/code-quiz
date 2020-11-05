const Sk = window.Sk

// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
export async function runCode({ code, input }) {
    const result = {
        output: []
    }

    Sk.configure({
        output(text) {
            if (text !== "\n") {
                result.output.push(text)
            }
        },
        //inputfunTakesPrompt: true,
        inputfun() {
            return input
        },
        read(x) {
            if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
                throw new Error("File not found: '" + x + "'");
            return Sk.builtinFiles["files"][x];
        },

    })
    Sk.pre = "output";

    try {
        await Sk.misceval.asyncToPromise(function() {
            return Sk.importMainWithBody("<stdin>", false, code, true);
        });
        result.success = true
    } catch (error) {
        result.success = false
        result.error = error.toString()
    }
    return result
}

export async function runExercise({code, inputs, expected}) {

    const results = []

    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i]
        const match = Array.isArray(expected[i]) ? expected[i] : [expected[i]]
        const result = await runCode({ code, input })
        result.input = input
        result.expected = match
        result.passed = Boolean( // eslint-disable-next-line eqeqeq
            result.success && !result.output.find((line, lineIndex) => line != match[lineIndex])
        )
        results.push(result)
    }
    
    return { ran: true, passed: !results.find(r => !r.passed), results }

}
