import axios from "axios"

export const submitTokenAndAmount = async(walletAddress)=>{
    try {
        const res = await axios.get(`https://api.luckystar.club/api/luckyStar/getfaucet?recipientAddress=${walletAddress}`)
        return res?.data
    } catch (error) {
        console.log(error);
    }
}