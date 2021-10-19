import styles from './Split.module.scss'
import ProgressBar from '../common/ProgressBar'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

interface Props {
  setSplit: (value: number) => void
  setPageCount: (page: number) => void
}

function Split({ setSplit, setPageCount }: Props) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target

    setSplit(+value)
  }

  const onSubmit = () => {
    setPageCount(4)
  }

  return (
    <>
      <div className="wrapper">
        <ProgressBar percent={5 / 5} />
        <div className={cx('container')}>
          <h2>몇 분할로 운동을 원하시나요?</h2>
          <div onChange={onChange}>
            <input className={cx('split_input')} type="radio" value="1" name="split" /> 0분할
            <input className={cx('split_input')} type="radio" value="3" name="split" /> 3분할
            <input className={cx('split_input')} type="radio" value="5" name="split" /> 5분할
          </div>
        </div>
      </div>
      <button
        className={cx('next__button')}
        type="button"
        onClick={onSubmit}
        // disabled={errorInfo ? true : false}
      >
        다음
      </button>
    </>
  )
}

export default Split
