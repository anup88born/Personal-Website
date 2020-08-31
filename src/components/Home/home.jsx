import React, { Component } from 'react';
import './home.scss';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from '../../containers/Main/main';

class Home extends Component {
  render() {
    const { routeChange, user } = this.props
    return (
      <div className="demo-big-content" style={{width: '100%', margin: 'auto'}}>
        <Layout>
            <Header
              className="header-color"
               title={<Link className="nav-link" style={{textDecoration: 'none', color: 'white'}} to="/homepage">MyPortfolio</Link>} scroll>
                <Navigation>
                    <Link className="nav-link" to="/profile">Profile</Link>
                    <Link className="nav-link" to="/aboutme">About Me</Link>
                    <Link className="nav-link" to="/projects">Projects</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                    <Link
                      className="nav-link pointer"
                      data-toggle="modal"
                      data-target="#signoutmodal"
                    >
                      SignOut
                    </Link>
              </Navigation>
            </Header>

            <Drawer
                    title={<Link className="nav-link" style={{ color: 'black'}} to="/homepage">
                      MyPortfolio</Link>}
            >
                <Navigation className="drawer-content">
                  <Link className="nav-link" to="/profile">Profile</Link>
                  <Link className="nav-link" to="/aboutme">About Me</Link>
                  <Link className="nav-link" to="/projects">Projects</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                  <Link 
                    data-toggle="modal"
                    data-target="#signoutmodal"
                    className="nav-link pointer"
                  >SignOut</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                  <Main />
            </Content>
        </Layout>

        <div class="modal fade" id="signoutmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Alert</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              You want to signout? Sure?
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                              <button 
                                type="button" 
                                class="btn btn-primary" 
                                data-dismiss="modal"
                                onClick={() => routeChange('landingpage')}
                                >
                                Yes
                              </button>
                            </div>
                          </div>
                        </div>
        </div>


      </div>
    );
  }
}

export default Home;
