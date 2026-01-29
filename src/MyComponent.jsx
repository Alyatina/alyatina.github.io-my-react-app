import { useState } from "react";

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-component">
      <h2>✨ Маленька деталь</h2>

      <p className="my-component-subtitle">
        Невеликий React-компонент
      </p>

      <button
        className="like-button"
        onClick={() => setOpen(!open)}
      >
        {open ? "Сховати інформацію" : "Дізнатись більше"}
      </button>

      {open && (
        <div className="my-component-content">
          <p>
            Іноді, щоб дізнатися щось нове, треба трохи ентропії — вийти за межі порядку, 
            прийняти невизначеність і дати простір випадковості.
          </p>

        </div>
      )}
    </div>
  );
}

export default MyComponent;