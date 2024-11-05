import Post from "..";
import { render, screen } from "@testing-library/react";

describe("Deve renderizar e verificar o Post", () => {
  test("Deve renderizar a pagina com todos os dados", () => {
    render(<Post imageUrl="https://via.placeholder.com/100x100">Teste</Post>);
    expect(screen.getByText("Teste")).toBeInTheDocument();
    const postImage = screen.getByAltText("Post");
    expect(postImage).toBeInTheDocument();
    expect(postImage).toHaveAttribute(
      "src",
      "https://via.placeholder.com/100x100"
    );
    expect(screen.getByTestId("post-comments")).toBeInTheDocument();
  });
});
