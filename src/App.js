import logo from './logo.svg';
import './App.css';
import { useState, useContext, createContext } from 'react'
import PetONE from './componenets/PetOne'
import PetTow from './componenets/PetTow';
import PetThree from './componenets/PetThree';
import PetFour from './componenets/PetFour';
import PetFive from './componenets/PetFive';
import PetsAmount from './componenets/TypeAmount'
import MyRouter from './componenets/Router';
import MainOffice from './OfficeComponents/Office';
export const CreateContext1 = createContext();
const ProviderCon = CreateContext1.Provider


// משימת חיות פלוס משימת ראוטינג
// const PetsArray = [{type:"dog",age:5,amount:12,info:"https://en.wikipedia.org/wiki/Dog",img:"https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},{type:"cat",age:2,amount:3,info:"https://he.wikipedia.org/wiki/Cat",img:"https://images.unsplash.com/photo-1535464053056-cc294d1c5946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"},{type:"mouse",age:1,amount:18,info:"https://en.wikipedia.org/wiki/Mouse",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/%D0%9C%D1%8B%D1%88%D1%8C_2.jpg/220px-%D0%9C%D1%8B%D1%88%D1%8C_2.jpg"},{type:"lion",age:12,amount:1,info:"https://en.wikipedia.org/wiki/Lion",img:"https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},{type:"elephent",age:22,amount:4,info:"https://en.wikipedia.org/wiki/Elephant",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Elephant_Diversity.jpg/220px-Elephant_Diversity.jpg"}]
// function App() {
//   const [Pets, setPets] = useState(PetsArray)
//   return (

//     <ProviderCon className="App" value={Pets}>
//      {/* <PetONE/> */}
//      {/* <PetTow/>
//      <PetThree/>
//      <PetFour/>
//     <PetFive/> */}
//     <header><MyRouter/></header>

//     </ProviderCon>



//   );
// }

// export default App;












// משימת משרד

const workersArray = [
  {
    index:0,
    firstName: "itzhak",
    lastName: "kasie",
    birthYear: 1999,
    phone: "0546193138",
    email:"itzhak123@Gmail.com",
  },
  {
    index:1,
    firstName: "Batel",
    lastName: "Rata",
    birthYear: 1995,
    phone: "0546193130",
    email:"Batel123@Gmail.com",
  },
  {
    index:2,
    firstName: "Eden",
    lastName: "yemharm",
    birthYear: 1992,
    phone: "0546193538",
    email:"Eden123@Gmail.com",
  },
  {
    index:3,
    firstName: "Eden",
    lastName: "Shalo",
    birthYear: 1993,
    phone: "0546193132",
    email:"Eden123@Gmail.com",
  },
  {
    index:4,
    firstName: "Eden",
    lastName: "Beilen",
    birthYear: 1994,
    phone: "0546193130",
    email:"Eden123@Gmail.com",
  },
  {
    index:5,
    firstName: "Orel",
    lastName: "Mekonen",
    birthYear: 1992,
    phone: "0546193134",
    email:"Orel123@Gmail.com",
  },
  {
    index:6,
    firstName: "Shelly",
    lastName: "tespay",
    birthYear: 1991,
    phone: "0546193131",
    email:"Shelly123@Gmail.com",
  },
  {
    index:7,
    firstName: "Liz",
    lastName: "Bayena",
    birthYear: 1990,
    phone: "0546193137",
    email:"Liz123@Gmail.com",
  },
  {
    index:8,
    firstName: "Rachel",
    lastName: "Melasa",
    birthYear: 2000,
    phone: "0546193134",
    email:"Rachel123@Gmail.com",
  },
  {
    index:9,
    firstName: "Adva",
    lastName: "Dahri",
    birthYear: 1985,
    phone: "0546193131",
    email:"Adva123@Gmail.com",
  },
  {
    index:10,
    firstName: "Lee",
    lastName: "Levin",
    birthYear: 1987,
    phone: "0546193130",
    email:"lee123@Gmail.com",
  },
];

function App() {
  const [Workes, setWorkes] = useState(workersArray)
  return (

    <ProviderCon className="App" value={Workes}>

      <MainOffice />
    </ProviderCon>
  );
}

export default App;
