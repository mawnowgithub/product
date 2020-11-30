// data simulating response from service with data to be rendered in screen

const dataSource={

    totalFollowers:23004,
    socialData:[ 
        {
            generalData:{
                dataId:1,
                socialServiceName:"Facebook",
                userName:"@nathanf",
                userTitle:"followers",
                usersNumber:1987,
                variationUserNumberToday:12,
                variationUserNumberLastDays:81
            },
            activityData:{
                origin: "Facebook",
                activities:[
                    {                
                        activityName: "Page Views",
                        activityNumber: 87,
                        activityVariation: 3
                    },
                    {                    
                        activityName: "Likes",
                        activityNumber: 52,
                        activityVariation: -2
                    }
                ]
            },
            chartData:{
                chartCustomTitle: "May 4 - May 13",
                label:"new followers", 
                labels:["4", "5", "6", "7", "8", "9","10", "11", "12","13"], 
                data: [3, 2, 6, 8, 9, 10, 9, 11, 12, 12],  
            }
        },

        {
            generalData:{
                dataId:2,
                socialServiceName:"Twitter",
                userName:"@nathanf",
                userTitle:"followers",
                usersNumber:1044,
                variationUserNumberToday:99,
                variationUserNumberLastDays:105
            },
            activityData:{
                origin: "Twitter",
                activities:[
                    {
                        activityName: "Retweets",
                        activityNumber: 117,
                        activityVariation: 303
                    },
                    {                        
                        activityName: "Likes",
                        activityNumber: 507,
                        activityVariation: 553
                    }
                ]
            },
            chartData:{
                chartCustomTitle: "May 4 - May 13",
                label:"new followers", 
                labels:["4", "5", "6", "7", "8", "9","10", "11", "12","13"], 
                data: [8, 10, 40, 15, 30, 7, 42, 9, 4, 5],  
            }
        
        },

        {
            generalData:{
                dataId:3,
                socialServiceName:"Instagram",
                userName:"@realnathanf",
                userTitle:"followers",
                usersNumber:11350,
                variationUserNumberToday:1099,
                variationUserNumberLastDays:100
            },
            activityData:{
                origin: "Instagram",
                activities:[
                  
                    {                        
                        activityName: "Likes",
                        activityNumber: 5462,
                        activityVariation: 2257
                    },
                    {
                        activityName: "Profile Views",
                        activityNumber: 52450,
                        activityVariation: 1375
                    }                   
                ]
            },
            chartData:{
                chartCustomTitle: "May 4 - May 13",
                label:"new followers", 
                labels:["4", "5", "6", "7", "8", "9","10", "11", "12","13"], 
                data: [10, 10, 5, 0, 0, 8, 35, 42, 9, 12],  
            }
        },

        {
            generalData:{
                dataId:4,
                socialServiceName:"Youtube",
                userName:"Nathan F.",
                userTitle:"subscribers",
                usersNumber:8239,
                variationUserNumberToday:-144,
                variationUserNumberLastDays:40
            },
            activityData:{
                origin: "Youtube",
                activities:[
                    {
                    
                        activityName: "Likes",
                        activityNumber: 107,
                        activityVariation: -19
                    },
                    {
                        activityName: "Total Views",
                        activityNumber: 1047,
                        activityVariation: -12
                    }
                   
                ]
            },
            chartData:{
                chartCustomTitle: "May 4 - May 13",
                label:"new subscribers", 
                labels:["4", "5", "6", "7", "8", "9","10", "11", "12","13"], 
                data: [4, 9, 17, 8, 9, 32, 21, 17, 0, 67],  
            }
        }
    ]
}

