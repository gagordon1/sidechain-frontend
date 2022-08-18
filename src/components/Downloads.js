import styled from "styled-components"
import CheckImage from "../assets/accepted_image.png"
import {CoverImage} from "../components/Images"

const DownloadContainer = styled.div`
    display : flex;
    flex-direction : row;
    overflow-x : scroll;
    width : 100%;
    gap : 10px;
`

const Download = styled.div`
    display : flex;
    width : 150px;
    height : 180px;
    align-items : center;
    justify-content : center;
    position : relative;
    animation : fade-in 1s;
    &:hover{
        cursor : pointer;
    }
`


const Check = styled.img`
    position : absolute;
    width : 50px;
    height : 50px;
    
`

export default function Downloads(props){

    return (
        <DownloadContainer>
            {props.data.map(obj=>
                <Download 
                    onClick={() => props.handleSetSelected(obj.address)} 
                    key={obj.address}
                    >
                    <CoverImage
                        src={obj.image}
                        brightness={obj.selected? 50 : 100}
                        width={"150px"}
                        height={"150px"}
                        />
                    {obj.selected? <Check src={CheckImage}/> : null}
                </Download>
            
            )}

        </DownloadContainer>
    )
}