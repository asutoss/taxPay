import React, { useState } from 'react';
import ReactModal from 'react-modal';

const Project = (props) => {
    const [vis, setVis] = useState(false);
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
          transition: '0.3s',
        },
        overlay : {
            // backgroundColor: 'lightgrey'
        }
      };
    return (
        <div>
            <button onClick={()=> setVis(true)}>{props.name}</button>
            { vis && <ReactModal 
                isOpen = {vis}
                style = {customStyles}
                >
                    <button onClick={()=> setVis(false)}>Close</button>
                    <h3>{props.sub}</h3>
                </ReactModal>
            }
        </div>
    )
}

export default Project;