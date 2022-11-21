/*
 * This is a tool class used to add text for the story telling
*/
class Tools {
    constructor(){
        // test
        d3.csv('../Input.csv')
    .then(dataOutput => {
        const dataResult = dataOutput.map((d) =>({
            pos: String(d.pos),
            when: String(d.when),
            content: String(d.content)}));   
        console.log(dataResult); 
    });
    }
}