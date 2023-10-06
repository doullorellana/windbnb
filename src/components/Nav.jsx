const Nav = (fnHandleSubmit) => {
    return (
        <>
            <form class="row g-3" className="searchForm" onSubmit={fnHandleSubmit}>
                <div class="col-auto">
                    <input type="text" className="inputSearch" class="form-control" name="" id="" placeholder="Search city"/>
                </div>

                <div class="col-auto">
                    <button type="submit" className="buttonSearch" class="btn btn-primary mb-3">Buscar</button>
                </div>
            </form>
        </>
    )
}

export default Nav;