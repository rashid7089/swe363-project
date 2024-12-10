import { Link, Outlet } from 'react-router-dom';
import './style.css';
import PropTypes from 'prop-types';

function Navbar({ HideListItems } = { HideListItems: false }) {
    const pagesRoute = [
        { title: 'Home', path: '/home' },
        { title: 'Add Project', path: '/add-project' },
        { title: 'My Profile', path: '/profile' }
    ];

    return (
        <div className='navbar__container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-success py-3">
                <div className="container-fluid">
                    <Link className="navbar-brand navbar__title" to="/">Project Showcase</Link>
                    <div className="collapse navbar-collapse justify-content-end">
                        <ul className="navbar-nav">
                            {!HideListItems && pagesRoute.map((page, index) => (
                                <li className="nav-item mx-2" key={`navbar-pageLink-${index}`}>
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

Navbar.propTypes = {
    HideListItems: PropTypes.bool
};

export default Navbar;
