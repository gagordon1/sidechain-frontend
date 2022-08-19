import styled from "styled-components"
import { TextInputStyled, LongTextInputStyled } from "../components/InputContainer"
import { UploadArtwork, UploadProjectFiles, UploadImageFile} from "../components/MediaInput"
import { Heading3 } from '../components/TextComponents'
import SelectDownloadedContent from '../components/SelectDownloadedContent'
import {useEffect, useState} from 'react'
import { uploadMetadata, updateMetadataWithExternalURL } from "../controllers/backendController"
import { deploySidechain} from "../controllers/blockchainController"
import SubmitButton from '../components/SubmitButton'
import Loader from "../components/Loader"
import { useNavigate } from "react-router-dom";
import { getDownloadedContent } from "../controllers/backendController"


const InputGrid = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr;
    grid-gap : 20px;
    justify-items : center;
    align-items : center;
    width : 100%;
    `
const UploadPageTextInputContainer = styled.div`
    height : 160px;
    display : flex;
    flex-direction : column;
    justify-content : space-between
`
const UploadPageContainer = styled.div`
    display : flex; 
    width : 600px;
    margin-left : auto;
    margin-right : auto;
    flex-direction : column;
    gap : 40px;
`
const MetadataInputContainer = styled.div`
    display : flex;
    align-items : center;
    flex-direction : column;
    gap : 40px;
`

const DeployContractContainer = styled.div`
    display : flex;
    flex-direction : column;
    gap : 40px;
    align-items : center;
`

export default function UploadPage(props){

    const [projectFiles, setProjectFiles] = useState("")
    const [artwork, setArtwork] = useState("")
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [baseURI, setBaseURI] = useState("")
    const [loading, setLoading] = useState("")
    const [REV, setREV] = useState(0) //default is 0
    const [creatorAddress, setCreatorAddress] = useState("") //default is connected wallet
    const [data, setData] = useState([])
    
    const navigate = useNavigate()

    const handleSetSelected = (address) => {
        const newData = [...data]
        for (const entry of newData){
            if(entry.address === address){
                entry.selected = !entry.selected
                break
            }
        }
        setData(newData)
    }


    const handleMetadataSubmit = async () =>{
        const formData = new FormData()
        formData.append("image", image)
        formData.append("name", name)
        formData.append("artwork", artwork)
        formData.append("project_files", projectFiles)
        formData.append("description", description)


        
        setLoading("Uploading Metadata...")
        try {
            const uri = await uploadMetadata(formData)
            setBaseURI(uri)
        } catch (error) {
            console.log(error)
            alert("Error uploading metadata.")
        }
        
        setLoading("")
    }

    const handleDeployContract = async () =>{
        setLoading("Deploying Contract...")
        try {
            const address = await deploySidechain(REV, creatorAddress? creatorAddress :props.account, 
                data.filter(obj => obj.selected).map(obj => obj.address), baseURI)
            try{
                await updateMetadataWithExternalURL(baseURI +"-1", address)
            }catch(error){
                console.log(error)
                alert("Contract deployed but error updating metadata.")
            } 
            setLoading("")
            navigate("/artwork/" + address)

        } catch (error) {
            console.log(error) 
            alert("error deploying contract to network")  
        }
        
        setLoading("")
        
    }

    useEffect(()=>{
        const loadData = async() =>{
            const newData = await getDownloadedContent(props.account)
            setData(newData)
        }

        loadData()

    }, [])

    
    return (
        <div key={"uploadPage"}>
        {
            loading? <Loader message={loading}/> :
            <UploadPageContainer>
                {baseURI? 
                    <DeployContractContainer>
                        <Heading3 style={{"alignSelf" : "start"}}>Ownership Details</Heading3>
                        <TextInputStyled width={"250px"} height={"45px"} 
                            onChange={(e) => setREV(e.target.value)} placeholder={"REV"}/>
                        <TextInputStyled width={"250px"} height={"45px"} 
                            onChange={(e) => setCreatorAddress(e.target.value)} placeholder={"Creator Address"}/>
                        <Heading3 style={{"alignSelf" : "start"}}>Select Remixed Content From Downloads</Heading3>
                        <SelectDownloadedContent data={data} handleSetSelected={handleSetSelected}/>  
                        <SubmitButton text={"Deploy Contract"} onClick={handleDeployContract}/>
                    </DeployContractContainer>

                    :

                    <MetadataInputContainer>
                        <Heading3 style={{alignSelf : "start"}}>Upload Metadata</Heading3>
                        <InputGrid>
                            <UploadPageTextInputContainer>
                                <TextInputStyled width={"250px"} height={"45px"} 
                                    onChange={(e) => setName(e.target.value)} placeholder={"Name"}/>
                                <LongTextInputStyled width={"250px"} height={"100px"} 
                                    onChange={(e) => setDescription(e.target.value)} placeholder={"Description"}/>
                            </UploadPageTextInputContainer>
                            <UploadImageFile setFile={setImage}/>
                            <UploadArtwork setFile={setArtwork}/>
                            <UploadProjectFiles setFile={setProjectFiles}/>
                        </InputGrid>
                        <SubmitButton text={"Proceed to Deployment"} onClick={handleMetadataSubmit}/>
                    </MetadataInputContainer>
                }
            </UploadPageContainer>
        }
        </div>
        
        

    )
}