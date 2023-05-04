import styles from './Input.module.css'

// eslint-disable-next-line react/prop-types
const Input = ({placeholder, type}) => {
  return (
    <input type={type} placeholder={placeholder} className={styles.red}/>
  )
}

export default Input