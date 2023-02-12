import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestRobots, setSearchField } from "../actions";
import ErrorBoundary from "../components/ErrorBoundary";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

// The App component is now a functional component that takes in the props as arguments
const App = ({
  searchField,
  onSearchChange,
  robots,
  isPending,
  onRequestRobots,
}) => {
  // useEffect hook is used to perform the equivalent of componentDidMount
  useEffect(() => {
    // Call the onRequestRobots function to fetch the robots data
    onRequestRobots();
  }, [onRequestRobots]); // The second argument to useEffect specifies the dependencies of the hook

  // Filter the robots based on the search field value
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  // Return the Loading component or the main App component based on the loading state
  return isPending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <ErrorBoundary>
        {/* Render the SearchBox component and pass the onSearchChange prop */}
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {/* Render the CardList component and pass the filteredRobots prop */}
          <CardList robots={filteredRobots} />
        </Scroll>
      </ErrorBoundary>
    </div>
  );
};

// Map the state from the Redux store to the props of the component
const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
});

// Map the dispatch function to the props of the component
const mapDispatchToProps = (dispatch) => ({
  // Dispatch the setSearchField action with the updated search field value when the search field changes
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  // Dispatch the requestRobots action to fetch the robots data
  onRequestRobots: () => dispatch(requestRobots()),
});

// Connect the component to the Redux store and export it
export default connect(mapStateToProps, mapDispatchToProps)(App);
