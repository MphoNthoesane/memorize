
const timer = setInterval(countdown,6000)
let count = 106
project()
function countdown(){
    count--
    project()
    if(count <=0){
        
        clearInterval(timer)
    }
}

function project(){
    let names = ['AFI','CAR','EUR','MID/ASIA','NAT','PAC','NAM','SAM','ESAF','EUR/NAT','APAC','MID','NACC','WACAF','AGA','AIG','AIR','AIS',
        'COM','MAP','MET','OPS','PEL','RAC','SAR','ICAO','PCAO','CAA','ALLPIRG','APIRG','IATA','CATS','CARS','PANS',
        'CAMU','FUA','CNS','ATM','SATCC','AFTN','ATS','AIM','NOTAM','IAIP','AIP','AIP AMD','AIP SUPP','AIC','GPS','ITRS',
        'SARP','WTC','FIR','AIRAC','SID','STAR','AFS','SAA','UIR','IIM','ATN','ISO', 'Annex 1','Annex 2','Annex 3','Annex 4',
        'Annex 5','Annex 6','Annex 7','Annex 8','Annex 9','Annex 10','Annex 11','Annex 12','Annex 13','Annex 14','Annex 15','Annex 16','Annex 17',
        'Annex 18','Annex 19','Doc 8697','Doc 8643','Doc 8400','Doc 4444','Doc 8168','Doc 9868','Doc 7030','Doc 9426','Doc 9432','Doc 9433',
        'Doc 9750','Doc 9854','Doc 9739','Doc 9855','Doc 8259','Doc 9741','Doc 7383','Doc 7910','Doc 8585','Doc 8697','Doc 8126','Doc 9674',
        'Doc 8896','Doc 9365','Doc 9974','SUPPs'
    ]
    const realnames = new Map([
        ['ISO','International Organization for Standardization'],
        ['ATN','Comprehensive Aeronautical Telecommunication Network'],
        ['AFI','African-Indian Ocean'],
        ['CAR','Carribean'],
        ['EUR','European'],
        ['MID/ASIA','Middle East/Asia'],
        ['NAT','North Atlantic'],
        ['PAC','Pacific'],
        ['NAM','North American'],
        ['SAM','South American'],
        ['ESAF','Eastern and Southern Africa - Nairobi'],
        ['EUR/NAT','European and Northern Atlantic - Paris'],
        ['APAC','Asia and Pacific - Bangkok'],
        ['MID','Middle East - Cairo'],
        ['NACC','North American Central American Carribean - Mexico'],
        ['WACAF','Western and Central African - Dakar'],
        ['AGA', 'Aerodromes, Air Routes, Ground Aids'],
        ['AIG','Accident Investigation'],
        ['AIR','Airworthiness'],
        ['AIS','Aeronautical Information Services'],
        ['COM','Aeronautical Communications'],
        ['MAP','Aeronautical Charts'],
        ['MET','Meteorology'],
        ['OPS','Operation of Aircraft'],
        ['PEL','Personnel Licensing'],
        ['RAC','Rules of the Air and Air Traffic Services'],
        ['SAR','Search and Rescue'],
        ['ICAO','International Civil Aviation Organization'],
        ['PCAO','Provincial Civil Aviation Organization'],
        ['CAA','Civil Aviation Authority'],
        ['ALLPIRG','All Planning and Implementation Regional Group'],
        ['APIRG','AFI Planning and Implementation Regional Group'],
        ['IATA','International Air Transport Association'],
        ['CATS','Civil Aviation Technical Standards'],
        ['CARS','Civil Aviation Regulations'],
        ['PANS',"Procedures for Air Navigation Services"],
        ['SUPPs','Regional Supplementary Procedures'],
        ['WTC','Wake Turbulence Category'],
        ['CAMU','Central Airspace Management Unit'],
        ['FUA','Flexible Use of Airspace'],
        ['CNS','Communication Navigations and Surveillance'],
        ['ATM','Air Traffic Management'],
        ['SATCC','Southern African Transport and Communications Commission'],
        ['AFTN','Aeronautical Fixed Telecommunication Network'],
        ['ATS','Air Traffic Service'],
        ['SID','Standard Departure Chart'],
        ['STAR','Standard Arrival Chart'],
        ['AFS','Abbreviations for Identifying Aeronautical Fixed Messages'],
        ['AIM','Aeronautical Information Management'],
        ['NOTAM','Notice to Airmen'],
        ['IIM','Integrated Infrastructure Management'],
        ['IAIP','International Aeronautical Information Package'],
        ['AIC','Aeronautical Information Circulars'],
        ['AIP','Aeronautical Information Publications'],
        ['AIP AMD','AIP Amendments'],
        ['AIP SUPP','AIP Supplements'],
        ['GPS','Global Positioning System'],
        ['UIR','Upper Flight Information Regions'],
        ['FIR','Flight Information Regions'],
        ['SARP','Standard and Recommended Practices'],
        ['SAA','South African Airways'],
        ['ITRS','The International Terrestrial Reference System'],
        ['AIRAC','Aeronautical Information Regulation and Control'],
        ['Annex 1','Personal Licensing'],
        ['Annex 2','Rules of the Air'],
        ['Annex 3','Meteorological Service for International Air Navigation'],
        ['Annex 4','Aeronautical Charts'],
        ['Annex 5','Units of measurements to be used in air-ground communications'],
        ['Annex 6','Operation of Aircraft'],
        ['Annex 7','Aircraft Nationality and Registration Marks'],
        ['Annex 8','Airworthiness of Aircraft'],
        ['Annex 9','Facilitation'],
        ['Annex 10','Aeronautical Telecommunications'],
        ['Annex 11','Air Traffic Services'],
        ['Annex 12','Search and Rescue'],
        ['Annex 13','Aircraft Accident Investigation'],
        ['Annex 14','Aerodromes'],
        ['Annex 15','Aeronautical Information Services'],
        ['Annex 16','Aircraft Noise'],
        ['Annex 17','Security'],
        ['Annex 18','Safe Transport of dangerous Goods by Air'],
        ['Annex 19','Safety Management'],
        ['Doc 8697','Aeronautical Chart Manual'],
        ['Doc 8643','Aircraft Types Designators'],
        ['Doc 8400','ICAO Abbreviations and Codes'],
        ['Doc 4444','Air Traffic Management (ATM)'],
        ['Doc 8168','Aircraft Operations'],
        ['Doc 9868','Training'],
        ['Doc 7030','Regional Supplementary Procedures'],
        ['Doc 9426','ATS Planning Manual'],
        ['Doc 9432','Manual of Radiotelephony'],
        ['Doc 9433','Manual concerning interception of Civil Aircraft'],
        ['Doc 9750','Global Air Nav Plan for CNS/ATM systems'],
        ['Doc 9854','Global ATM Operations concepts'],
        ['Doc 9739','Comprehensive Aeronautical Telecommunication Network (ATN) manual'],
        ['Doc 9855','Guidelines for the use of Public internet for Aeronautical Applications'],
        ['Doc 8259','Manual on the planning and Engineering of the Aeronautical Fixed Telecommunication Network'],
        ['Doc 9741','Manual of HF Data Link'],
        ['Doc 7383','AIS provided by states'],
        ['Doc 7910','Location Indicators'],
        ['Doc 8585','Designators of Aircraft Operating Aeronautical Authorities and Services'],
        ['Doc 8697','Aeronautical Chart Manual'],
        ['Doc 8126','Aeronautical Information Services Manual'],
        ['Doc 9674','World Geodetic System - 1984 (WGS - 84) Manual'],
        ['Doc 8896','Manual of Aeronautical Meteorological Practice'],
        ['Doc 9365','Manual of All Weather Operations'],
        ['Doc 9974','Flight Safety and Volcanic Ash']
    ]);
    
    shuffle(names)
    
    //function for shuffling
    function shuffle(names){
        let currentindex = names.length;
        while(currentindex !=0){
            let randomindex = Math.floor(Math.random()*names.length)
            currentindex-=1
            let x = names[currentindex]
            names[currentindex]=names[randomindex]
            names[randomindex]=x;
        }
        return names; 
    }
    
    
    
    for(let i = 0; i<names.length;i++){
        let screen = document.getElementById("screen")
        screen.style.fontSize = "150px" 
        screen.innerHTML = names[i]
        setTimeout(slowme,4000)
        function slowme(){
        screen.style.fontSize = "70px"
        screen.innerHTML = realnames.get(names[i])
        }
    
    }
}


