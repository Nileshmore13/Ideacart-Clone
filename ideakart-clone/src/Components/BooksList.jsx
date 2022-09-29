

import "./BooksList.css"

function BooksList({ title,image }) {
    return (
            <div>
                <img src={image} alt="" />
                <p>{title}</p>
            </div>
    )
}

export default BooksList