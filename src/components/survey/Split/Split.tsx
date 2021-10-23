import styles from './split.module.scss';
import ProgressBar from '../ProgressBar/ProgressBar';
import classNames from 'classnames/bind';
import SplitWorking from '../SplitWorking/SplitWorking';

const { s_container, s_images_container, s_error_icon, s_title, s_next__button, s_error_msg } =
  styles;

interface Props {
  setSplit: (value: number) => void;
  setPageCount: (page: number) => void;
}

function Split({ setSplit, setPageCount }: Props) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;
    console.log(e.target);

    setSplit(+value);
  };

  const onClick = (splitNumber: number) => {
    console.log(splitNumber);

    setSplit(splitNumber);
  };

  const onSubmit = () => {
    setPageCount(4);
  };

  return (
    <>
      <ProgressBar ratio={6} />
      <div className={classNames(s_container)}>
        <h1 className={classNames(s_title)}>몇 분할로 운동을 원하시나요?</h1>
        <div className={classNames(s_images_container)}>
          <SplitWorking split={0} title={'무분할'} onClick={onClick}>
            가슴, 어깨, 팔, 등, 하체를 하루에 운동하는 방법으로 초보자에게 추천합니다.
          </SplitWorking>
          <SplitWorking split={3} title={'3분할'} onClick={onClick}>
            가슴, 이두 / 등, 삼두/ 하체, 어깨로 3개 부위로 나눠서 운동하는 방법입니다.
          </SplitWorking>
          <SplitWorking split={5} title={'5분할'} onClick={onClick}>
            가슴 / 등/ 삼두 / 하체 / 어깨로 5개 부위로 나눠서 운동하는 방법입니다.
          </SplitWorking>
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
  );
}

export default Split;
