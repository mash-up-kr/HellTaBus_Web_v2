import styles from './gender.module.scss';
import ProgressBar from '../ProgressBar/ProgressBar';
import classNames from 'classnames/bind';

const { container, title, gender__button, next__button } = styles;

interface Props {
  nickname: string;
  gender: string;
  setGender: (value: string) => void;
  setPageCount: (page: number) => void;
}

function Gender({ nickname, gender, setGender, setPageCount }: Props): JSX.Element {
  const onSubmit = () => {
    setPageCount(2);
  };

  const handleClick = (gender: string) => () => {
    setGender(gender);
  };

  return (
    <>
      <ProgressBar ratio={2} />
      <div className={classNames(container)}>
        <h1 className={classNames(title)}>
          {nickname}님의 <span>성별</span>은 무엇인가요?
        </h1>
        <div>
          <button
            className={classNames(gender__button)}
            autoFocus={gender === 'male'}
            onClick={handleClick('male')}
          >
            남성
          </button>
          <button
            className={classNames(gender__button)}
            autoFocus={gender === 'female'}
            onClick={handleClick('female')}
          >
            여성
          </button>
        </div>
        <button
          className={classNames(next__button)}
          type="button"
          onClick={onSubmit}
          disabled={!gender}
        >
          다음
        </button>
      </div>
    </>
  );
}

export default Gender;
