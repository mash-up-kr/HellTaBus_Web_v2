import React from 'react'

interface Props {
  weight: number
  height: number
  setHeight: (value: number) => void
  setWeight: (value: number) => void
  setPageCount: (page: number) => void
}

function BodyInfo({ weight, height, setHeight, setWeight, setPageCount }: Props): JSX.Element {
  const changeHeight = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target

    setHeight(+value)
  }

  const changeWeight = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target

    setWeight(+value)
  }

  const onSubmit = () => {
    setPageCount(4)
  }

  return (
    <div className="BodyInfo__wrapper">
      <div>
        <span>키</span>
        <input type="text" value={height} onChange={changeHeight} />
        <span> cm</span>
      </div>
      <div>
        <span>몸무게</span>
        <input type="text" value={weight} onChange={changeWeight} />
        <span> kg</span>
      </div>
      <button className="next__button" type="button" onClick={onSubmit}>
        다음
      </button>
    </div>
  )
}

export default BodyInfo
