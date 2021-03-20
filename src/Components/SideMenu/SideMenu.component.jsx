import React from 'react';
import { NavLink, withRouter, useHistory } from 'react-router-dom';
import { MenuContainer, RecordTimeContainer, MenuItem } from './SideMenu.styles';
import { SIDE_MENU_ITEMS } from './SideMenu.utils';

const SideMenu = () => {
  let history = useHistory();
  console.log("History", history.location.pathname);

  return (
    <MenuContainer>
      <RecordTimeContainer>
        {/* <p>Record Time </p> */}
        <img src="https://img.icons8.com/dusk/160/000000/sudoku.png"/>
      </RecordTimeContainer>
      {SIDE_MENU_ITEMS.map(({ name, image, id, url, tut }) =>
        <NavLink to={url} activeClassName="ActiveMenuItem">
          <MenuItem data-tut={tut} key={id} isActive={history.location.pathname === url}>
            <img src={image} />
            <p>{name}</p>
          </MenuItem>
        </NavLink>
      )}
    </MenuContainer>
  );
}

export default withRouter(SideMenu);
