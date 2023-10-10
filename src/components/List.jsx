export default function List({ items, deleteItems, editItems }) {
    return (
        <ul className="list-group mt-5 rounded-0">
            {items.map((item) => (
                <li className="list-group-item d-flex justify-content-between align-items-content" key={item.id}>
                    <span>{item.text}</span>
                    <div>
                        <i className="bi bi-pencil-square text-primary fs-5 pointer me-3" onClick={() => editItems(item)}></i>
                        <i className="bi bi-trash text-danger fs-5 pointer" onClick={() => deleteItems(item)}></i>
                    </div>
                </li>
            ))}
        </ul>
    )
}