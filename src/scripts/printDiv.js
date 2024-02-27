import $ from 'jquery';



function printDiv(tagid) {

    // change root bg color from dark blue to white, when creating new document
    $("#root").css("background-color", "white")
    
    // hashid is our "selector" for jQuery searches
    let hashid = "#" + tagid;
    let tagname =  $(hashid).prop("tagName").toLowerCase() ;
    let attributes = ""; 
    let attrs = document.getElementById(tagid).attributes;
      $.each(attrs,function(i,elem){
        attributes +=  " "+  elem.name+" ='"+elem.value+"' " ;
      })
    let divToPrint= $(hashid).html() ;
    let head = "<html><head>"+ $("head").html() + "</head>" ;
    let allcontent = head + "<body  onload='window.print()' >"+ "<" + tagname + attributes + ">" +  divToPrint + "</" + tagname + ">" +  "</body></html>"  ;
    let newWin = window.open('','Print-Window');
    newWin.document.open();
    newWin.document.write(allcontent);
    newWin.document.close();

    // reset root color to dark blue from white, after writing to new document
    $("#root").css("background-color", "rgb(32, 46, 66)")
}



export default printDiv;