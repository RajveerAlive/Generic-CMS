import { useState,useContext,createContext } from "react";

const Context = createContext({});
export function useMyContext() {
  return useContext(Context);
}

export function ContextProvider({ children }) {
  const [navbarSubM, setNavbarSubM] = useState('');
  const [navbarName, setNavbarName] = useState('');
  const [navbarSubL, setNavbarSubL] = useState('');
  const [navbarSubR, setNavbarSubR] = useState('');
  const [navbarNameColor, setNavbarNameColor] = useState('');
  const [navbarColor, setNavbarColor] = useState('');
  const [tableColor, settableColor] = useState('');
  const [compColor, setCompColor] = useState('');
  const [tableName1,settablename1] = useState('');
  const [tableName2,settablename2] = useState('');
  const [tableName3,settablename3] = useState('');
  const [tableName4,settablename4] = useState('');
  const [backColor,setBackColor] = useState('');
  const [MLogo,setLogo]=useState('');

  const handletableChange = (event) => {
    settableColor(event.target.value);
  };

  const handleLogoChange = (event) => {
    setLogo(event.target.value);
  };

  const handleBackgroundChange = (event) => {
    setBackColor(event.target.value);
  };

  const handleNavbarNameChange = (event) => {
    setNavbarName(event.target.value);
  };

  const handleNavbarSubLChange = (event) => {
    setNavbarSubL(event.target.value);
  };

  const handleNavbarSubMChange = (event) => {
    setNavbarSubM(event.target.value);
  };

  const handleNavbarSubRChange = (event) => {
    setNavbarSubR(event.target.value);
  };

  const handleNavbarNameColorChange = (event) => {
    setNavbarNameColor(event.target.value);
  };


  const handleNavbarColorChange = (event) => {
    setNavbarColor(event.target.value);
  };
  const handleCompColorChange = (event) => {
    setCompColor(event.target.value);
  };

  const handletablename1Change = (event) => {
    settablename1(event.target.value);
  };
  const handletablename2Change = (event) => {
    settablename2(event.target.value);
  };
  const handletablename3Change = (event) => {
    settablename3(event.target.value);
  };
  const handletablename4Change = (event) => {
    settablename4(event.target.value);
  };
 


  

  return(
	<Context.Provider
		value={{navbarSubM,handleNavbarSubMChange,tableColor,handletableChange,MLogo,handleLogoChange,handletablename1Change,handletablename2Change,handletablename3Change,handletablename4Change,tableName1,tableName2,tableName3,tableName4,backColor,handleBackgroundChange,navbarSubL,navbarSubR,handleNavbarSubLChange,handleNavbarSubRChange,handleNavbarNameChange,compColor,setCompColor,handleCompColorChange,handleNavbarNameColorChange,handleNavbarColorChange,navbarName,navbarNameColor,navbarColor,setNavbarName,setNavbarNameColor,setNavbarColor}}
	>
		{children}
	</Context.Provider>
  )}