import React, {Component} from 'react';
import './PrimaryContainer.css';
import MapContainer from './MapContainer';
import Filter from './Filter';
import ListData from './ListData';
import MapIcon from '../img/mapIcon.png';
import ListIcon from '../img/listIcon.png';

// console.log('hi mu mu')

class PrimaryContainer extends Component {
// console.log('hi mu mu');
  constructor(props) {
    super(props);
    this.state = {
        objResult:[],
        policeLoaded:false,
        error:null,
        locationValue: ''
 }
 this.getPolice=this.getPolice.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
 this.getFormData = this.getFormData.bind(this);
}

    
      handleSubmit() {
        alert('A location was submitted: ' + this.state.locationValue);
      }

      getFormData(object){
            this.setState({
                locationValue: object
            })
            // console.log('getFormData object', object);
            // .then(() => {this.handleSubmit()});
      }
    


      
        // //map over arr here
        // const mappedData = this.props.arr.map((item)  =>
        //     <div key={item.complaint}>
        //         <ListData
        //             block={item.block}
        //             call_received={item.call_received}
        //             complaint={item.complaint}
        //             description={item.description}
        //             disposition_code={item.disposition_code}
        //             disposition_description={item.disposition_description}
        //             event_number={item.event_number}
        //             latitude={item.latitude}
        //             longitude={item.longitude}
        //             mapped_location={item.mapped_location}
        //             rpa={item.rpa}
        //             sector={item.sector}
        //             shift={item.shift}
        //             street_name={item.street_name}
        //             tencode={item.tencode}
        //             tencode_suffix={item.tencode_suffix}
        //             tencode_suffix_description={item.tencode_suffix_description}
        //             unit_dispatched={item.unit_dispatched}
        //             zone={item.zone}
        //         />
        //     </div>
        //     )

    getPolice(){

        fetch(`https://data.nashville.gov/resource/28i3-48zr.json?block=0`,{
        method: "GET",
        data: {
          "$limit" : 5000,
          "$$app_token" : "r1zPUd6qffmC6asW1Y8pPPhuj"
        },
         header: {
        "Access-Control-Allow-Origin" : "*"
   }
        }).then((result) => {
            console.log("my result",result);
            result.json().then((resolved) => {
                // console.log("Test first return ", resolved);
                let objResults=[];
               resolved.map((item, index)=>{
                   objResults.push({
                         block: item.block,
                         call_received:item.call_received,
                         complaint:item.complaint,
                         description:item.description,
                         disposition_code:item.disposition_code,
                         disposition_description:item.disposition_description,
                         event_number:item.event_number,
                         latitude:item.latitude,
                         longitude:item.longitude,
                         mapped_location:item.mapped_location,
                         rpa:item.rpa,
                         sector:item.sector,
                         shift:item.shift,
                         street_name:item.street_name,
                         tencode:item.tencode,
                         tencode_suffix:item.tencode_suffix,
                         tencode_suffix_description:item.tencode_suffix_description,
                         unit_dispatched:item.unit_dispatched,
                         zone:item.zone,

                    })
                });
                console.log("above the set state ", objResults);
            this.setState({
                objResult:objResults,
                policeLoaded: true,
              
                    });

            });
        });

          }
    componentDidMount() {
        this.getPolice();
    }


  render(){
              return(
                  <div className="App">
                      <div className="filter">
                        <Filter submit={this.getFormData} value={this.locationValue} />
                      </div>
                      <div className="map">
                         </div>
                      <div className="listDiv">
                        {/* {this.state.objResult} */}
                      <ListData />
                      </div>
                      <div className="footerNav row">
                        <div className="col-auto mx-auto"><img src={MapIcon} className="footer-icon" alt="Map Icon"></img><br />Map</div>|<div className="col-auto mx-auto"><img src={ListIcon} className="footer-icon" alt="List Icon"></img><br/>List</div>
                    </div>
                  </div>
        );
    }
}


export default PrimaryContainer;
