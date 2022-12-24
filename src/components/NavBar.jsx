import "bootswatch/dist/sandstone/bootstrap.min.css"

function NavBar (){

return(
<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="./Home"><img src="../logo-pagina.svg" alt="" width={120} /> </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                <a className="nav-link" href="./Productos">Productos</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="./Contacto">Contacto</a>
                </li>
           </ul>
        </div>
    </div>
</nav>
</>
 )
}

export default NavBar