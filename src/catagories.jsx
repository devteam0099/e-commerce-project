import useData from "./contextApi"
function Catagories() {
    const {setglobaldata} = useData()
    function link(){
        setglobaldata('this is the sample data for context api')
    }

    return(
        <><h1 onClick={link}>this is catagories page</h1>
        </>
    )
}
export default Catagories