function Header() {
return ( <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> <div className="container">


            <a className="navbar-brand" href="/">
                PROJET1
            </a>

            <div className="navbar-nav ms-auto">

                <a className="nav-link active" href="/">
                    Accueil
                </a>

                <a className="nav-link" href="/about">
                    À propos
                </a>

                <a className="nav-link" href="/services">
                    Services
                </a>

                <a className="nav-link" href="/contact">
                    Contact
                </a>

                <button className="btn btn-primary ms-3">
                    Connexion
                </button>

            </div>
        </div>
    </nav>
);


}

export default Header;
