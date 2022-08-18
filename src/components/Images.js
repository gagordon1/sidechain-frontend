import styled from "styled-components"


const CoverImageStyled = styled.img`
    object-fit : contain;
    filter : drop-shadow(4px 4px 4px rgba(0,0,0,.25));
    filter : brightness(${props => props.brightness}%);
`



export function CoverImage(props){
    return(
        <div style={{width : `${props.width}px`, height : `${props.height}px`}}>
            <CoverImageStyled 
                brightness={props.brightness? props.brightness : 100}
                height={props.height} 
                width={props.width} 
                src={props.src}/>
        </div>
        
    )
}