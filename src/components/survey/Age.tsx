import React from 'react'
import styles from './Age.module.scss'

interface Props {
  age: number
  setAge: (value: number) => void
  setPageCount: (page: number) => void
}

function Age({ age, setAge, setPageCount }: Props): JSX.Element {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target

    setAge(+value)
  }

  const onSubmit = () => {
    setPageCount(3)
  }

  return (
    <div>
      <span>나이를 알려주세요</span>
      <input type="text" placeholder="00" value={age} onChange={onChange} />
      <button className={styles.next__button} type="button" onClick={onSubmit}>
        다음
      </button>
    </div>
  )
}

export default Age
