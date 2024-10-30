import { Link, Outlet } from 'react-router-dom';
import './style.css';

function Navbar() {
    const pagesRoute = [
        {title: 'Home', path: '/'},
        {title: 'Add Project', path: '/add-project'},
        {title: 'View Project', path: '/view-project'}
    ]
    return ( 
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-success py-3">
                <div className="container-fluid">
                <Link className="navbar-brand navbar__title" to="/">Project Showcase</Link>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        {pagesRoute.map((page, index) => (
                            <li className="nav-item" key={`navbar-pageLink-${index}`}>
                                <Link className="nav-link text-white" to={page.path}>{page.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
            </nav>
            <Outlet />
        </div>
     );
}

export default Navbar;