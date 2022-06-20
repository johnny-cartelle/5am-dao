import timezones from "$lib/json/cities-timezones.json";
import { writable } from "svelte/store";
import { shuffle } from "./helpers";

// get the closest city to 5am
function getCity() {
  shuffle(timezones);

  let closestTimezone;
  let timeDifference;
  timezones.forEach((timezone) => {
    //get the closest time to 5am
    const formatter24 = new Intl.DateTimeFormat([], {
      timeZone: timezone.code,
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h23",
    });
    const time24 = formatter24.format(new Date());
    const timeDif = Math.abs(
      Date.parse("01/01/2007 5:00") - Date.parse("01/01/2007 " + time24)
    );

    if (timeDifference == null || timeDif < timeDifference) {
      timeDifference = timeDif;
      closestTimezone = timezone;
    }
  });

  // select a city from the list
  const city =
    closestTimezone.cities[
      Math.floor(Math.random() * closestTimezone.cities.length)
    ];

  // format display time for the closest timezone
  const formatter12 = new Intl.DateTimeFormat([], {
    timeZone: closestTimezone.code,
    hour: "numeric",
    minute: "numeric",
  });

  const time = formatter12
    .format(new Date())
    .replace(":", '<span class="blink">:</span>');

  return { name: city, time: time };
}

const currentCity = getCity();
let columns = writable(0);

export { currentCity, columns };
