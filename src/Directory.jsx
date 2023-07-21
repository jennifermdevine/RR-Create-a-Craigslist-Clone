function Directory(){
    return(
        <div className="directory">
            <select name="view-options">
                <option value="gallery">Gallery</option>
                <option value="list">List</option>
            </select>
            <nav>
                <button>&lt;&lt; Back</button>
                <span>120/3000</span>
                <button>Next &gt;&gt;</button>
            </nav>
        </div>
    )
}

export default Directory