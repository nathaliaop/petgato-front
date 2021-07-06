import React from 'react';
import ExampleButton from '../../components/ExampleButton'; 
import { Example } from './styles'

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ExamplePage = () => {
    return (
        <Example>
            <Navbar />
            <ExampleButton>    
                Valorant
            </ExampleButton>
            <Footer />
        </Example>
            
    );
}

export default ExamplePage;