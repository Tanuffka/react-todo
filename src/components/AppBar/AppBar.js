import './styles.css';

import Avatar from '../Avatar';
import Logo from '../Logo';

export default function AppBar() {
    return (
        <header className="appbar">
            <Logo />
            <Avatar />
        </header>
    );
}
