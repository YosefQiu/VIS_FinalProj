
class Chord {
    /**
     * Creates a bubble chart Object
     */

    // https://observablehq.com/@d3/chord-diagram
    // chord chart takes array of 10*10 as input
    constructor(data) {
        this.data = data
        this.vizWidth = 300;
        this.vizHeight = 30;
        this.smallVizHeight = 20;
        this.expanding = false;
        this.firstDraw = true;
        this.brushed = false;
        this.drawChart()
        
    }
    drawChart(){
        this.drawWidgets()
        this.drawAxis(svgHeight, svgWidth)
        this.updateChart()
    }   
    drawAxis(svgHeight,svgWidth){
        let leftMargin = 20
        let rightMargin = 20
        let xAxis = []
        let xAxisNum = [50,40,30,20,10,0,10,20,30,40,50]
        for(let i=0;i<=10;i++){
            xAxis.push((svgWidth-leftMargin-rightMargin)/10*i+leftMargin)
        }
        // draw the line
        d3.select("#linesAndAxis").selectAll("line")
        .data(xAxis)
        .join("line")
        .attr("x1",d=>d-leftMargin/2)
        .attr("y1",30)
        .attr("x2",d=>d-leftMargin/2)
        .attr("y2",40)
        .style("stroke","black")

        // draw text and axis
        d3.select("#axis").selectAll("text")
        .data(xAxis)
        .join("text")
        .attr("x",(d,i)=>{ if(i==5){;return d-leftMargin/4*3}else{return d-leftMargin;}
        })
        .attr("y",55)
        .text((d,i)=>(xAxisNum[i]))
        .style("stroke","black")
        
        d3.select("#axis")
        .append("text")
        .attr("x",0)
        .attr("y",20)
        .text("Democratic leaning")
        .style("stroke","black")

        d3.select("#axis")
        .append("text")
        .attr("x",svgWidth-160)
        .attr("y",20)
        .text("Republican leaning")
        .style("stroke","black")

        // first draw don't draw animation
        if(this.firstDraw){
            d3.select("#middleLine").append("line")
            .join("line")
            .attr("x1",365)
            .attr("y1",65)
            .attr("x2",365)
            .attr("y2",d=>200)
            .style("stroke","black")
            this.firstDraw = false;
        }
        else{
            d3.select("#middleLine").selectAll("line")
            .join("line")
            .attr("x1",365)
            .attr("y1",65)
            .transition()
            .duration(1500)
            .attr("x2",365)
            .attr("y2",d=>{if(this.expanding){return 700}else{return 200}})
            .style("stroke","black")
        }
    }
    drawWidgets(){
        // add text
        d3.select("#header-widgets")
        .append("text")
        .text("Grouped by Topic")
        .attr("x",0)
        .attr("y",50)
        this.drawExtreme = false
        this.storyTelling = false
        document.querySelector('.extreme').onclick=(event)=>{
                if(this.storyTelling){
                    this.clearExtreme();
                    this.storyTelling=!this.storyTelling;
                }
                else{
                    this.showExtreme();
                    this.storyTelling=!this.storyTelling;
                    
                }
                
        }
        
        let temp = null;
        d3.select(".switch")
        .on("click",(event, d)=>{
            // somehow it called twice (checkbox and toggle)
            // so add a check so only called once
            if(event.target.type == "checkbox"){
                if(!this.expanding){
                    this.expanding = true;
                    this.drawBubbles();
                }
                else{
                    this.expanding = false;
                    this.drawBubbles();
                }
            }
            
        })
    } 

    // this will be called in script.js 
    // when the year changes
    updateChart() {

    }
}