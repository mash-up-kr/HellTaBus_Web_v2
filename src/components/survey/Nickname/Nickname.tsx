import { useState } from 'react';
import styles from './nickname.module.scss';
import ProgressBar from '../ProgressBar/ProgressBar';
import classNames from 'classnames/bind';

const { container, title, common_input, error_msg, next__button } = styles;

interface Props {
  nickname: string;
  setNickname: (value: string) => void;
  setPageCount: (page: number) => void;
}

function Nickname({ nickname, setNickname, setPageCount }: Props) {
  const nickRegex = /^[가-힣\s|ㄱ-ㅎ|a-z|A-Z|0-9|_|.|,]+$/g;
  const nickLengthRegex = /^.{2,8}$/g;
  const [error, setError] = useState<boolean | string>(!nickname);

  // onChange
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;
    setNickname(value); // setState

    if (!nickRegex.test(value)) {
      setError('한글, 영어, 숫자, 특수문자(_.,)만 가능해요');
    } else if (!nickLengthRegex.test(value)) {
      setError('2 ~ 8글자만 가능해요');
    } else {
      setError(false);
    }
  };

  // onSubmit
  const onSubmit = () => {
    setPageCount(1);
  };

  return (
    <>
      <ProgressBar ratio={1} />
      <div className={classNames(container)}>
        <h1 className={classNames(title)}>당신을 뭐라고 불러드릴까요?</h1>
        <input
          className={classNames(common_input, { [styles.s_error_input]: error })}
          type="text"
          placeholder="닉네임 입력"
          value={nickname}
          onChange={onChange}
        />

        {/* {typeof error === 'string' && (
          <div className={styles.error__icon}>
            <ErrorOutlineIcon />
          </div>
        )} */}
        {error && <span className={classNames(error_msg)}>{error}</span>}
        <button
          className={classNames(next__button)}
          type="button"
          onClick={onSubmit}
          disabled={!!error}
        >
          다음
        </button>
      </div>
    </>
  );
}

export default Nickname;
