import './styles.css';

import Card from '../Card';
import PageTitle from '../PageTitle';

export default function Content() {
    return (
        <div className="content">
            <PageTitle />
            <Card />
        </div >
    );
}