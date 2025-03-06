import { useState } from 'react';
import styles from '../styles/home.module.css';

export default function EventTypes() {
  const [eventType, setEventType] = useState({
    id: '',
    name: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Type submitted:', eventType);
    // Here you would typically send the data to an API
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventType(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Cadastro de Tipos de Evento
        </h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={eventType.id}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={eventType.name}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.button}>
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  );
}