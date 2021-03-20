import Tour from "reactour";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { tourConfig } from '../../utilities/AppTour';
import { setIsTourOpen } from '../../redux/FarmLeadDataStorage/FarmLeadDataStorage.actions';
import { connect } from "react-redux";

const AppTour = ({isTourOpen, setIsTourOpen}) => {
  const disableBody = target => disableBodyScroll(target);
  const enableBody = target => enableBodyScroll(target);

  const closeTour = () => setIsTourOpen(false)

  return (
    <Tour
      onRequestClose={closeTour}
      steps={tourConfig}
      isOpen={isTourOpen}
      maskClassName="mask"
      onAfterOpen={disableBody}
      onBeforeClose={enableBody}
    />
  );
}

const mapStateToProps = ({ farmLead: { isTourOpen}}) => ({
  isTourOpen
})

const mapDispatchToProps = dispatch => ({
  setIsTourOpen: () => dispatch(setIsTourOpen()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppTour);
