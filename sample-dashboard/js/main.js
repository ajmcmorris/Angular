 window.onload = function () {
    var active_players_chart = new CanvasJS.Chart("active-players",
    {
      animationEnabled: true,
      axisX: {
        valueFormatString: "DDD",
        interval:1,
        intervalType: "day"
        
      },
      axisY:{
        includeZero: false,
		lineThickness:0      
      },
      data: [
      {        
        type: "line",
		markerColor:"#ffffff",
		markerBorderColor:"#287e7e",
		markerBorderThickness:"1",
		color:"#287e7e",
        //lineThickness: 3,        
        dataPoints: [
        { x: new Date(2015, 05, 4), y: 40,label:"Mon" },
        { x: new Date(2015, 05, 5), y: 27,label:"Tue" },
        { x: new Date(2015, 05, 6), y: 30,label:"Wed" },
        { x: new Date(2015, 05, 7), y: 50 ,label:"Thur" },
        { x: new Date(2015, 05, 8), y: 30,label:"Fri"  },
        { x: new Date(2015, 05, 9), y: 40,label:"Sat"  },
        { x: new Date(2015, 05, 10), y: 20,label:"Sun" }
        
        ]
      }     
      ]
    });
	var active_tournaments_chart = new CanvasJS.Chart("active-tournaments",
    {
      animationEnabled: true,
      axisX: {
        valueFormatString: "MMM",
        interval:1,
        intervalType: "month"
        
      },
      axisY:{
        includeZero: false,
		lineThickness:0      
      },
      data: [
      {        
        type: "line",
		markerColor:"#ffffff",
		markerBorderColor:"#090a11",
		markerBorderThickness:"1",
		color:"#090a11",
        //lineThickness: 3,        
        dataPoints: [
        { x: new Date(2015, 00, 4), y: 400 },
        { x: new Date(2015, 01, 5), y: 750},
        { x: new Date(2015, 02, 6), y: 600},
        { x: new Date(2015, 03, 7), y: 900 },
        { x: new Date(2015, 04, 8), y: 600 },
        { x: new Date(2015, 05, 9), y: 700 },
        { x: new Date(2015, 06, 10), y: 300}
        
        ]
      }     
      ]
    });
	
	active_players_chart.render();
	active_tournaments_chart.render();
}