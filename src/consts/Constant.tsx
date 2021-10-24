import { ReactComponent as Pizza0 } from '../assets/pizza0.svg'
import { ReactComponent as Pizza3 } from '../assets/pizza3.svg'
import { ReactComponent as Pizza5 } from '../assets/pizza5.svg'

export const splitImages: { [key: number]: JSX.Element } = {
  0: <Pizza0 />,
  3: <Pizza3 />,
  5: <Pizza5 />,
}

export const splitTitles: { [key: number]: string } = {
  0: '무분할',
  3: '3분할',
  5: '5분할',
}

export const splitContents: { [key: number]: string } = {
  0: '가슴, 어깨, 팔, 등, 하체를 하루에 운동하는 방법으로 초보자에게 추천합니다.',
  3: '가슴, 이두 / 등, 삼두/ 하체, 어깨로 3개 부위로 나눠서 운동하는 방법입니다.',
  5: '가슴 / 등/ 삼두 / 하체 / 어깨로 5개 부위로 나눠서 운동하는 방법입니다.',
}
