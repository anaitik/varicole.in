// import React, { useState, useEffect } from 'react';

// const Cat = () => {
//   const [catPicture, setCatPicture] = useState(null);

//   useEffect(() => {
//     const fetchCatPicture = async () => {
//       const response = await fetch('https://api.thecatapi.com/v1/images/search');
//       const data = await response.json();
//       setCatPicture(data[0].url);
//     };

//     fetchCatPicture();
//   }, []);

//   const handleFetchClick = () => {
//     fetchCatPicture();
//   };

//   return (
//     <div>
//       <button onClick={handleFetchClick}>Fetch</button>
//       {catPicture && <img src={catPicture} alt="Cat" />}
//     </div>
//   );
// };

// export default Cat;

import React, { useState, useEffect } from 'react';

const Cat = () => {
  const [catPicture, setCatPicture] = useState(null);

  const fetchCatPicture = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    setCatPicture(data[0].url);
  };

  useEffect(() => {
    fetchCatPicture();
  }, []);

  const handleFetchClick = () => {
    fetchCatPicture();
  };

  return (
    <div>
      <button onClick={handleFetchClick}>Fetch</button>
      {catPicture && <img src={catPicture} alt="Cat" />}
    </div>
  );
};

export default Cat;

