import React, { Component } from 'react';

class LightboxPage extends Component {
    state = {
        images: [
            { src: 'https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_122640.jpg', alt: 'My Image 1'},
            { src: 'https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_122545.jpg', alt: 'My Image 2'},
            { src: 'https://storage.googleapis.com/pet-arugambay/peanut-beach-22.10.2020/20201022_122640.jpg', alt: 'My Image 3'},
            { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg', alt: 'My Image 4'},
            { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg', alt: 'My Image 5'},
            { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg', alt: 'My Image 6'},
            { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg', alt: 'My Image 7'},
            { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg', alt: 'My Image 8'},
            { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg', alt: 'My Image 9'}
        ]
    };

    render() {
        return null;
/*
        return <MDBLightbox md='4' images={this.state.images} />;
*/
    }
}

export default LightboxPage;