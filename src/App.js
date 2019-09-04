import React, { Component } from 'react';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import FirstSection from './components/board-game-page/first-section';

export default class App extends Component {
    render () {
        return (
            <Fullpage>
                <FullPageSections>
                    <FullpageSection>
                        <FirstSection/>
                    </FullpageSection>
                    <FullpageSection>2</FullpageSection>
                    <FullpageSection>3</FullpageSection>
                </FullPageSections>
            </Fullpage>
        )
    }
}
