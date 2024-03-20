
const SASidebar = ({setShowAbout, setShowTodoList, setShowHome}) => {
    return (
        <div>
            <button
                onClick={() => {
                    setShowAbout(true)
                    setShowTodoList(false)
                    setShowHome(false)
                }}
            >About
            </button>

            <button
                onClick={() => {
                    setShowHome(true)
                    setShowAbout(false)
                    setShowTodoList(false)
                }}
            >Home
            </button>

            <button
                onClick={() => {
                    setShowTodoList(true)
                    setShowAbout(false)
                    setShowHome(false)
                }}
            >TodoList
            </button>

        </div>
    )
}
export default SASidebar