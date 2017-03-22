import React from 'react';

class MeetingImages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            main_image: "http://butanchu.com/wp-content/uploads/2013/11/ramen03.jpg",
            images: ["http://thumbnail.egloos.net/600x0/http://pds21.egloos.com/pds/201403/06/74/f0011274_53181f239bb52.jpg", "http://thumbnail.egloos.net/600x0/http://pds21.egloos.com/pds/201403/06/74/f0011274_53181f239bb52.jpg", "http://thumbnail.egloos.net/600x0/http://pds21.egloos.com/pds/201403/06/74/f0011274_53181f239bb52.jpg", "http://thumbnail.egloos.net/600x0/http://pds21.egloos.com/pds/201403/06/74/f0011274_53181f239bb52.jpg"]
        };
    }

    render() {
        return (
            <div>
                <div>
                    <img src={this.state.main_image}/>
                </div>

                <br/>

                <span>
                    {this.state.images.map((image_src, i) => {return (<img src={image_src} key={i} />);})}
                </span>

            </div>
        );

    }

}

export default MeetingImages;
