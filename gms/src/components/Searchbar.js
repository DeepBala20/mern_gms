export default function Searchbar(){
    return(
        <>
            <div className="search-form">
                <input type="search" id="search-box" placeholder="search here ..."/>
                <label for="search-box" className="fa fa-search"></label>
            </div>
        </>
    )
}