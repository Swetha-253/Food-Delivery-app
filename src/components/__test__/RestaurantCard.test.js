import { render } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"

test("should load RestaurantCard component",()=>{
    render(
        <RestaurantCard/>
    )
})