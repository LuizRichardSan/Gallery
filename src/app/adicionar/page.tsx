const  UserPost = () => {
    return(
        <>
        <div className="w-screen h-screen bg-slate-100 flex items-center justify-center ">
            <div className="w-96 h-56 bg-slate-500 rounded-xl flex justify-center items-center flex-col">
                <input type="file" />
                <button className="w-16 h-10 bg-pink-300">Enviar</button>
            </div>
        </div>
        </>
    )
}

export default UserPost;