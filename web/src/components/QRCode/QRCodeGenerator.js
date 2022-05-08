import Button from "../UI/Button"
import axios from "axios"
import { useState } from "react"

const QRCodeGenerator = (props) => {
    const [qrUrl,setQrUrl] = useState('');

    const postRecipeToDB = () => {
        axios({
            method: "POST",
            data:{
                "recipe_name":props.recipe,
                "cooking_methods":props.methods
            },
            url:"http://localhost:3001/",
        })
        .then(res => {
            console.log(res.data)
            console.log(props)
            generateQRCode(props.recipe, res.data._id)
        })
        .catch(error => console.log(error))
    }

    const generateQRCode = (recipeName, currentRecipeID) => {
        axios({
            method: "POST",
            data: { "recipeName": recipeName,
                    "currentRecipeID": currentRecipeID},
            url:"http://localhost:3001/generateQRCode"
        })
        .then(res => {
            console.log(res.data)
            setQrUrl(res.data)
            //editImgDataURI(res)
        })
        .catch(error => console.log(error))
    }


    return (
        <div>
            <Button className = "QRCodeGenerateBTN" onClick={postRecipeToDB}>
                Save/Generate QR Code
            </Button>
            <img className = "QRCodeImg"src ={qrUrl} />
        </div>
    )
}

export default QRCodeGenerator;