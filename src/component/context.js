import React, { Component } from 'react';
import { placeInfo, review } from '../component/data';

const InfoContext = React.createContext();

//Provider
//Consumer

class InfoProvider extends Component{
    state = {
        info: placeInfo,
        review: review
    }
    render() {
        


        return(
            
            <InfoContext.Provider value={{
                info: this.state.info,
                review: this.state.review,
                headerTitle: this.state.headerTitle,
                headerSubTitle: this.state.headerSubTitle,
                headerText: this.state.headerText,
                name: this.state.name,
                avatar: this.state.avatar,
                comment: this.state.comment
            }}>{this.props.children}

            </InfoContext.Provider>
        );
    }
}


const InfoConsumer = InfoContext.Consumer;


export { InfoProvider, InfoConsumer };