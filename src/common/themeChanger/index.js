import React, { useState } from 'react';
import {BiSun,BiMoon} from "react-icons/bi";

import { toggleTheme } from '../../utils/Storage';

import './themeChanger.css';

const updateTheme = (theme) => {
  return !theme;
}
export const ThemeChanger = () => {

  const intialMode = localStorage.getItem('theme') === 'light' ? true : false;
  const [ theme, setTheme ] = useState(intialMode);
  
   console.log("themechanger",theme)
  return (
    <div className="i01themeIcon">
      {theme ?
        <BiMoon className="sta891moon"
          onClick={() => {
            setTheme(updateTheme(theme));
            toggleTheme(theme ? 'dark' : 'light');
          }
          }
           color={'white'}
           fontSize={'40px'}
           background={"#1e1e30"}
        />
        :
        <BiSun className="sta891sun"
          onClick={() => {
            setTheme(updateTheme(theme));
            toggleTheme(theme ? 'dark' : 'light');
          }
          }
          color={'#ffc107'}
          fontSize={'40px'}
           background={"#1e1e30"}

        />
      }
    </div>
  );

}



// const updateTheme = (theme) => {
//   return !theme;
// }
// export const ThemeChanger = () => {

//   const intialMode = localStorage.getItem('theme') === 'light' ? true : false;
//   const [ theme, setTheme ] = useState(intialMode);
  

//   return (
//     <div className="i01themeIcon">
//       {theme ?
//         <BiMoon className="sta891moon"
//           onClick={() => {
//             setTheme(updateTheme(theme));
//             toggleTheme(theme ? 'dark' : 'light');
//           }
//           }
//            color={'white'}
//            fontSize={'40px'}
//            background={"#1e1e30"}
//         />
//         :
//         <BiSun className="sta891sun"
//           onClick={() => {
//             setTheme(updateTheme(theme));
//             toggleTheme(theme ? 'dark' : 'light');
//           }
//           }
//           color={'#ffc107'}
//           fontSize={'40px'}
//            background={"#1e1e30"}

//         />
//       }
//     </div>
//   );
//   }