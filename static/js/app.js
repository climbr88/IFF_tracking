// from data.js

var tbody = d3.select("tbody");
$ = document.querySelector.bind(document)
$$ = document.querySelectorAll.bind(document)
// YOUR CODE HERE!
var button = d3.select('#filter-btn');  
var form = d3.select('#form')
button.on("click", runEnter);
form.on("submit", runEnter);

// define base urls
//add full BL with SCAC
const aclubase = "https://www.aclcargo.com/trackCargo.php?search_for="
const aplubase =  "https://www.apl.com/ebusiness/tracking/search?SearchBy=BL&Reference="
const cmdubase = "https://www.cma-cgm.com/ebusiness/tracking/search?Reference="
const cosubase = "https://elines.coscoshipping.com/ebusiness/cargoTracking"
const eglvbase = "https://www.shipmentlink.com/servlet/TDB1_CargoTracking.do"
const hlcubase = "https://www.hapag-lloyd.com/en/online-business/tracing/tracing-by-booking.html?blno="
const hdmubase = "http://www.hmm21.com/cms/business/ebiz/trackTrace/trackTrace/index.jsp?type=1&number="
const maeubase = "https://www.maersk.com/tracking/#tracking/"
const medubase = "https://www.msc.com/track-a-shipment?agencyPath=usa"
const oneybase = "https://ecomm.one-line.com/ecom/CUP_HOM_3301.do?sessLocale=en"
const oolubase = "https://www.oocl.com/eng/Pages/default.aspx"
const sudubase = "https://www.hamburgsud-line.com/liner/en/liner_services/ecommerce/track_trace/index.html"
const zimubase = "https://www.zim.com/tools/track-a-shipment?consnumber="



function runEnter() {
    d3.event.preventDefault();
    
    $('tbody').innerHTML = "";
    $('textarea').innerHTML = "";
    var textarea = $('textarea');
    var textareaValue = textarea.value
    var input = textareaValue.split('\n');
    //console.log(input)
    var array = []
    for (i=0; i < input.length; i++) {
      var scac1 = input[i].substring(0,4);
      
      var scac = scac1.toUpperCase()
      
       if (scac === 'HLCU') {
         hlculink = hlcubase + input[i]
         array.push(hlculink)
       }
       if (scac === 'ZIMU') {
         zimulink = zimubase + input[i]
         array.push(zimulink)
       }
       
        if (scac === 'ACLU') {
          acluBL = input[i].substring(4,15)
          aclulink = aclubase + acluBL
          array.push(aclulink)
     }
        if (scac === 'CMDU') {
          cmduBL = input[i].substring(4,15)
          cmdulink = cmdubase + cmduBL + '&FromHome=true' 
          array.push(cmdulink)
     }
        if (scac === 'MAEU') {
         maeuBL = input[i].substring(4,15)
         maeulink = maeubase + maeuBL
         array.push(maeulink)
     }
        if (scac === 'APLU') {
          apluBL = input[i].substring(4,15)
          aplulink = aplubase + apluBL
          array.push(aplulink)
      }
        if (scac == 'COSU') {
          array.push(cosubase)
        }
        if (scac == 'EGLV') {
          array.push(eglvbase)
        }
        if (scac == 'SUDU') {
          array.push(sudubase)
        }
        if (scac == 'HDMU') {
          hdmuBL = input[i].substring(4,15)
          hdmulink = hdmubase + hdmuBL + '&is_quick=Y&quick_params='
          array.push(hdmulink)
        }
        if (scac == 'MEDU') {
          array.push(medubase)
        }
        if (scac == 'ONEY') {
            array.push(oneybase)
        }
        if (scac == 'OOLU') {
            array.push(oolubase)
        }


    }
    

       var table = document.getElementById('table');
       console.log(table);
        // var body = document.createElement('tbody');
        // console.log(body)
        // // table.appendChild('tbody');
        // for (var j=0; j < array.length; j++) {
        //    var row = document.createElement('tr');
        //    var cell = row.append('td');
        //    var link = document.createElement('a');
        //    link.href = array[j];
        // //   console.log(href)
        //    cell.append(link);
        //    row.appendChild(cell)
        //    table.appendChild(row);
        //  };
        // var type = document.createElement('td');
        // type.textContent = item.type; 
        // var size =  document.createElement('td');
        // size.textContent = item.size;
        // var link_td = document.createElement('td');
        // var link = document.createElement('a');
        // link.textContent = item.link;
        // link.href = item.link
        // link_td.appendChild(link);
        // row.appendChild(type);
        // row.appendChild(size);
        // row.appendChild(link);
        // table.appendChild(row);

        // });
        // for (var j = 0; j < array.length; j++) {


        //   var cell = document.createElement('td');
        //   cell.appendChild(document.createTextNode(array[j]));
        //   HTMLTableRowElement.appendChild(cell)
        //   var row = tbody.append("tr");
        //   var cell = row.append('a');
        //   cell.text(array[j]);
         
          // var link = document.createElement('a');
          // link.textContent = array[j].link;
          // link.href = array[j].link
          // row.appendChild(link);
//           var link = document.createElement("a");
//           link.setAttribute("href", array[j])
//           link.className = "someCSSclass";
// // For IE only, you can simply set the innerText of the node.
// // The below code, however, should work on all browsers.
//           var linkText = document.createTextNode("Click me");
//           link.appendChild(linkText);

// // Add the link to the previously created TableCell.
//           newCell.appendChild(link);

   
      // var placeToPutLinks = document.getElementById('table');

      // for (j = 0; j < array.length; j++) {
      //   var anchorTag = document.createElement('a');
      //   var hrefValue = array[j];
      //   anchorTag.href = hrefValue;
      //   placeToPutLinks.appendChild(anchorTag);
        for (j = 0; j < array.length; j++){
          var a = document.createElement('a'); 
          var row = tbody.append("tr");
          var cell = row.append("td");
          // cell.innerHTML = array[j];
            
          var table = document.getElementById('table'); 
            console.log(a)
                // Create the text node for anchor element. 
                var link = document.createTextNode("This is link"); 
                  
                // Append the text node to anchor element. 
                a.appendChild(link);  
                  
                // Set the title. 
                a.title = "This is Link";  
                  
                // Set the href property. 
                a.href = array[j];
                  
                // Append the anchor element to the body. 
                // 
                document.body.prepend[a.href]  


        }
      console.log(table)  
      // }
      // var link = document.createElement('a');
      // link.className = 'wplauncher-link';
      // link.innerHTML = 'Example Link';
      // document.body.appendChild(link);

    
    }
    //       var cell = row.append("td");
    //       cell.text(value);
    //       $('#datetime').value = ""
    // var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

    // // Insert a row in the table at the last row
    // var newRow   = tableRef.insertRow();

    // // Insert a cell in the row at index 0
    // var newCell  = newRow.insertCell(0);

    
    

    

