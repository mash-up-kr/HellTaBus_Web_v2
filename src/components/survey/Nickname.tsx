import React from 'react';

interface Props {
  setState: (value: string) => void;
  setPageCount: (page: number) => void;
}

function Nickname({ setState, setPageCount }: Props) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;

    setState(value);
  };

  const onSubmit = () => {
    setPageCount(1);
  };

  return (
    <div className="usernamewrap">
      <div className="usernamebody">
        <h2>당신을 뭐라고 불러드릴까요?</h2>
        <input type="text" onChange={onChange} />
        <h3>라고 불러줘</h3>
        <button className="next__button" type="button" onClick={onSubmit}>
          다음
        </button>
      </div>
    </div>
  );
}

export default Nickname;
