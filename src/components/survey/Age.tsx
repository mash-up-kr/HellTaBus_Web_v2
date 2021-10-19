import React, { useState } from 'react'
import styles from './Age.module.scss'

interface Props {
  nickname: string
  setAge: (value: number) => void
  setPageCount: (page: number) => void
}

function Age({ nickname, setAge, setPageCount }: Props): JSX.Element {
  const [error, setError] = useState<boolean | string>(true)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target

    setAge(+value)

    if (Number.isNaN(+value)) {
      setError('나이에는 숫자만 입력 가능합니다.')
    } else if (+value > 200) {
      setError(`정말 ${value}살이 맞으신가요?`)
    } else if (!value) {
      setError('나이를 입력해 주세요.')
    } else {
      setError('')
    }
  }

  const onSubmit = () => {
    setPageCount(3)
  }

  return (
    <div className={styles.container}>
      <h2>
        {nickname}님의 <span>나이</span>를 알려주세요
      </h2>
      <input type="text" placeholder="00" onChange={onChange} />
      {error && <p className={styles.error_msg}>{error}</p>}
      <button className={styles.next__button} type="button" onClick={onSubmit} disabled={!!error}>
        다음
      </button>
    </div>
  )
}

export default Age
