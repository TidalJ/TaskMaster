export default function Navbar({ items, clearItems }) {

    if (items.length === 0) return (
        <p className="text-center fs-3 mt-5">Nothing In You Todo List</p>
    )

    return (
        <nav className="navbar bg-dark px-1 py-3 border-bottom">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="/">Todo List</a>
                <button className="btn btn-outline-success rounded-5 text-white" onClick={() => clearItems()}>
                    Clear Items
                </button>
            </div>
        </nav>
    )
}