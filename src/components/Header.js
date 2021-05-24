import './Header.css';

function Header() {
    return (
        <>
            <div className='header-container'>
                <span className='companyName'>Photo App</span>
                <div className='menu-container'>
                    <ul className='listItem-container'>
                        <li className='list-item'>
                            <a href='#' className='link'>
                                Profile
                            </a>
                        </li>
                        <li className='list-item'>
                            <a href='#' className='link'>Explore</a>
                        </li>
                        <li className='list-item'>
                            <a href='#' className='link'>Message</a>
                        </li>
                        <li className='list-item'>
                            {/* <img src='./img/homeIcon.png'></img> */}
                            <a href='#' className='link'>
                                Home
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;