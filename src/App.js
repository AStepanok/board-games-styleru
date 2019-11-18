import React, { Component } from 'react';
import { connect} from 'react-redux';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import FirstSection from './components/board-game-page/first-section';
import SecondSection from './components/board-game-page/second-section';
import ThirdSection from "./components/board-game-page/third-section";

class App extends Component {
    render () {
        return (
            <Fullpage>
                <FullPageSections>
                    <FullpageSection>
                        <FirstSection />
                    </FullpageSection>
                    <FullpageSection>
                        <SecondSection />
                    </FullpageSection>
                    <FullpageSection>
                        <ThirdSection />
                    </FullpageSection>
                </FullPageSections>
            </Fullpage>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        app: state.app
    };
}

export default connect(mapStateToProps)(App);
