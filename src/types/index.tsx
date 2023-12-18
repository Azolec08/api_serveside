export interface cardType {
  id: number;
  img: string;
  title: string;
  year: number;
  text: string;
  song: any;
  trailer: string;
  info: string;
  genre: string;
  video: string;
  songTitle: string;
}

export type stateType = {
  num: number;
  switch: boolean;
};

export type actionType =
  | { type: "decrement"; payload: number }
  | { type: "mySwitch"; payload: boolean };
