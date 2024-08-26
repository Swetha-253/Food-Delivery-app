import { render ,screen} from "@testing-library/react"
import RestaurantCard ,{withPromotedLabel} from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

test("should load RestaurantCard component",()=>{
    render(
        <RestaurantCard resData={MOCK_DATA}/>
    );
    const name=screen.getByText("Adil Hotel");
    expect(name).toBeInTheDocument();

})
test("should render RestaurantCard component with promoted Label",()=>{
    const RestaurantCardWithLabel = withPromotedLabel(RestaurantCard);

    render(<RestaurantCardWithLabel resData={MOCK_DATA} />);
  
    // Act & Assert: Check if the promoted label is displayed
    const promotedLabel = screen.getByText("Veg"); // Adjust this if your label text differs
    expect(promotedLabel).toBeInTheDocument();
})