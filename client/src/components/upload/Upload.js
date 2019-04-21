import React from "react";
import './Upload.css'
import Dropzone from '../dropzone/Dropzone'


class Upload extends React.Component {
 render() {
   return (
     <>
     <div class='ui centered card'>
       <div class='content'>
         <div class='header'>You are handing in:</div>
          <h4 class='ui sub header'>Project.Name</h4>
       </div>
     </div>

     <div class='ui centered card'>
       <div class='content'>
        <div class='header'>Upload Assignment</div>
          <h4 class='sub-header'>Upload Files</h4>
            <div class='drop'>
              <Dropzone onFilesAdded={console.log} />
            </div>
              <button class='button'>Submit hand-in</button>
        </div>
      </div>
    </>
   )
 }
}

export default Upload;