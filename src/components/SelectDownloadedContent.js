import {Heading2} from './TextComponents'
import styled from 'styled-components'
import { useState } from 'react'
import Downloads from '../components/Downloads'

const SelectDownloadedStemsContainer = styled.div`
    display : flex;
    align-items : center;
    height : 100px;
    width : 100%;
    margin-top : 40px;
    margin-bottom : 40px;
`

/**
 * Allows a user to identify remixed content.
 * @param {*} props 
 * @returns Select box of remixable content
 */
export default function SelectDownloadedContent(props){

    
    return(
        <SelectDownloadedStemsContainer>
            {(props.data.length  === 0)? <Heading2>No content downloaded</Heading2>
            :
            <Downloads data={props.data} handleSetSelected={props.handleSetSelected} />
            }
        </SelectDownloadedStemsContainer>
    )
}


    
