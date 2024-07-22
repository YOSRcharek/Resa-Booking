
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getSuggestions} from "../../actions/suggestionAction";
import {HomeGuestsDiv} from "./PageSections/HomeGuests/HomeGuestsDiv"
import {MiddleSection} from "./PageSections/middleSection/MiddleSection"
import {NextTrip} from "./PageSections/NextTripDiv/NextTrip";
import Degination from "./PageSections/Degination";
import FirstSection from "./PageSections/FirstSection";
import SecondSection from "./PageSections/SecondSection";

function Stays() {
    const dispatch = useDispatch();
    const suggestions = useSelector(state => state.suggestionsData.suggestions);

    useEffect(() => {
        if (suggestions.length === 0) {
            dispatch(getSuggestions())
        }
    }, [suggestions])


    return (<>
  
   
           <div>
            <MiddleSection />
            </div>
           
            <div>
            <HomeGuestsDiv />
            </div>
            <div>
            <Degination />
            </div>
        </>);
}

export default Stays;
