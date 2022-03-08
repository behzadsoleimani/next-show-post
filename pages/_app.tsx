import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { Provider } from "react-redux";

import store from "../redux/store";
function Home({ children }: any) {
  return (
    <Layout>
      {children}
    </Layout>
  )
}


function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <Home>
        <Component {...pageProps} />
      </Home>
    </Provider>

  )
}

export default MyApp;
