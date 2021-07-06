import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import AboutUs from '../pages/About Us';
import ContactUs from '../pages/Contact';
import CadastroPage from '../pages/LoginPage';
import LoginPage from '../pages/CadastroPage';
import EsqueciPage from '../pages/EsqueciPage';
import CreatePubli from '../pages/CreatePubli';
import VisualizacaoPost from '../pages/Visualizacao Post';
import RecuperarPage from '../pages/RecuperarPage';
import Profile from '../pages/Profile';
import BackofficeEditarUsuario from '../pages/Backoffice/EditarPerfil'
import EditarTag from '../pages/Backoffice/EditarTag'
import BackofficePost from '../pages/Backoffice Post';
import BackofficeUser from '../pages/Backoffice User';
import BackofficeContact from '../pages/Backoffice Contact';
import EditPublication from '../pages/EditPubli';

const RouteNavbarAndFooter = ({ component: Component, ...props }) => {
    console.log(props)
    return (
        <Route {...props}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '100vh',
            }}
            >
                <Navbar backoffice={props.backoffice}/>
                <Component />
                <Footer />
            </div>
        </Route>
    )
}

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/cadastro' component={CadastroPage} />
                <Route exact path='/esqueciSenha' component={EsqueciPage} />
                <Route exact path='/recuperarSenha' component={RecuperarPage} />
                <RouteNavbarAndFooter path='/' exact component={Home} />
                <RouteNavbarAndFooter exact path='/sobre' component={AboutUs} />
                <RouteNavbarAndFooter exact path='/contato' component={ContactUs} />
                <RouteNavbarAndFooter backoffice exact path='/criarPubli' component={CreatePubli} />
                <RouteNavbarAndFooter exact path='/postagem/:id' component={VisualizacaoPost} />
                <RouteNavbarAndFooter exact path='/meuPerfil' component={Profile} />
                <RouteNavbarAndFooter backoffice exact path='/editarUsuario/:id' component={BackofficeEditarUsuario} />
                <RouteNavbarAndFooter backoffice exact path='/backofficePubli' component={BackofficePost} />
                <RouteNavbarAndFooter backoffice exact path='/backofficeUsuario' component={BackofficeUser} />
                <RouteNavbarAndFooter backoffice exact path='/backofficeContato' component={BackofficeContact} />
                <RouteNavbarAndFooter backoffice exact path='/editarTag' component={EditarTag} />
                <RouteNavbarAndFooter backoffice exact path='/editarPubli/:id' component={EditPublication} />
            </Switch>
        </Router>
    );
}

export default Routes;