// utils/dayjsConfig.js

import dayjs from "dayjs";

import weekOfYear from "dayjs/plugin/weekOfYear";
import weekday from "dayjs/plugin/weekday";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(weekOfYear);
dayjs.extend(weekday);
dayjs.extend(isToday);
dayjs.extend(isYesterday);
dayjs.extend(advancedFormat);

export default dayjs;