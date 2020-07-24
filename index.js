let week = ["Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday", "Sunday"];

let activities = [{
        event: ["Ate Pizza", "Went to Genesys Tech Hub", "Wrote code all Night"]
    },
    {
        event: ["Ate Fried Egg", "Went to Genesys Tech Hub", "Wrote code all Night"]
    },
    {
        event: ["Ate Bread", "Went for Medical Checkup", "Visited a Friend"]
    },
]


let Jacque_log = () => {
    // loop for each day of the week
    for (w = 0; w < week.length; w++) {
        let week_day = week[w];
        let activity = activities[Math.floor(Math.random() * activities.length)]
        activity = JSON.stringify(activity.event);

        //class constructor to analyse Jacque Events
        class Jacque {

            constructor(week_day, activity) {
                this.day = week_day;
                this.activity = activity;
            }

            //transform method
            transform() {

                if (this.activity.indexOf("Ate Pizza") > -1) {
                    return "Jacque Transformed to Squirrel";
                } else {
                    return "Jacque did not Transform to a Squirrel";
                }

            }
        }

        //invoke class and console the result for each day
        let week_log = new Jacque(week_day, activity);
        console.log(`${week_log.day}: 
       ${week_log.activity}
       ${week_log.transform()}`);

    }
}

let analyse = () => {
    for (i = 1; i < 3; i++) {
        console.log(`For Week ${i}`);
        Jacque_log();
    }
}

analyse();