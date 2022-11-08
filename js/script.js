

Promise.all([d3.csv('./data/words-without-force-positions.csv')]).then( data =>
    {
        
        // processing data here
    // ******* STATE MANAGEMENT *******
    // This should be all you need, but feel free to add to this if you need to 
    // communicate across the visualizations
    const globalApplicationState = {
        selectedCountry: null,
        selectedState:null, // importing or exporting
        selectedYear:null, // this should be initialized to the latest year
        importingChart: null, //chord chart
        exportingChart:null,// chord chart
        lineChart: null,
        data:null
    };
    });//background: #88b6f7;