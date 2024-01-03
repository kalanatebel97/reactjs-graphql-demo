import ApolloAppProvider from "./ApolloProvider.js";
import Countries from "./components/countryList.js";

function App() {
  return <ApolloAppProvider>{<Countries />}</ApolloAppProvider>;
}

export default App;
