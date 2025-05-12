import { useRef, useState } from "react";
import ModalDialog from "./ModalDialog";

const Timer = ({ title, time }) => {
    const [isLoser, setIsLoser] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const timer = useRef();
    const dialogModal = useRef();

    const handleStarTime = () => {
        setHasStarted(true);
        timer.current = setTimeout(() => {
            dialogModal.current.showModal();
            setHasStarted(false);
            setIsLoser(true);
        }, time * 1000);
    };

    const handleStopTime = () => {
        clearInterval(timer.current);
        setHasStarted(false);
    };

    return (
        <>
        {isLoser && <ModalDialog resultGame={isLoser} timeTarget={time} ref={dialogModal}/> }
        <section className="w-[22rem] flex flex-col items-center justify-center p-8 m-8 bg-[#691a1a] text-[#221c18] shadow-lg rounded-md">
            <h2 className="text-xl tracking-wide text-center uppercase text-[#edfcfa] font-bold mb-2">
                {title}
            </h2>
            {isLoser && <p className="my-1 mb-3">"Has Perdido!"</p>}
            <p className="border-[1px] border-solid border-[#46cebe] rounded px-2 py-1 text-[#edfcfa]">
                {time} segundo{time > 1 ? "s" : ""}
            </p>
            <p className="mt-4 px-4 py-2 border-none rounded-md bg-[#12352f] text-[#edfcfa] text-lg cursor-pointer hover:bg-[#051715]">
                <button onClick={hasStarted ? handleStopTime : handleStarTime}>
                    {hasStarted ? "Parar" : "Empezar"}
                </button>
            </p>
            <p className=""></p>
        </section>
        </>
    );
};

export default Timer;
