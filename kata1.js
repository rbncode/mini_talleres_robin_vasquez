// https://www.codewars.com/kata/52685f7382004e774f0001f7/javascript

function humanReadable(seconds) {
    let hour = 0;
    let minute = 0;
    let second = 0;

    if (seconds <= 359999) {
      hour = Math.floor(seconds / 3600);
      let remainder = seconds - hour * 3600;
      minute = Math.floor(remainder / 60);
      remainder = remainder - minute * 60;
      second = remainder;
    }

    const time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`;

    return time;
}
