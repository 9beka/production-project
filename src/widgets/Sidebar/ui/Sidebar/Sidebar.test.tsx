import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { renderWithTranlation } from "shared/lib/tests/renderWithTranlation/renderWithTranlation";
describe("Sidebar ", () => {
  test("TEST render", () => {
    renderWithTranlation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test(" test toggle", () => {
    renderWithTranlation(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle")
    expect(screen.getByTestId("sidebar-toggle")).toBeInTheDocument();
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed ")
   });
});
