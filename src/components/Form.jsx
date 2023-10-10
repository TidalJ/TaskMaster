import { useState } from 'react';
export default function Form({ addItems }) {


    const [text, setText] = useState("")


    const onClick = () => {
        addItems({ id: Date.now(), text })
        setText("")
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-group mb-3">
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="form-control rounded-1" placeholder="Add Item Text Here" />
                <button className="btn btn-success text-white rounded-1 fw-bold" disabled={text.length === 0} onClick={onClick}>Submit</button>
            </div>
            <hr />
        </form>
    )
}