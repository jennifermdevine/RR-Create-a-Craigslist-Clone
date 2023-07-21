import Posting from './Posting'

function Gallery() {
    const craigPost = require('./postings.js')
    console.log(craigPost)

    let postList = craigPost.postings.map((element, i) => <Posting data={element} key={i} />)

    
    return(
        <div>
            <h1>Gallery</h1>
            {postList}
        </div>
    )
}

export default Gallery