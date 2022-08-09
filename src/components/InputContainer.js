import styled from 'styled-components'

const Container = styled.div`
    width : ${props => props.width};
    height : 50px;
    box-sizing: border-box;
    border: 1px solid #DDDDDD;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
`

export default function InputContainer(props){


    return (
        <Container width={props.width}>

        </Container>
    )
}