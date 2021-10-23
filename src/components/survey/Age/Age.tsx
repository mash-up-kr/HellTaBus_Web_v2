import React, { useState } from 'react';
import styles from './age.module.scss';
import classNames from 'classnames/bind';
import ProgressBar from '../ProgressBar/ProgressBar';

const { container, title, common_input, error_msg, next__button } = styles;

interface Props {
  nickname: string;
  age: number;
  setAge: (value: number) => void;
  setPageCount: (page: number) => void;
}

function Age({ nickname, age, setAge, setPageCount }: Props): JSX.Element {
  const [error, setError] = useState<boolean | string>(!age);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;

    if (Number.isNaN(+value)) {
      setError('나이에는 숫자만 입력 가능합니다.');
    } else if (+value < 5 || +value > 200) {
      setAge(+value);
      setError(`정말 ${value}살이 맞으신가요?`);
    } else {
      setAge(+value);
      setError(false);
    }
  };

  const onSubmit = () => {
    setPageCount(3);
  };

  return (
    <>
      <ProgressBar ratio={3} />
      <div className={container}>
        <h1 className={classNames(title)}>
          {nickname}님의 <span>나이</span>를 알려주세요
        </h1>
        <input
          className={classNames(common_input)}
          type="text"
          placeholder="00"
          value={age}
          onChange={onChange}
        />
        {error && <p className={classNames(error_msg)}>{error}</p>}
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

export default Age;
