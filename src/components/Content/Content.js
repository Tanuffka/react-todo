import './styles.css';

import Card from '../Card';
import PageTitle from '../PageTitle';
import TodoCreator from '../TodoCreator';

export default function Content() {
    return (
        <div className="content">
            <PageTitle />
            <Card>
            <TodoCreator/>
            </Card>
        </div>
    );
}