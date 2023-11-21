import CountdownTimer from "./CountdownTimer";
import "./countdown.css";

const CountDownComponent = () => {
    // Calculate the milliseconds for seven days
    const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;

    // Set the target date for November 20th at 14:00:00
    const november20 = new Date(new Date().getFullYear(), 10, 20, 14, 0, 0, 0);
    const NOW_IN_MS = november20.getTime();

    // Calculate the target date after seven days
    const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;

    return (
        <div className="countdown-content-box">
            <CountdownTimer targetDate={dateTimeAfterSevenDays} />
        </div>
    );
};

export default CountDownComponent;
