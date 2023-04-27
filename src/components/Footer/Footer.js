import './styles.css';

const yearNow = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="footer">{yearNow} &copy; Tanuffka</footer>
    );
}