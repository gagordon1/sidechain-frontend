import styled from "styled-components"
import {colors} from '../Theme'

const UploadMediaFileContainer = styled.div`
    width : 300px;
    height : 200px;
    background: ${colors.lightGray};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 19px;
`

export const UploadImageFile = () =>{
    return (
        <UploadMediaFileContainer>

        </UploadMediaFileContainer>
    )
}
 export const UploadAudioFile = () =>{

    return (
        <UploadMediaFileContainer>

        </UploadMediaFileContainer>
    )
}