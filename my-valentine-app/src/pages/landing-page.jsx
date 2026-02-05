import { useState } from "react";
import "../styles/landing-page.css"
function LandingPage() {
    const [isValentine, setValentine] = useState(false);
    const [position, setPosition] = useState({ top: "50%", left: "50%" });
    const [showPopUp, setShowPop] = useState(false);
    const [hearts, setHearts] = useState([]);

    const movebuttom = () => {
        let randomTop = Math.max(Math.random() * 80, 15);
        let randomLeft = Math.max((Math.random() * 80), 25);
        while (randomTop <= 55 && randomTop > 45) {
            randomTop = Math.max(Math.random() * 80, 15);
        }
        while (randomLeft <= 35 && randomLeft >= 25) {
            randomLeft = Math.max((Math.random() * 80), 25);
        }
        setPosition({
            top: `${randomTop}vh`,
            left: `${randomLeft}vw`
        });

    }

    const createHearts = () =>
        Array.from({ length: 200 }).map((_, i) => ({
            id: `${Date.now()}-${i}`,
            left: Math.random() * 100,
            size: 20 + Math.random() * 20,
            duration: 2 + Math.random() * 2
        }));

    const handleYesClick = () => {
        setTimeout(() => {
            setShowPop(true);
        }, 10);
        const bursts = 2;        // 👈 N times (change this)
        const gap = 2000;        // 👈 delay between bursts (ms)

        for (let i = 0; i < bursts; i++) {
            setTimeout(() => {
                setHearts(prev => [...prev, ...createHearts()]);
            }, i * gap);
        }

        // Optional: clear hearts after all bursts finish
        setTimeout(() => {
            setHearts([]);
        }, bursts * gap + 4000);
    };
    const handleSubmit = () => {
        setValentine(true);
        setShowPop(false)
    }
    return (

        <div className="page-container">
            <h1>Hey Motti babay will u be my Vallentine ❤️</h1>

            <button className="yes-btn" onClick={handleYesClick} >Yes 💖</button>


            {hearts.map(heart => (
                <span
                    key={heart.id}
                    className="floating-heart"
                    style={{
                        left: `${heart.left}vw`,
                        fontSize: `${heart.size}px`,
                        animationDuration: `${heart.duration}s`
                    }}
                >
                    💖
                </span>
            ))}
            {
                !isValentine && (
                    <button className="no-btn" onMouseEnter={movebuttom} style={{ top: position.top, left: position.left }} > No 😢 </button>

                )
            }
            {
                showPopUp && (
                    <div className="popup-overlay">
                        <div className="pop-up">
                            <h2>Perfect Decision 😍</h2>
                            <p>You just made the sweetest choice ever 💕</p>
                            <button className="popup-btn" onClick={handleSubmit}>Okay 💖</button>
                        </div>

                    </div>
                )
            }
        </div>

    )
}
export default LandingPage;