import styles from './splitWorking.module.scss'
import classNames from 'classnames/bind'
import { splitImages, splitTitles, splitContents } from '../../../consts/Constant'

const { s_container, s_img, s_title, s_description } = styles

interface Props {
  split: number
  onClick: (splitNumber: number) => void
}

function SplitWorking({ split, onClick }: Props): JSX.Element {
  return (
    <div className={classNames(s_container)} onClick={() => onClick(split)}>
      <div className={classNames(s_img)}>
        <>{splitImages[split]}</>
      </div>
      <div className={classNames(s_title)}>{splitTitles[split]}</div>
      <div className={classNames(s_description)}>{splitContents[split]}</div>
    </div>
  )
}

export default SplitWorking
