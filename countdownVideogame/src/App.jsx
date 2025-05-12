import Player from "./components/Player.jsx";
import Timer from "./components/Timer.jsx";
import TimerContainer from "./components/TimerContainer.jsx";

export default function App() {
    return (
        <>
            <Player />

            <TimerContainer>
                <Timer title="Nivel Fácil" time="1"></Timer>
                <Timer title="Nivel Intermedio" time="20"></Timer>
                <Timer title="Nivel Difícil" time="40"></Timer>
                <Timer title="Nivel Reto" time="60"></Timer>
            </TimerContainer>
        </>
    );
}
