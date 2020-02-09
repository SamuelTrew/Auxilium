import React from 'react';
import Slider from "./Slider";

class ImageUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = { image: null };
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
    }

    render() {
        return (
            <div>
                <div className="upload-btn-wrapper">
                    <button className="btn">Upload a file</button>
                    <input type="file" name="myfile" onChange={this.onDrop} />
                </div>
                <br />

                <div className={this.state.image ? "" : "hidden"}>
                  <br />
                  <Slider img_src={this.state.image} filter_type={this.props.filter_type} />
                </div>
           </div>
        );
    }
}

export default ImageUpload;