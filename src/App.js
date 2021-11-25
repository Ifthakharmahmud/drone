import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Account/Login";
import Registration from "./Components/Account/Registration";
import AddPackage from "./Components/AddPackage/AddPackage";
import AllDrones from "./Components/AllDrones/AllDrones";
import DroneDetails from "./Components/AllDrones/DroneDetails";
import Footer from "./Components/Common/Footer/Footer";
import Header from "./Components/Common/Header/Header";
import Nopage from "./Components/Common/Nopage/Nopage";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import ManageOrders from "./Components/ManageOrders/ManageOrders";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/"> <Home></Home></Route>
          <Route path="/home"> <Home></Home></Route>
          <Route path="/drones"> <AllDrones></AllDrones>  </Route>
          <Route path="/login"> <Login></Login></Route>
          <Route path="/registration"> <Registration></Registration> </Route>
          <PrivateRoute exact path="/offer/:droneId"> <DroneDetails></DroneDetails> </PrivateRoute>
          {/* <PrivateRoute exact path="/service/:serviceId"><Singleservice></Singleservice></PrivateRoute> */}
          
          <PrivateRoute path="/new_package">
            <AddPackage></AddPackage>
          </PrivateRoute>
          
          <PrivateRoute exact path="/place_order/:orderId">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>

          <PrivateRoute  path="/manage_orders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>

          <PrivateRoute  path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
         
          

          <Route path='/*'><Nopage></Nopage></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
