import React, {Component} from 'react';
import './PrimaryContainer.css';
import MapContainer from './MapContainer';
import Filter from './Filter';
import ListData from './ListData';

// console.log('hi mu mu')

// function NewPolice(props){
//     return(
//         <div>
//             {props.policeLoaded}
//             <div>
//                 <h1>{props.message}</h1>
//             </div>
//         </div>
//     )
// }

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
           
      }
    
    getPolice(){

        fetch(`https://data.nashville.gov/resource/28i3-48zr.json?block=0`,{
        method: "GET",
        data: {
          "$limit" : 50,
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
                         event_number: item.event_number,
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

  const{error, policeLoaded, objResult}=this.state;
  console.log("this is below render:",this.state.objResult);
      if (error) {
          return (
              <div>
                  <div>Error: {error.message}</div>
              </div>
          )
        }else if (!policeLoaded){
     return (
         <div> Loading ...</div>
     )
 }else{
     let policeList =objResult.map((item, index)=>
        //  console.log("inside policeList")
         <div class="policeList" key={item}>
             <p>{item.shift}</p>
          { item.event_number}
        
    </div>)
 }

              return(
                  <div className="App">
                      {/* {console.log("policeList",policeList)} */}
                      <div className="filter">
                        <Filter submit={this.getFormData} value={this.locationValue} />
                      </div>
                      <div className="map">
                         </div>
                      <div className="listDiv">

                       {/* <p> {this.state.objResult}</p> */}
                      </div>
                      <ListData/>
                      {/* {policeList} */}

                      <div className="footerNav">
                          <p>This is the container that will set state for whether to view map or list. </p>
                      </div>
                  </div>
        );
    }
}


export default PrimaryContainer;
