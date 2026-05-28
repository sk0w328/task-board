import { useState } from 'react'
import styles from './TaskInput.module.css'

export default function TaskInput({ onAdd }) {
  const [value, setValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setValue('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="タスクを入力..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button className={styles.button} type="submit" disabled={!value.trim()}>
        追加
      </button>
    </form>
  )
}
