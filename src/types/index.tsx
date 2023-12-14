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
  switchTwo: boolean;
  api: any[];
};

export type actionType =
  | { type: "plus" }
  | { type: "mySwitch"; payload: boolean }
  | { type: "myApi"; payload: any[] }
  | { type: "switchClick"; item: boolean };
