import Help from './Help'

function Sidebar(){
    return(
        <div style={{width:'24vw'}}>
            <h1>furniture</h1>
            <div>
                <button>All</button>
                <button>Owner</button>
                <button>Dealer</button>
            </div>
            <div>
                <div>
                    <input type="checkbox" name="titles" id="" />
                    <span>search titles only</span>
                </div>
                <div>
                    <input type="checkbox" name="image" id="" />
                    <span>has image</span>
                </div>
                <div>
                    <input type="checkbox" name="posted" id="" />
                    <span>search titles bundle duplicates</span>
                </div>
                <div>
                    <input type="checkbox" name="duplicates" id="" />
                    <span>include nearby areas</span>
                </div>
            </div>
            <div>
                <p>MILES FROM ZIP</p>
                <input type="text" name="" placeholder="min"/>
                <input type="text" name="" placehollder="max"/>
            </div>
            <Help/>
        </div>
    )
}

export default Sidebar