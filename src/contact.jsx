
import useData from "./contextApi"
function Contact() {
    const {globaldata} = useData()
    console.log('this is contextdata',globaldata)
    return(
        <><h1>this is contact page</h1>
        <div>{globaldata.firstname}</div>
        
        </>
    )
} export default Contact