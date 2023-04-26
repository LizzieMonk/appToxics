import { atom } from "recoil";

export const toxicState = atom({
  key: "toxicState",
  default: [
    { name: "Kyzya 1998", birth: new Date(), toxic: 78, dushnila: true },
    { name: "toxic_2", birth: new Date(2011, 4, 1, 0), toxic: 70, dushnila: false },
    { name: "toxic_1", birth: new Date(2011, 0, 1, 2, 3, 4, 567), toxic: 75, dushnila: false },
  ],
});

// export const draw = atom({
//   key: "draw",
//   default: false,
// });

// export const matrix = atom({
//   key: "matrix",
//   default: [
//     { value: "karmic debt", level: 1 },
//   ],
// });
