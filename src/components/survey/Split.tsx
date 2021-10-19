interface Props {
  split: number
  setSplit: (value: number) => void
  setPageCount: (page: number) => void
}

function Split({ split, setSplit, setPageCount }: Props) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target

    setSplit(+value)
  }

  const onSubmit = () => {
    setPageCount(5)
  }

  return (
    <div className="splitwrap">
      <div className="split">
        <h2>몇 분할로 운동을 원하시나요?</h2>
        <div onChange={onChange}>
          <input type="radio" value="0" /> 0분할
          <input type="radio" value="3" /> 3분할
          <input type="radio" value="5" /> 5분할
        </div>
      </div>
      <button className="next__button" type="button" onClick={onSubmit}>
        다음
      </button>
    </div>
  )
}

export default Split
