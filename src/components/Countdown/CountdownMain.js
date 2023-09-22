import CountdownTimer from "./CountdownTimer";
import "./countdown.css"

const CountDownComponent = () => {
    const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;

    return (
        <div className="countdown-content-box">
        <CountdownTimer targetDate={dateTimeAfterSevenDays} />
        </div>
    );
}

export default CountDownComponent;