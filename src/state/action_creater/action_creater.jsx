


//  export const Ptheme = (status) => {
//   return {
//     type: "Ptheme",
//     payload: status,
//   };
// };

export const setPieceClassName = (className) => {
  return {
    type: "SETCLASS",
    payload: className,
  };
};

// export const setPieceClassName = (className) => {
//   return {
//     type: 'SET_PIECE_CLASS',
//     className, // Use shorthand property syntax to avoid "payload" key
//   };
// };