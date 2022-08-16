import styled from "styled-components"


const CoverImageStyled = styled.img`
    object-fit : contain;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
`

export function CoverImage(props){
    return(
        <div style={{width : `${props.width}px`, height : `${props.height}px`}}>
            <CoverImageStyled height={props.height} width={props.width} src={props.src}/>
        </div>
        
    )
}