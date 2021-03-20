import './App.css';
import "./sass/main.scss";
import { lightTheme, darkTheme, GlobalStyles } from './Themes/Themes';
import { AppContainer, ContentContainer } from "./App.styles";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header/Header.component";
import { connect } from "react-redux";
import { toggleTheme } from './redux/FarmLeadDataStorage/FarmLeadDataStorage.actions';
import Documentation from './Documentation/Documentation.component';
import SideMenu from "./Components/SideMenu/SideMenu.component";
import { Route, Switch } from "react-router";
import Game from './pages/Game/Game.component';
import GameInstructions from "./pages/GameInstructions/GameInstructions.component";
import AppTour from './Components/AppTour/AppTour.component';

const App = ({theme, showReadMe, isTourOpen}) => {

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles isTourOpen={isTourOpen}/>
      <AppContainer data-tut="reactour__intro">
        {showReadMe && <Documentation/>}
        <Header />
        <ContentContainer>
          <SideMenu />
          <Switch>
            <Route exact path='/game' component={Game} />
            <Route exact path='/instructions' component={GameInstructions} />
            <Route exact path='/' component={Game} />
          </Switch>
        </ContentContainer>
      </AppContainer>
      <AppTour/>
    </ThemeProvider>
  );
}

const mapStateToProps = ({ farmLead: {theme, showReadMe, isTourOpen}}) => ({
  theme,
  showReadMe,
  isTourOpen
})

const mapDispatchToProps = dispatch => ({
  toggleTheme: () => dispatch(toggleTheme()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
