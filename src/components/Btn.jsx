import React from 'react';

function Btn({ color, content = "Black", setColor }) {
  return (
    <button
      className="px-4 md:px-10 py-2 rounded-full text-white"
      style={{ backgroundColor: color }}
      onClick={() => setColor(color)}
    >
      {content}
    </button>
  );
}

export default Btn;


// import React from 'react'

// function Btn({color,content="Black",setColor}) {
//   return (
//     <div>
//       <button className=" px-10 py-2 rounded-full text-white"style={{backgroundColor:color}} onClick={() => setColor(color)}>{content}</button>
//     </div>
//   )
// }

// export default Btn
