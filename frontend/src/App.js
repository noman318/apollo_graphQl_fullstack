import React from "react";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function App() {
  let __DEV__ = true;
  if (__DEV__) {
    loadDevMessages();
    loadErrorMessages();
  }

  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          users: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          projects: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  });
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache,
  });
  return (
    <React.Fragment>
      <ApolloProvider client={client}>
        <div className="App">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
            </Routes>
          </Router>
        </div>
      </ApolloProvider>
    </React.Fragment>
  );
}

export default App;
