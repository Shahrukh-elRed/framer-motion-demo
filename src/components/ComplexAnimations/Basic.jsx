import { useAnimate } from "framer-motion"

const Basic = () => {
    const [scope, animate] = useAnimate();

    const handleAnimate = async() => {
        await animate("#target", { x: 200 });
        await animate("#target", { y: 200, rotate: "360deg" }, { duration: 0.5 }); 
        await animate("#target", { borderRadius: "100%" });
        await animate("#target", { 
            x: -200 ,
            borderRadius: "25px",
            rotate: "180deg",
            background: "#f59e0b"
        });
        await animate("button", { rotate: "360deg" });
        await animate(
            "#target", 
            { 
                y: 0 ,
                borderRadius: "0px",
                rotate: "0deg",
            },
            { duration: 0.5 }
        );
        await animate("#target", { x: 0, background: "#4f46e5" });
        await animate("button", { rotate: "0deg" });
    };

    return (
        <div ref={scope}>
            <div id="target" className="h-36 w-36 bg-violet-500" />
            <button 
                onClick={() => handleAnimate()}
                className="mt-4 rounded-md bg-slate-900 px-4 py-2 font-bold text-white"
            >
                Trigger Animation
            </button>
        </div>
    )
}

export default Basic;