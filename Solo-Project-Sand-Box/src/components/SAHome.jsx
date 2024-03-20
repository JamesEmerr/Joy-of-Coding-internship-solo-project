


const SAHome = ({showHome, setShowHome, setShowAbout}) => {
    if (!showHome) return null

    return (
        <>
        <div>Homing Pigeon</div>
        <button
            onClick={()=>{
                setShowHome(false)
                setShowAbout(true)
            }}
        >Close </button>
        </>
    )

}
export default SAHome