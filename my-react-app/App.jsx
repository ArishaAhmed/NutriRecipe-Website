// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// import DiseasePage from './Diseases.jsx';
// import HomePage from './Home.jsx';
// import MenuPage from './Menu.jsx';
// import Header from './Header.jsx';
// import Footer from './Footer.jsx';
// import Recipe from './Recipe.jsx';
// import BlogsPage from './Blogs.jsx';
// import LoginForm from './LoginForm.jsx';
// import RegisterForm from './RegisterForm.jsx';
// import ProfilePage from './profilepage.jsx';
// import MenuRecipe from './menu_recipe.jsx';
// import DisplayRecipe from './DisplayRecipe.jsx';


// const Layout = ({ children }) => {
//   const location = useLocation();

//   // Define routes where the Header and Footer should not be displayed
//   const noHeaderFooterRoutes = ['/login', '/register'];

//   return (
//     <>
//       {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}
//       {children}
//       {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
//     </>
//   );
// };

// const App = () => {
//   const [selectedRecipe, setSelectedRecipe] = useState(null);

//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/blogs" element={<BlogsPage />} />
//           <Route path="/diseases" element={<DiseasePage />} />
//           <Route path="/recipe/:dish" element={<DisplayRecipe selectedRecipe={selectedRecipe} />} />
//           <Route path="/NutriRecipe" element={<MenuRecipe />} />
//           <Route path="/menu/:category" element={<MenuPage setSelectedRecipe={setSelectedRecipe} />} />
//           <Route path="/:category/:dish" element={<Recipe selectedRecipe={selectedRecipe} />} /> {/* Updated path */}
//           <Route path="/login" element={<LoginForm />} />
//           <Route path="/register" element={<RegisterForm />} /> {/* Add route for RegisterForm */}
//           <Route path="/profile" element={<ProfilePage />} /> {/* Add route for ProfilePage */}
//           <Route path="/recipes" element={<Recipe />} />
//           {/* Add more routes as needed */}
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// };

// export default App;


// ///Important
// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// import DiseasePage from './Diseases.jsx';
// import HomePage from './Home.jsx';
// import MenuPage from './Menu.jsx';
// import Header from './Header.jsx';
// import Footer from './Footer.jsx';
// import Recipe from './Recipe.jsx';
// import BlogsPage from './Blogs.jsx';
// import LoginForm from './LoginForm.jsx';
// import RegisterForm from './RegisterForm.jsx';
// import ProfilePage from './profilepage.jsx';
// import MenuRecipe from './menu_recipe.jsx';

// import RecipeDisplay from './RecipeDisplay.jsx';



// const Layout = ({ children }) => {
//   const location = useLocation();

//   // Define routes where the Header and Footer should not be displayed
//   const noHeaderFooterRoutes = ['/login', '/register'];

//   return (
//     <>
//       {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}
//       {children}
//       {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
//     </>
//   );
// };

// const App = () => {
//   const [selectedRecipe, setSelectedRecipe] = useState(null);

//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/blogs" element={<BlogsPage />} />
//           <Route path="/diseases" element={<DiseasePage />} />
//           {/* <Route path="/recipe/:dish" element={<DisplayRecipe selectedRecipe={selectedRecipe} />} /> */}
//           {/* <Route path="/recipe/:dish" element={<Recipe />} /> */}

//           <Route path="/NutriRecipe" element={<MenuRecipe />} />
//           <Route path="/menu/:category" element={<MenuPage setSelectedRecipe={setSelectedRecipe} />} />
//           <Route path="/:category/:dish" element={<Recipe selectedRecipe={selectedRecipe} />} />
//           <Route path="/login" element={<LoginForm />} />
//           <Route path="/register" element={<RegisterForm />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           {/* <Route path="/menu" element={<MenuPage />} /> */}
//           {/* <Route path="/menu" element={<RecipeDisplay />} /> */}
//           <Route path="/recipe/:dish" element={<RecipeDisplay />} /> {/* Updated component name */}
//           {/* Define other routes here */}
//           {/* Add more routes as needed */}
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// import DiseasePage from './Diseases.jsx';
// import HomePage from './Home.jsx';
// import MenuPage from './Menu.jsx';
// import Header from './Header.jsx';
// import Footer from './Footer.jsx';
// import Recipe from './Recipe.jsx';
// import BlogsPage from './Blogs.jsx';
// import LoginForm from './LoginForm.jsx';
// import RegisterForm from './RegisterForm.jsx';
// import ProfilePage from './profilepage.jsx';
// import MenuRecipe from './menu_recipe.jsx';
// import RecipeDisplay from './RecipeDisplay.jsx'; // Import the RecipeDisplay component

// const Layout = ({ children }) => {
//   const location = useLocation();

//   // Define routes where the Header and Footer should not be displayed
//   const noHeaderFooterRoutes = ['/login', '/register'];

//   return (
//     <>
//       {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}
//       {children}
//       {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
//     </>
//   );
// };

// const App = () => {
//   const [selectedRecipe, setSelectedRecipe] = useState(null);

//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/blogs" element={<BlogsPage />} />
//           <Route path="/diseases" element={<DiseasePage />} />
//           <Route path="/recipe/:dish" element={<Recipe />} />
//           <Route path="/NutriRecipe" element={<MenuRecipe />} />
//           {/* <Route path="/menu/:category" element={<MenuPage />} /> */}
//           <Route path="/menu/:category" element={<MenuPage setSelectedRecipe={setSelectedRecipe} />} />
//           <Route path="/:category/:dish" element={<Recipe selectedRecipe={selectedRecipe} />} />
//           <Route path="/recipe-display" element={<RecipeDisplay />} /> {/* Route for RecipeDisplay */}
//           <Route path="/login" element={<LoginForm />} />
//           <Route path="/register" element={<RegisterForm />} />
//           <Route path="/profile" element={<ProfilePage />} />

//           {/* Define other routes here */}
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// import DiseasePage from './Diseases.jsx';
// import HomePage from './Home.jsx';
// import MenuPage from './Menu.jsx';
// import Header from './Header.jsx';
// import Footer from './Footer.jsx';
// import Recipe from './Recipe.jsx';
// import BlogsPage from './Blogs.jsx';
// import LoginForm from './LoginForm.jsx';
// import RegisterForm from './RegisterForm.jsx';
// import ProfilePage from './profilepage.jsx';
// import MenuRecipe from './menu_recipe.jsx';
// import RecipeDisplay from './RecipeDisplay.jsx'; // Import RecipeDisplay component

// const Layout = ({ children }) => {
//   const location = useLocation();

//   // Define routes where the Header and Footer should not be displayed
//   const noHeaderFooterRoutes = ['/login', '/register'];

//   return (
//     <>
//       {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}
//       {children}
//       {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
//     </>
//   );
// };

// const App = () => {
//   const [selectedRecipe, setSelectedRecipe] = useState(null);

//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/blogs" element={<BlogsPage />} />
//           <Route path="/diseases" element={<DiseasePage />} />
//           <Route path="/NutriRecipe" element={<MenuRecipe />} />

//           {/* RecipeDisplay route */}
//           <Route path="/recipe/:dish" element={<RecipeDisplay />} />

//           {/* MenuRecipe route */}
//           <Route path="/menu-recipe/:category" element={<MenuRecipe setSelectedRecipe={setSelectedRecipe} />} />

//           {/* Existing MenuPage route */}
//           <Route path="/menu/:category" element={<MenuPage setSelectedRecipe={setSelectedRecipe} />} />

//           {/* Existing Recipe route */}
//           <Route path="/:category/:dish" element={<Recipe selectedRecipe={selectedRecipe} />} />

//           {/* Login, Register, Profile routes */}
//           <Route path="/login" element={<LoginForm />} />
//           <Route path="/register" element={<RegisterForm />} />
//           <Route path="/profile" element={<ProfilePage />} />

//           {/* Add more routes as needed */}
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import DiseasePage from './Diseases.jsx';
// import HomePage from './Home.jsx';
// import MenuPage from './Menu.jsx';
// import Header from './Header.jsx';
// import Footer from './Footer.jsx';
// import Recipe from './Recipe.jsx';
// import BlogsPage from './Blogs.jsx';
// import LoginForm from './LoginForm.jsx';
// import RegisterForm from './RegisterForm.jsx';
// import ProfilePage from './profilepage.jsx';
// import MenuRecipe from './menu_recipe.jsx';
// import RecipeDisplay from './RecipeDisplay.jsx';

// const Layout = ({ children }) => {
//   const location = useLocation();

//   // Define routes where the Header and Footer should not be displayed
//   const noHeaderFooterRoutes = ['/login', '/register'];

//   return (
//     <>
//       {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}
//       {children}
//       {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
//     </>
//   );
// };

// const App = () => {
//   const [selectedRecipe, setSelectedRecipe] = useState(null);

//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/blogs" element={<BlogsPage />} />
//           <Route path="/diseases" element={<DiseasePage />} />
//           <Route path="/menu" element={<MenuPage setSelectedRecipe={setSelectedRecipe} />} /> {/* Direct menu access */}
//           <Route path="/menu/disease/:category" element={<MenuRecipe />} /> {/* Disease-specific menu access */}
//           <Route path="/:category/:dish" element={<Recipe selectedRecipe={selectedRecipe} />} />
//           <Route path="/login" element={<LoginForm />} />
//           <Route path="/register" element={<RegisterForm />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/menu/:category/:dish" element={<RecipeDisplay />} /> {/* Updated component name */}
//           {/* Define other routes here */}
//           {/* Add more routes as needed */}
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import DiseasePage from './Diseases.jsx';
import HomePage from './Home.jsx';
import MenuPage from './Menu.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Recipe from './Recipe.jsx';
import BlogsPage from './Blogs.jsx';
import LoginForm from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';
import ProfilePage from './profilepage.jsx';
import MenuRecipe from './menu_recipe.jsx';
import RecipeDisplay from './RecipeDisplay.jsx';
import ScrollToTop from './ScrollToTop'; // Importing ScrollToTop

const Layout = ({ children }) => {
  const location = useLocation();

  // Define routes where the Header and Footer should not be displayed
  const noHeaderFooterRoutes = ['/login', '/register'];

  return (
    <>
      {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}
      {children}
      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Adding ScrollToTop component */}
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/diseases" element={<DiseasePage />} />
          <Route path="/NutriRecipe" element={<MenuRecipe />} />
          <Route path="/menu/:category" element={<MenuPage setSelectedRecipe={setSelectedRecipe} />} />
          <Route path="/:category/:dish" element={<Recipe selectedRecipe={selectedRecipe} />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/recipe/:dish" element={<RecipeDisplay />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
