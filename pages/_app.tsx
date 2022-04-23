import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import dayjs from 'dayjs'
import CustomNavbar from '../components/Navbar';
require('dayjs/locale/id')
dayjs.locale('id')
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CustomNavbar />
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
