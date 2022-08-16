import styled from "styled-components"
import SortArrowImage from "../assets/down_arrow.png"

const SorterContainer = styled.div`
    margin-left : auto;
`
const sortOptionMap = {
    "timestamp_desc" : "Timestamp",
    "timestamp_asc" : "Timestamp"
}

const directionMap = {
    "timestamp_desc" : "down",
    "timestamp_asc" : "up",
}

const SortArrow = styled.img`
    width : 20px;
    height : auto;
    transform : rotate(${props=>props.rotate}deg);
    margin-left : 10px;

`

const SortSelect = styled.select`
    font-size : 16px;
    border : none;
    &:focus{
        outline : none;
    }
    
`
export default function Sorter(props){

    return(
        <SorterContainer>
            <SortSelect >
                {props.opts.map(opt=>
                    <option value={opt} key={opt}>{opt}</option>
                )}
            </SortSelect>
            <SortArrow onClick={props.handleChangeDirection} src={SortArrowImage} 
                rotate={(props.direction ==="up")? 180 : 0}/> 
        </SorterContainer>
    )

}