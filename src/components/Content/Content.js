import './styles.css';

import Card from '../Card';
import PageTitle from '../PageTitle';
import TodoCreator from '../TodoCreator';
import TodoItem from '../TodoItem';

export default function Content() {
    return (
        <div className="content">
            <PageTitle />
            <Card>
                <TodoCreator />
                <TodoItem />
            </Card>
        </div>
    );
}