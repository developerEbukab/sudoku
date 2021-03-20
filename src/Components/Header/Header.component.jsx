import React from 'react';
import { toggleReadMe, toggleTheme } from '../../redux/FarmLeadDataStorage/FarmLeadDataStorage.actions';
import { HeaderContainer, LogoContainer, DocumentButton } from './Header.styles';
import { connect } from "react-redux";

const Header = ({toggleReadMe, theme, toggleTheme}) => {
  return (
    <HeaderContainer>
      <div data-tut="reactour__toggleTheme">
        {theme === "light" ? <i onClick={toggleTheme} className="fas fa-toggle-on"></i> : <i onClick={toggleTheme} className="fas fa-toggle-off"></i>}
      </div>
      <LogoContainer>
        <p>FARM</p>
        <img src="https://img.icons8.com/wired/50/F4B717/sudoku.png"/>
        <p>LEAD</p>
      </LogoContainer>
      <DocumentButton data-tut={"reactour__documentation"} onClick={() => toggleReadMe()} >Documentation</DocumentButton>
    </HeaderContainer>
  );
}

const mapStateToProps = ({ farmLead: {theme,}}) => ({
  theme,
})

const mapDispatchToProps = dispatch => ({
  toggleTheme: () => dispatch(toggleTheme()),
  toggleReadMe: () => dispatch(toggleReadMe()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
