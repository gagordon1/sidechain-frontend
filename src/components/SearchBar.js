import styled from "styled-components"
import SearchBarIconImage from "../assets/search_bar_icon.png"

const SearchBarContainer = styled.div`
    display : flex;
    align-items : center;
    gap : 20px;
`

const SearchBarIcon = styled.img`
    width : 35px;
    height : auto;
`
const SearchInput = styled.input`
    border : none;
    font-size : 16px;
    &:focus{
        outline : none;
    }
`

export default function SearchBar(props){
    return (
        <SearchBarContainer>
            <SearchBarIcon src={SearchBarIconImage}/>
            <SearchInput onChange={(e) => props.setKeyword(e.target.value)}
                type="text" placeholder="Search Tracks..."/>
        </SearchBarContainer>
    )
}