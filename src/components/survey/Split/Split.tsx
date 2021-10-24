import styles from './split.module.scss'
import ProgressBar from '../ProgressBar/ProgressBar'
import classNames from 'classnames/bind'
import SplitWorking from '../SplitWorking/SplitWorking'

const { s_container, s_images_container, s_error_icon, s_title, s_next__button, s_error_msg } =
  styles

interface Props {
  setSplit: (value: number) => void
  setPageCount: (page: number) => void
}

function Split({ setSplit, setPageCount }: Props) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target

    setSplit(+value)
  }

  const onClick = (splitNumber: number) => {
    console.log(splitNumber)
    setSplit(splitNumber)
  }

  const onSubmit = () => {
    setPageCount(4)
  }

  return (
    <>
      <ProgressBar ratio={6} />
      <div className={classNames(s_container)}>
        <h1 className={classNames(s_title)}>몇 분할로 운동을 원하시나요?</h1>
        <div className={classNames(s_images_container)}>
          <SplitWorking split={0} onClick={onClick}></SplitWorking>
          <SplitWorking split={3} onClick={onClick}></SplitWorking>
          <SplitWorking split={5} onClick={onClick}></SplitWorking>
        </div>
      </div>
      <button
        className={classNames(s_next__button)}
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
