import React from "react";
import NewNavBar from "../components/newNavBar";
import Movies from "../components/movies";
import Customers from "../components/customers";
import Rentals from "../components/rentals";
import PageNotFound from "../components/notFound";
import { Route, Redirect, Switch } from "react-router-dom";
import MovieForm from "../components/movieForm";
import Login from "../components/login";
import Register from "../components/register";

const AppRouter = () => {
	return (
		<React.Fragment>
			<NewNavBar />
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/movies/:id" component={MovieForm} />
				<Route path="/movies" component={Movies} />
				<Route path="/customers" component={Customers} />
				<Route path="/rentals" component={Rentals} />
				<Route path="/not-found" component={PageNotFound} />
				<Route path="/" exact component={Movies} />
				<Redirect to="/not-found" />
			</Switch>
		</React.Fragment>
	);
};

export default AppRouter;
