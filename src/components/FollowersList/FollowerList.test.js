import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { TEST_IDS } from "../../utils/testIds";
import FollowersList from "./FollowersList";

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: {
        results: [
          {
            name: {
              first: "Domingo",
              last: "Montero",
              title: "Mr",
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/13.jpg",
            },
            login: {
              username: "brownmouse471",
            },
          },
        ],
      },
    }),
  },
}));

function MockFollowerList() {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
}

describe("Testing FollowerList component", () => {
  it("should render follower item", async () => {
    render(<MockFollowerList />);
    const followerDivElement = await screen.findByTestId(
      TEST_IDS.followersList.follower + "-0"
    );
    expect(followerDivElement).toBeInTheDocument();
  });

  // it("should render multiple follower items", async () => {
  //   render(<MockFollowerList />);
  //   const followerDivElements = await screen.findAllByTestId(/followersList/i);
  //   expect(followerDivElements.length).toBe(5);
  // });
});
