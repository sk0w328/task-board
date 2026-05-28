import styles from './TaskItem.module.css'

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`${styles.item} ${task.completed ? styles.completed : ''}`}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        id={task.id}
      />
      <label className={styles.label} htmlFor={task.id}>
        {task.text}
      </label>
      <button
        className={styles.deleteButton}
        onClick={() => onDelete(task.id)}
        aria-label="タスクを削除"
      >
        ✕
      </button>
    </li>
  )
}
