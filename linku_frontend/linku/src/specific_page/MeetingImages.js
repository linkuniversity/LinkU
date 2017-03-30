import React from 'react';

class MeetingImages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <div>
                    <img src={this.props.images.main_image}/>
                </div>

                <br/>

                <span>
                    {this.props.images.images.map((image_src, i) => {return (<img src={image_src} key={i} />);})}
                </span>

            </div>
        );

    }

}

export default MeetingImages;
