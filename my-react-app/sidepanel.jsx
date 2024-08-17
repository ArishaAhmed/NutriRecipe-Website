// import React from 'react';
// import './sidepanel.css';

// const SidePanel = ({ selectedCategory, setSelectedCategory }) => {
//   const handleClick = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div className="side-panel">
//       <button onClick={() => handleClick('BreakFast')}>
//         Breakfast
//       </button>
//       <br />
//       <button onClick={() => handleClick('Lunch')}>
//         Lunch
//       </button>
//       <br />
//       <button onClick={() => handleClick('Dinner')}>
//         Dinner
//       </button>
//       <br />
//       <button onClick={() => handleClick('Dessert')}>
//         Dessert
//       </button>
//       <br />
//       <button onClick={() => handleClick('Snack')}>
//         Snack
//       </button>
//     </div>
//   );
// };

// export default SidePanel;


import React from 'react';
import './sidepanel.css';

const SidePanel = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ['BreakFast', 'Lunch', 'Dinner', 'Dessert', 'Snack'];

  return (
    <div className="side-panel">
      {categories.map(category => (
        <a
          key={category}
          href="#!"
          className={selectedCategory === category ? 'selected' : ''}
          onClick={() => setSelectedCategory(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
        </a>
      ))}
    </div>
  );
};

export default SidePanel;
