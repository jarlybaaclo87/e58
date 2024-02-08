import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./components/Navibar";
import Cardmap from './components/Cardmap';
import Statefulcomponent from './components/Statefulcomponent';
import { Container } from 'react-bootstrap';

const App = () => {
    return (
        <>
            <Navibar />
            <Container>
                <Statefulcomponent/>
            </Container>
            <Container style={{display:'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Cardmap/>
            </Container>
        </>
    );
};
export default App;
