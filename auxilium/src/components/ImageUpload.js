import React from 'react';
import Slider from "./Slider";

class ImageUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = { image: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(pictureFiles, pictureDataURLs) {
        if (pictureFiles.target.files && pictureFiles.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({image: e.target.result});
            };
            reader.readAsDataURL(pictureFiles.target.files[0]);
        }
        // }
    }

    render() {
        return (
           <div>
               <input type="file" onChange={this.onDrop} className="filetype" id="group_image"/>
               <Slider img_src={this.state.image}/>

           </div>
        );
    }
}

export default ImageUpload;