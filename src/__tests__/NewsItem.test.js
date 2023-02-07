import { render, screen } from "@testing-library/react";
import NewsItem from "../NewsItem";

test("renders NewsItem", async () => {
  render(<NewsItem title="test1" />);
  const header = screen.getByText(/test1/i);
  expect(header).toBeInTheDocument();
});
