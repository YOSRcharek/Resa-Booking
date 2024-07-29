import { Route, Switch } from "react-router-dom";
import CarAvailable from "../components/CarRentalsPage/CarAvailable";
import CarPayment from "../components/CarRentalsPage/carPayment";
import CarRentals from "../components/CarRentalsPage/CarRentals";
import CarSearch from "../components/CarRentalsPage/CarSearch";
import AttractionIndex from '../components/Attractions/AttractionIndex'
import ListLanding from "../components/Attractions/pages_and_layouts/attractionPlaceListpage/ListLanding";
import ViewPlaceLanding from "../components/Attractions/pages_and_layouts/viewPlace/ViewPlaceLanding";
import Login from "../components/Login/Login";
import Home from "../components/Home";
import {SearchPage} from "../components/Stays/SearchPage/SearchPage";
import {SearchPage2} from "../components/Stays/SearchPage/SearchPage copy";
import {HotelDetails} from "../components/Stays/HotelDetails/HotelDetails";
import VarifyUser from "../components/Attractions/pages_and_layouts/varifyUserDeatils/VarifyUser";
import Checkout from "../components/Attractions/pages_and_layouts/checkout/CheckOut";
import {ExplorePlaces} from "../components/Stays/SearchPage/ExplorePlaces";
import ArticlePage from "../components/Stays/SearchPage/ArticlePage";
import Article from "../components/Stays/SearchPage/Article";
import  Index  from "../pages/index";



export default function AllRoutes(){
    return(
        <>
          <Switch>
            <Route exact path="/">
            <Home/>
            </Route>
           
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/carrentals">
                <CarRentals/>
            </Route>
            <Route exact path="/car-available">
                <CarAvailable/>
            </Route>
            <Route exact path="/car-available/:id">
                <CarPayment/>
            </Route>
            <Route exact path="/carrentals/:id">
              <CarSearch/>
          </Route>
          <Route exact path="/attractions/:country">
             <ListLanding/>
            </Route>
            <Route exact path="/attractions/:country/:id">
             <ViewPlaceLanding/>
          </Route>
          <Route exact path="/attractions">
             <AttractionIndex/>
            </Route>
              <Route exact path="/search">
                  <SearchPage/>
              </Route>
              <Route exact path="/search2">
                  <SearchPage2/>
              </Route>
              <Route exact path="/searchPlace/:name">
                  <ExplorePlaces/>
              </Route>

              <Route path="/article"  ><ArticlePage/> </Route>
          <Route path="/articlePage" ><Article/>  </Route>
            
        <Route path="/search/:id"><HotelDetails/></Route>
         
          <Route exact path="/varifyPurchase/:id">
                  <VarifyUser/>
          </Route>
          <Route exact path="/checkout/:id">
           <Checkout/>
          </Route>



          <Route path="/Home" > <Index></Index></Route>
          </Switch>
        </>
    )
}
