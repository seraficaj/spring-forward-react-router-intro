import { useParams } from "react-router-dom";

function GetIdFromParams({ ClassComponent}) {
    const params = useParams()
    return <ClassComponent params={params} />
}

export default GetIdFromParams;