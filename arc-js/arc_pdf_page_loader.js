
function menu_constructor_stage_2(meid, mename){

  var mediv = document.createElement("div");
  var me_h = document.createElement("a");


  mediv.setAttribute("class", "menu_entry");
  mediv.setAttribute("id",meid);
  me_h.setAttribute("href","content/pages/dynamic/"+meid+".pdf");
  me_h.setAttribute("target", "_blank");
  me_h.innerHTML= mename;

  mediv.appendChild(me_h);

  $("#arc_side").append(mediv);

  return 0;

}

function menu_constructor_stage_1(xml_file_path){

  $.ajax({
  type: "GET",
  url: xml_file_path,
  dataType: "xml",
  success: function(xml) {
      $(xml).find('entry').each(function(){
          var mename = $(this).find('mename').text();
          var meid = $(this).find('meid').text();
          var pdf_path = $(this).find('pdf_path').text();
          menu_constructor_stage_2(meid, mename);
      });
  }
});

return 0;
}

$(document).ready(function (){

  menu_constructor_stage_1("content/pages/dynamic/dpages.xml");


});
