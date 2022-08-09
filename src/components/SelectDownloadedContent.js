import {Heading2} from './TextComponents'
import styled from 'styled-components'

const SelectDownloadedStemsContainer = styled.div`
    display : flex;
    align-items : center;
    height : 100px;
`

/**
 * Allows a user to identify remixed content.
 * @param {*} props 
 * @returns Select box of remixable content
 */
export default function SelectDownloadedContent(props){
    return(
        <SelectDownloadedStemsContainer>
            {(props.downloadedContent.length  === 0)? <Heading2>No content downloaded</Heading2>
            :
            <span></span>
            }
        </SelectDownloadedStemsContainer>
    )
}


    
