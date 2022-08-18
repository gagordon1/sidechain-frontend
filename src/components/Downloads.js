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
    width : 100px;
    height : 100px;
    align-items : center;
    justify-content : center;
    position : relative;
`


const Check = styled.img`
    position : absolute;
    width : 30px;
    height : 30px;
    
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
                        width={"100px"}
                        height={"100px"}
                        />
                    {obj.selected? <Check src={CheckImage}/> : null}
                </Download>
            
            )}

        </DownloadContainer>
    )
}