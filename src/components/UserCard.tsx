import avatar from "../assets/avatar.png"

export const UserCard = () => {

    return (
        <div className="text-lg max-w-sm max-h-64 relative border-2  rounded-3xl px-10 h-full bg-whiteBackground border-violet" style={{
        }}>
            <img className="rounded-lg" src={avatar} width={68} height={68} style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-34px) translateY(-21px)"
            }} />
            <div className="mt-14 text-center">
                <strong className="text-violetDark">Lauren Robson</strong>
                <p className="text-violetLight text-xs">HR Director</p>
                <p className="text-violetDark text-base mt-4 leading-160">
                    “I want to lower PTO liability and keep my employess happy. I want to lower PTO liability.”
                </p>
            </div>
        </div >
    )
}