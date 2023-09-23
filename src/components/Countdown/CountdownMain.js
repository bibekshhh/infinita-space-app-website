import CountdownTimer from "./CountdownTimer";
import "./countdown.css"

const CountDownComponent = () => {
    const SEVEN_DAYS_IN_MS = 13.417 * 24 * 60 * 60 * 1000;
    const september23 = new Date(new Date().getFullYear(), 8, 23, 14, 0, 0, 0);
    const NOW_IN_MS = september23.getTime();
    console.log(NOW_IN_MS);

    const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;

    return (
        <div className="countdown-content-box">
        <CountdownTimer targetDate={dateTimeAfterSevenDays} />
        </div>
    );
}

export default CountDownComponent;