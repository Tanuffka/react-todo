import "./styles.css";

export default function TodoCreator() {
    return (
        <div className="todocreator">
            <input type="text" placeholder="Create your todo..."></input>
            <button>Create</button>
        </div>
    );
}