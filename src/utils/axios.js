import axios from "axios"

export const submitTokenAndAmount = async(walletAddress)=>{
    try {
        const res = await axios.get(`http://139.162.45.5:8000/api/luckyStar/getfaucet?recipientAddress=${walletAddress}`)
        return res?.data
    } catch (error) {
        console.log(error);
    }
}