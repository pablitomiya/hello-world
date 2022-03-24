import { useParams } from "react-router-dom"
const Detail = () => {
    const { username } =  useParams()
    return <h1>Detail {username}</h1>
}

export default Detail