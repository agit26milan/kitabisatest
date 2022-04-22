import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import dayjs from 'dayjs'
require('dayjs/locale/id')
dayjs.locale('id')
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
