import styled from "styled-components";

const Statefulcomponent = () => {
  return (
    <Divcontent>
        <h1>Search Record-stateful</h1>
        <p>Account name: John Klein</p>
        <p>Age: 35</p>
        <p>Email Address: johnklein@gmail.com</p>
     </Divcontent>
  );
};
//declare a style component
const Divcontent = styled.div;
export default Statefulcomponent;