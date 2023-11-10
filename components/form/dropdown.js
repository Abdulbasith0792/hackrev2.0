import styles from "./teamdetails.css";
import { useState } from "react";



const DropDown = () => {
  const [tracks, setTracks] = useState("tracks");

  const options = [

    { label: 'Hardware', value: 'hardware' },
 
    { label: 'Software', value: 'software' },
 
    { label: 'AI&ML', value: 'aiml' },

    { label: 'Full Stack', value: 'fullstack' },
 
  ];

  const handleTrackChange = (event) => {
    setTracks(event.target.value);
  };

  return (
    <div style={styles.dropdown}>
      <label>

        Select Track

       <select  value={tracks} onChange={handleTrackChange}>

         {options.map((option) => (

           // eslint-disable-next-line react/jsx-key
           <option value={option.value}>{option.label}</option>

         ))}

       </select>

     </label>

     <p>Track Selected {tracks}!</p>

     
    </div>
    
  );
};

export default DropDown;
