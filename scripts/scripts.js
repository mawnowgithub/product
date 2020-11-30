window.onload=(()=>{  

//##################### CONSTANS #####################

    const BASE_IMAGE_URL="images/"
    const FACEBOOK_ICON="icon-facebook.svg"
    const TWITTER_ICON="icon-twitter.svg"
    const INSTAGRAM_ICON="icon-instagram.svg"
    const YOUTUBE_ICON="icon-youtube.svg"
    const FONT_SIZES=[10, 12, 14]
    const KEYBOARD_OPTIONS=["Enter", "Space"] 


// ##################### DATA PROCESSING #####################


    const formatNumbers=(x) =>{
        let parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }


// ---- general report generation

    const dashBoardPopulate=(data)=>{

        // total followers update
        let totalFollowersContainer=document.getElementById("total-followers-number"); 
        totalFollowersContainer.innerHTML=(formatNumbers(data.totalFollowers))

        let socialData=data.socialData;

        // generate big cards

        let bigCardData=[]

        for (let i=0; i<socialData.length; i++){
            let currentSocialData=socialData[i];
            bigCardData.push(currentSocialData.generalData)
        }      

        let finalHtmlBigCards=bigCardGenerate(bigCardData)

        let bigCardTarget=document.getElementById("big-card-showcase-content")
        bigCardTarget.innerHTML=finalHtmlBigCards

        // generate small cards

        let smallCardData=[]

        for (let i=0; i<socialData.length; i++){
            let currentSocialData=socialData[i];
            smallCardData.push(currentSocialData.activityData)
        }   

        let finalHtmlSmallCards=smallCardGenerate(smallCardData)

        let smallCardTarget=document.getElementById("small-card-showcase-content")
        smallCardTarget.innerHTML=finalHtmlSmallCards
        
    }

    const bigCardGenerate=(data)=>{

        let htmlCardFinal=""
        let cardNumber=0;

        //--- process data for card generation
        for(i=0; i<data.length;i++){

        // card id
        let cardId="card-big-"+data[i].dataId
        let cardDataValue=data[i].dataId

        // top card style
            let cardLineClass="card__top-line--"+(data[i].socialServiceName).toLowerCase()      

        // logo
            let cardLogo=selectSocialLogo(data[i].socialServiceName)      

        //profilename
            let cardProfileName=data[i].userName       

        //total followers
            let cardTotalFollowers=bigNumberConverter(data[i].usersNumber)       

        // users title
            let cardUserTitle=data[i].userTitle        

        // today variation
            let cardUsersToday=data[i].variationUserNumberToday        

            let cardClassVariation=""
            let cardVariationTextClass=""
            if(parseInt(data[i].variationUserNumberToday)>0){
                cardClassVariation="arrow-flag__icon--increase"
                cardVariationTextClass="text--lime"
            }else if(parseInt(data[i].variationUserNumberToday)<0){
                cardClassVariation="arrow-flag__icon--decrease"
                cardVariationTextClass="text--red"
            }else{
                cardClassVariation=""
            }
            cardUsersToday=Math.abs(cardUsersToday)+ " Today"

        //-------- card html construction   
        
        cardNumber+=1
        if(cardNumber===1){
            htmlCardFinal+= '<div class="g-row">' //opening tag for row
        }

        htmlCardFinal+='<div class="g-col g-col--1 g-col--mobile--50">'
        
        htmlCardFinal+=  '<div id="'+cardId+'" class="card card--big" data-id="'+cardDataValue+'" tabindex="0">'
        htmlCardFinal+=     '<div class="card__top-line '+cardLineClass+'"></div>'
        htmlCardFinal+=     '<div class="card__header">'
        htmlCardFinal+=         '<div class="icon-flag">'
        htmlCardFinal+=             '<img alt="facebook-icon" class="icon-flag__icon icon" src="'+cardLogo+'">'
        htmlCardFinal+=             '<span class="icon-flag__text text text--line">'+cardProfileName+'</span>'
        htmlCardFinal+=         '</div>'
        htmlCardFinal+=      '</div>'
        htmlCardFinal+=      '<div class="card__body">'
        htmlCardFinal+=         '<span class="text text--numeral text--big  u-display u-display--block u-spacer-vertical u-spacer-vertical--5">'+cardTotalFollowers+'</span>'
        htmlCardFinal+=         '<span class="text text--line text--expanded text--uppercase text--400 text--medium u-display u-display--block">'+cardUserTitle+'</span>'
        htmlCardFinal+=      '</div>'
        htmlCardFinal+=      '<div class="card__footer">'
        htmlCardFinal+=         '<div class="arrow-flag">'
        htmlCardFinal+=             '<div class="arrow-flag__icon '+cardClassVariation+'"></div>'
        htmlCardFinal+=             '<span class="arrow-flag__text text text--line '+cardVariationTextClass+'">'+cardUsersToday+'</span>'
        htmlCardFinal+=         '</div>'
        htmlCardFinal+=     '</div>'
        htmlCardFinal+=  '</div>'

        htmlCardFinal+='</div>'

        if(cardNumber===4 ||cardNumber===data.length){
            htmlCardFinal+= '<div>' // closing tag for row
            cardNumber=0
        }

        }

        return htmlCardFinal
    }

    const smallCardGenerate=(data)=>{

        let htmlCardFinal=""
        let cardNumber=0;   

        //--- process data for card generation

        let activityCountRow=0
        
        for(let i=0; i<data.length;i++){          

            
            // logo selection
            let cardLogo=selectSocialLogo(data[i].origin)      

            // as there are several possible activities
            // we need to iterate over each one

            let allActivities=data[i].activities

            let activityCount=0            

            for(let a=0; a<allActivities.length; a++){   
                
                        
                //activity name
                let cardActivityName=allActivities[a].activityName           

                //activity number
                let cardActivityNumber=bigNumberConverter(allActivities[a].activityNumber)           

                // activity variation
                let activityVariation=allActivities[a].activityVariation       

                let cardClassVariation=""
                let cardVariationTextClass=""

                if(parseInt(activityVariation)>0){
                    cardClassVariation="arrow-flag__icon--increase"
                    cardVariationTextClass="text--lime"
                }else if(parseInt(activityVariation)<0){
                    cardClassVariation="arrow-flag__icon--decrease"
                    cardVariationTextClass="text--red"
                }else{
                    cardClassVariation=""
                }
                
                activityVariation=Math.abs(activityVariation)+ "%"            

                activityCount++
                activityCountRow++   

                if(activityCountRow===1){
                    htmlCardFinal+= '<div class="g-row">' // row starts                
                }

                if(activityCount===1){
                    htmlCardFinal+='<div class="g-col g-col--2">' // double col starts
                    htmlCardFinal+='<div class="g-row">'
                }

                

                htmlCardFinal+= '<div class="g-col g-col--2">' //activity starts

                htmlCardFinal+='<div class="card card--small" tabindex="0">'
                htmlCardFinal+=    '<div class="card__header">'
                htmlCardFinal+=        '<div class="card__title">'
                htmlCardFinal+=            '<span class="text text--line">'+ cardActivityName +'</span>'
                htmlCardFinal+=        '</div>'
                htmlCardFinal+=            '<div class="card__icon">'
                htmlCardFinal+=                '<img class="icon" src="'+ cardLogo +'">'
                htmlCardFinal+=            '</div>'
                htmlCardFinal+=    '</div>'
                htmlCardFinal+=    '<div class="card__body">'
                htmlCardFinal+=        '<div class="card__number">'
                htmlCardFinal+=            '<span class="text text--numeral text--medium">'+ cardActivityNumber +'</span>'
                htmlCardFinal+=        '</div>'
                htmlCardFinal+='       <div class="card__status">'
                htmlCardFinal+=            '<div class="arrow-flag">'
                htmlCardFinal+=                '<div class="arrow-flag__icon '+ cardClassVariation +'"></div>'
                htmlCardFinal+=                '<span class="arrow-flag__text text text--line '+ cardVariationTextClass +'">'+ activityVariation +'</span>'
                htmlCardFinal+=            '</div>'
                htmlCardFinal+=        '</div>'
                htmlCardFinal+=    '</div>'
                htmlCardFinal+='</div>'

                htmlCardFinal+= "</div>" // activity ends

                if(activityCount===2){
                    activityCount=0
                    htmlCardFinal+= '</div>'
                    htmlCardFinal+='</div>' // double col ends
                }

                if(activityCountRow===4){
                    activityCountRow=0
                htmlCardFinal+= '</div>' // row ends               
                }
            }
    
        
        }

        return htmlCardFinal
    }

    const selectSocialLogo=(socialName)=>{

        let logoUrl=""

        switch(socialName){
            case "Facebook":
                logoUrl=BASE_IMAGE_URL+FACEBOOK_ICON
                break
            case "Twitter":
                logoUrl=BASE_IMAGE_URL+TWITTER_ICON
                break
            case "Instagram":
                logoUrl=BASE_IMAGE_URL+INSTAGRAM_ICON
                break
            case "Youtube":
                logoUrl=BASE_IMAGE_URL+YOUTUBE_ICON
                break
        }   

        return logoUrl

    }

    const bigNumberConverter=(number)=>{

        let usersNumber=number

        if(parseInt(usersNumber)>10000){
            usersNumber=Math.round(usersNumber/1000)
            usersNumber=usersNumber+"K"
        }
        return usersNumber   

    }

    dashBoardPopulate(dataSource)



//##################### MODAL FUNCTION #####################

    let modalContainer=document.getElementById("main-modal");    

    let lastFocus="";
    let bodyTag=document.getElementById("main-page-body-tag")


    const openModal=(e)=>{        
        
        // avoid any try to reopen modal when it is opened    

        if (modalContainer.classList.contains("modal--open")){
            return
        } 
        
        let type=e.type        
        
        // check event type to prevent accidental opening on keyboard events

        if(type==="keypress"){
            let codeName=e.code
            if(!KEYBOARD_OPTIONS.includes(codeName)){
                return
            }
        }  

        lastFocus=e.currentTarget.id 
        lastFocus=document.getElementById(lastFocus);

        modalContainer.classList.add("modal--open")
        modalContainer.focus();  
        
        bodyTag.classList.add("modal--open")
        document.addEventListener("keyup", closeModalEsc)
    
    }

    const closeModal=(e)=>{           

        // avoid any try to close modal when it is closed 

        if (!modalContainer.classList.contains("modal--open")){
            return
        }   
    
        let type=e.type   
        
        // check event type to prevent accidental opening on keyboard events

        if(type==="keyup"){
            let codeName=e.code
            if(!KEYBOARD_OPTIONS.includes(codeName)){
                return
            }
        }  

        modalContainer.classList.remove("modal--open")  
        bodyTag.classList.remove("modal--open")
        lastFocus.focus();

    }

    const closeModalEsc=(e)=>{      

        // avoid any try to close modal when it is closed 

        if (!modalContainer.classList.contains("modal--open")){
            return
        }   
        
        let codeName=e.code
        if(codeName!=="Escape"){
                return
        } 
    
        modalContainer.classList.remove("modal--open")  
        bodyTag.classList.remove("modal--open")
        lastFocus.focus();
        document.removeEventListener("keyup", closeModalEsc)
    }



//##################### CHARTS JS #####################

    // chart global config

    // point options

    Chart.defaults.global.elements.point.borderColor= "hsl(243, 51%, 70%)"
    Chart.defaults.global.elements.point.borderWidth= 1
    Chart.defaults.global.elements.point.backgroundColor= "hsl(230, 17%, 14%)"
    Chart.defaults.global.elements.point.radius= 5
    Chart.defaults.global.elements.point.hoverRadius= 7
    Chart.defaults.global.elements.point.hitRadius= 2
    Chart.defaults.global.elements.point.hoverBackgroundColor="hsl(243, 51%, 70%)"
    Chart.defaults.global.elements.point.hoverBorderWidth=1
    Chart.defaults.global.elements.point.hoverBorderColor="hsl(243, 51%, 70%)"

    // font options

    Chart.defaults.global.defaultFontColor="hsl(243, 51%, 70%)"
    Chart.defaults.global.defaultFontFamily="Inter, sans-serif"
    Chart.defaults.global.defaultFontSize=10

    // border options

    Chart.defaults.global.elements.line.borderColor= "hsl(243, 51%, 70%)"
    Chart.defaults.global.elements.line.borderWidth=2

    // text options

    Chart.defaults.global.legend.display=false
    Chart.defaults.global.title.display=false

    // tooltip options

    Chart.defaults.global.tooltips.bodyFontColor="hsl(243, 51%, 70%)"
    Chart.Tooltip.positioners.custom = function(elements, eventPosition) {
        return {
            x: eventPosition.x,
            y: eventPosition.y + 10
        };
    };

    // chart init

    let ctx = document.getElementById('chart-showcase-target');
    ctx.height=100

    const createChart=(target)=>{    

        let newChart = new Chart(target, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: '',
                    data: [],            
                }]
            },         
            options: {
                scales: {          
                    yAxes: [{
                        stacked:true,
                        color: "hsl(243, 51%, 70%)",
                        ticks: {
                            beginAtZero: true,
                            padding: 20,                   
                        },
                        gridLines:{                   
                            color: "hsl(228, 26%, 27%)",
                            lineWidth: 2,
                            borderDash:[3],                           
                            drawTicks: false                    
                        }
        
                    }],
                    xAxes: [{
                        offset:true,
                        stacked:true,
                        color: "hsl(243, 51%, 70%)",              
                        ticks: {
                            beginAtZero: true,
                            padding: 20                   
                        },
                        gridLines:{                   
                            color: "hsl(228, 26%, 27%)",
                            lineWidth: 2,
                            borderDash:[3],                  
                            drawTicks: false,                  
                        }
        
                    }],
                
                },      
                responsive: true,
                maintainAspectRatio:false,
                tooltips:{
                    callbacks:{
                        title: function (){},
                        label: function(tooltipItem, data) {
                            var label = Math.round(tooltipItem.yLabel * 100) / 100;                     
        
                            if (label) {
                                label += ' ' + data.datasets[tooltipItem.datasetIndex].label || '';                        
                            }
                        
                            return label;
                        }
                    },
                    cornerRadius: 0,
                    caretSize: 0,
                    xPadding: 16,
                    yPadding: 10,
                    backgroundColor: 'hsl(230, 17%, 14%)', 
                    borderColor: 'hsl(243, 51%, 70%)',
                    borderWidth: 1,
                    displayColors: false,
                    position:"custom",
                    yAlign: "top",
                    xAlign:"center"       
                }
            }
        });

        return newChart
    }

    let mainChart=createChart(ctx);


    const cleanChart=(chart)=> {
        
        chart.data.labels=[];   
        chart.data.datasets.forEach((dataset) => {
            dataset.data=[];       
        });

        chart.update();
    }


    const updateChart=(e)=> {
        
        let chart=mainChart      
        let dataIndex=parseInt(e.currentTarget.getAttribute("data-id"))-1  
        let freshData=dataSource.socialData[dataIndex] 
        let freshDataChart= freshData.chartData    
    
        // check if chart variable is type chart
        if(!chart instanceof Chart){
            return
        }

        if(
            typeof freshDataChart.chartCustomTitle != "string" || 
            typeof freshDataChart.label != "string" ||         
            !Array.isArray(freshDataChart.labels) ||
            !Array.isArray(freshDataChart.data) ){             
            return
        }

        // ----- getting data insights

        // chart title
        let chartTitle=""
        chartTitle+= freshData.generalData.socialServiceName 
        chartTitle+= ' ' + freshData.generalData.userTitle 

        // chart logo    
        let logoUrl=selectSocialLogo(freshData.generalData.socialServiceName)   

        // chart profile name
        let profileName=freshData.generalData.userName    

        //chart total followers
        let usersNumber= bigNumberConverter(freshData.generalData.usersNumber)   

        // new in days
        let newRecentUsers=freshData.generalData.variationUserNumberLastDays
        let variationClassRecent=""

        if(newRecentUsers>0){
            variationClassRecent="figure-flag--increase"
        }else if(newRecentUsers<0){
            variationClassRecent="figure-flag--decrease"
        }
        else{
            variationClassRecent=""
        }

        newRecentUsers=Math.abs(newRecentUsers)

        // new today
        let newUsersToday=freshData.generalData.variationUserNumberToday
        let variationClassToday=""
    

        if(newUsersToday>0){
            variationClassToday="figure-flag--increase"
        }else if(newUsersToday<0){
            variationClassToday="figure-flag--decrease"
        }
        else{
            variationClassToday=""
        }

        newUsersToday=Math.abs(newUsersToday)

        // ----- updating general data elements

        let chartTitleText=document.getElementById("chart-title-text")
        chartTitleText.innerHTML=chartTitle
    

        let socialIconContainer=document.getElementById("social-icon-container")
        socialIconContainer.src=logoUrl

        let profileUserName=document.getElementById("profile-user-name")
        profileUserName.innerHTML=profileName

        let totalFollowersNumberChart=document.getElementById("total-followers-number-chart")
        totalFollowersNumberChart.innerHTML=usersNumber

        let recentFollowersNumberFlag=document.getElementById("recent-followers-number-flag")
        recentFollowersNumberFlag.classList.remove("figure-flag--increase")
        recentFollowersNumberFlag.classList.remove("figure-flag--decrease")
        recentFollowersNumberFlag.classList.add(variationClassRecent)

        let recentFollowersNumber=document.getElementById("recent-followers-number")
        recentFollowersNumber.innerHTML=newRecentUsers

        let todayFollowersNumberFlag=document.getElementById("today-followers-number-flag")
        todayFollowersNumberFlag.classList.remove("figure-flag--increase")
        todayFollowersNumberFlag.classList.remove("figure-flag--decrease")
        todayFollowersNumberFlag.classList.add(variationClassToday)

        let todayFollowersNumber=document.getElementById("today-followers-number")
        todayFollowersNumber.innerHTML=newUsersToday

        
        /// ----- updating chart specific data

        let customTitle= document.getElementById("chart-custom-title")
        customTitle.innerHTML=freshDataChart.chartCustomTitle

        cleanChart(chart)   
    
        // only works for chart with one dataset
        chart.data.datasets[0].label=freshDataChart.label;
        chart.data.labels=freshDataChart.labels;   
        chart.data.datasets[0].data=freshDataChart.data; 

        chart.update();

        
    }

    let resizeListening=true

    const updateChartFontSize=()=>{
    
        if(resizeListening===true){
            resizeListening=false
            let resizeListeningTimeOut=setTimeout(()=>{
                resizeListening=true
                clearTimeout(resizeListeningTimeOut)
            }, 200)
    
            let chart=mainChart
            let winWidth=window.innerWidth
            
            if(winWidth<600){
                Chart.defaults.global.defaultFontSize=FONT_SIZES[0]    
            }else if(winWidth>=600 && winWidth<800){
                Chart.defaults.global.defaultFontSize=FONT_SIZES[1]   
            }else{
                Chart.defaults.global.defaultFontSize=FONT_SIZES[2] 
            }       
            chart.update()   
        } 
    }

    updateChartFontSize();


//##################### EVENT LISTENERS #####################

    let bigCards=document.getElementsByClassName("card card--big");
    for(let i=0; i<bigCards.length; i++){   
        bigCards[i].addEventListener("click", openModal)
        bigCards[i].addEventListener("keypress", openModal)
        bigCards[i].addEventListener("click", updateChart)
        bigCards[i].addEventListener("keypress", updateChart)
    }

    let closeModalButton=document.getElementById("modal-close-button");
    closeModalButton.addEventListener("click", closeModal)
    closeModalButton.addEventListener("keyup", closeModal)

    window.addEventListener('resize', updateChartFontSize);

}) //load closing 
