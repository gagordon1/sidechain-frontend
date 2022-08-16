import styled from "styled-components"
import SearchBar from "./SearchBar"
import Sorter from "./Sorter"

const opts = ["Time Added"]

const SearchAndSortContainer = styled.div`
    display : flex;
    width : 100%;
`
const getDirection= (sortValue)=>{
    let out = "up"
    if(sortValue.slice(-4) === "desc"){
        out = "down"
    }
    return out
}
export default function SearchAndSort(props){

    const handleChangeDirection = () =>{
        if (props.sort === "timestamp_desc"){
            props.setSort("timestamp_asc")
        }
        else{
            props.setSort("timestamp_desc")
        }
    }

    return (
        <SearchAndSortContainer>
            <SearchBar keyword={props.keyword} setKeyword ={props.setKeyword}/>
            <Sorter opts={opts} direction={getDirection(props.sort)} 
                handleChangeDirection={handleChangeDirection}/>
        </SearchAndSortContainer>
    )
}