import React, { useState } from 'react'
import styles from './BodyInfo.module.scss'

interface Props {
  nickname: string
  setHeight: (value: number) => void
  setWeight: (value: number) => void
  setPageCount: (page: number) => void
}

function BodyInfo({ nickname, setHeight, setWeight, setPageCount }: Props): JSX.Element {
  const [heightError, setHeightError] = useState<boolean | string>(true)
  const [weightError, setWeightError] = useState<boolean | string>(true)

  const changeHeight = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target

    setHeight(+value)
    if (!value) {
      setHeightError('정보를 입력해 주세요')
    } else if (Number.isNaN(+value)) {
      setHeightError('키는 숫자만 입력 가능합니다.')
    } else if (+value > 300) {
      setHeightError(`정말 ${value}cm 맞으신가요!?🤔`)
    } else {
      setHeightError('')
    }
  }

  const changeWeight = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target

    setWeight(+value)

    if (!value) {
      setWeightError('정보를 입력해 주세요')
    } else if (Number.isNaN(+value)) {
      setWeightError('몸무게는 숫자만 입력 가능합니다.')
    } else if (+value > 1000) {
      setWeightError(`정말 ${value}kg 맞으신가요!?🤔`)
    } else {
      setWeightError('')
    }
  }

  const onSubmit = () => {
    setPageCount(4)
  }

  return (
    <div className={styles.container}>
      <section>
        <h2>
          {nickname}님의 <span>키&몸무게</span>를 알려주세요
        </h2>
        <span>키</span>
        <input type="text" onChange={changeHeight} />
        <span> cm</span>
      </section>
      {heightError && <span className={styles.error_msg}>{heightError}</span>}

      <section>
        <span>몸무게</span>
        <input type="text" onChange={changeWeight} />
        <span> kg</span>
      </section>
      {weightError && <span className={styles.error_msg}>{weightError}</span>}
      <button
        className={styles.next__button}
        type="button"
        onClick={onSubmit}
        disabled={!!weightError || !!heightError}
      >
        다음
      </button>
    </div>
  )
}

export default BodyInfo
