import { fireEvent, render ,screen} from "@testing-library/react"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import Header from "../Header";
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom";
test('should render Header component with a Login button', () => {
    render(
        <BrowserRouter>
         <Provider store={appStore}>
               <Header/>
        </Provider></BrowserRouter>    
    );
    //const cartItems=screen.getByText("Cart (0 items)");
    //expect(cartItems).toBeInTheDocument();
    const loginButton=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton=screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
});