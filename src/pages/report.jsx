import { useState } from 'react';

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastName, setLastName] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // use the last name and first name to find the report throught database

    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>select first feature</button>

      {isModalOpen && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <label>
              Last Name：
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </label>
            <button type="submit">submitted</button>
            <button type="button" onClick={handleCloseModal}>off</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
