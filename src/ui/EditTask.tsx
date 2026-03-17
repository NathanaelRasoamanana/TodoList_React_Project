export default function EditTask(){
    const handleSubmit = console.log("handleSubmit");
    
    const handleChange = console.log("handleChange");

    return (
        <form
            onSubmit={handleSubmit}
        >
            <input 
                value={"Task"}
                placeholder={"Add a task..."}
                onChange={handleChange}
            />
            <button>
                OK
            </button>
        </form>
    )
}