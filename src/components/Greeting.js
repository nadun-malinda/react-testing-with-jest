import { useState } from "react"

const Greeting = () => {
    const [changedText, setChangedText] = useState(false)

    const changeTextHandler = () => {
        setChangedText(true)
    }

    return (
        <div>
            <h2>Hello World!</h2>
            {changedText && <p>Changed!</p>}
            {!changedText && <p>It's good to see you!</p>}

            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    )
}

export default Greeting