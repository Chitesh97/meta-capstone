import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test('Renders the BookingForm component title', () => {
  render(<BookingForm />);
  const title = screen.getByText("Reserve a table");
  expect(title).toBeInTheDocument();
});
